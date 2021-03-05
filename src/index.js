/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import {
  showCity, showTempearture, showIcon,
  showDescription, showHumidity, showWind, searchCity,
  searchCityBtn, showCountry, weatherContainer,
  showBodyBckImg, showTempDegButton,
} from './dom';

const API_KEY = '70c8519b5e37ccac35bcbea2d8b91b5b';
let temperatureDegButton = showTempDegButton;

const fetchWeather = async (city) => {
  try {
    const fetchUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });
    const response = await fetchUrl.json();
    const result = await displayWeather(response);
    return result;
  } catch (err) {
    showCity.innerText = `No data available for ${city}`;
    showIcon.style.display = 'none';;
    showDescription.innerText = '';
    showTempearture.innerText = '';
    showCountry.innerText = '';
    showHumidity.innerText = '';
    showWind.innerText = '';
    showTempDegButton.style.display = 'none';
  }
}

const switchButton = (type) => {
  const btn = document.createElement('btn');
  btn.className = 'switch-unit';
  btn.innerHTML = type;
  weatherContainer.appendChild(btn);
  return btn;
};

const temperatureSwitch = (val, type) => {
  let temp = null;
  if (type === '℃') {
    temp = (val * (9 / 5) + 32).toFixed(1);
    type = '℉';
  } else {
    temp = ((val - 32) * (5 / 9)).toFixed(1);
    type = '℃';
  }
  return { temp, type };
};

const displayWeather = async (data) => {
  const { name } = await data;
  const { icon, description } = await data.weather[0];
  const { temp, humidity } = await data.main;
  const { speed } = await data.wind;
  const { country } = await data.sys;

  showCity.innerText = `Weather in ${name}`;
  showIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
  showDescription.innerText = description;
  showTempearture.innerHTML = `${temp}℃`;
  showCountry.innerText = ` Country: ${country} `;
  showHumidity.innerText = ` Humidity: ${humidity} %`;
  showWind.innerText = ` Wind speed: ${speed} m/s`;
  weatherContainer.classList.remove('loading');
  showBodyBckImg.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;

  let tempDataVal = data.main.temp;
  temperatureDegButton.addEventListener('click', (e) => {
    e.preventDefault();

    const tempSwitch = temperatureSwitch(tempDataVal, temperatureDegButton.innerHTML);
    tempDataVal = tempSwitch.temp;
    temperatureDegButton.innerHTML = tempSwitch.type;
    showTempearture.innerHTML = `${tempSwitch.temp}${tempSwitch.type}`;
  });
}

const search = async () => {
  await fetchWeather(searchCity.value);
  console.log(searchCity.value);
  searchCity.value = '';
}

searchCityBtn.addEventListener('click', () => {
  temperatureDegButton.remove();
  temperatureDegButton = switchButton('℃');
  search();
});

searchCity.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    temperatureDegButton.remove();
    temperatureDegButton = switchButton('℃');
    search();
  }
});
