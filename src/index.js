import { showCity, showTempearture, showIcon, 
  showDescription, showHumidity, showWind, searchCity,
  searchCityBtn, showCountry, weatherContainer, 
  showBodyBckImg, showTempDegButton } from "./dom";

let temperatureDegButton = showTempDegButton;

async function fetchWeather(city) {
  try {
    let fetch_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });
    let response = await fetch_url.json();
    let result = await displayWeather(response);
    return result;
  } catch (err) {
    showCity.innerText = `No data available for ${city}`;
    showIcon.src = '';
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
}

const temperatureSwitch = (val, type) => {
  let temp = null;
  if (type === '℃') {
    temp = (val * (9/5) + 32).toFixed(1);
    type = '℉';
  } else {
    temp = ((val - 32) * (5/9)).toFixed(1);
    type = '℃';
  }
  return { temp, type };
}

async function displayWeather(data) {
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
  weatherContainer.classList.remove("loading");
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

async function search() {
  await fetchWeather(searchCity.value);
  searchCity.value = '';
}

searchCityBtn.addEventListener('click', () => {
  temperatureDegButton.remove();
  temperatureDegButton = switchButton('℃');
  search();
});

searchCity.addEventListener("keyup", (e) => {
  if (e.key == "Enter") { 
    temperatureDegButton.remove();
    temperatureDegButton = switchButton('℃');
    search();
  };
});
