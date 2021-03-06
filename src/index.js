/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  showCity, showTempearture, showIcon,
  showDescription, showHumidity, showWind, searchCity,
  searchCityBtn, showCountry, weatherContainer,
  showBodyBckImg, showTempDegButton,
} from './dom';
import config from '../config';

const myKey = config.API_KEY;
let temperatureDegButton = showTempDegButton;

async function fetchWeather(city) {
  try {
    const fetchUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`, { mode: 'cors' });
    const response = await fetchUrl.json();
    const result = await displayWeather(response);
    return result;
  } catch (err) {
    showCity.innerText = `No data available for ${city}`;
    showIcon.style.display = 'none';
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

async function displayWeather(data) {
  const { name } = await data;
  const { icon, description } = await data.weather[0];
  const { temp, humidity } = await data.main;
  const { speed } = await data.wind;
  const { country } = await data.sys;

  showCity.innerText = `Weather in ${name}`;
  showIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
  showDescription.innerText = description;
  showTempearture.innerHTML = `${(temp / 10).toFixed(2)}℃`;
  showCountry.innerText = ` Country: ${country} `;
  showHumidity.innerText = ` Humidity: ${humidity} %`;
  showWind.innerText = ` Wind speed: ${speed} m/s`;
  showTempDegButton.className = 'switch_unit';
  weatherContainer.classList.remove('loading');
  showBodyBckImg.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;


  let tempDataVal = data.main.temp;
  temperatureDegButton.addEventListener('click', (e) => {
    e.preventDefault();

    const tempSwitch = temperatureSwitch(tempDataVal, temperatureDegButton.innerHTML);
    tempDataVal = tempSwitch.temp;
    temperatureDegButton.innerHTML = tempSwitch.type;

    showTempearture.innerHTML = `${Math.floor(tempSwitch.temp) / 10}${tempSwitch.type}`;
  });
}

async function search() {
  await fetchWeather(searchCity.value);
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

fetchWeather('New york');
