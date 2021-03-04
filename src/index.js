import { showCity, showTempearture, showIcon, 
  showDescription, showHumidity, showWind, searchCity,
  searchCityBtn, showCountry, weatherContainer, 
  showBodyBckImg, showTempDegButton } from "./dom";


async function fetchWeather(city) {
  let fetch_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });
  let response = await fetch_url.json();
  let result = await displayWeather(response);
}

const switchButton = (type) => {
  showTempDegButton.innerHTML = type;
  weatherContainer.appendChild(showTempDegButton);
  return showTempDegButton;
}

const temperatureSwitch = (val, type) => {
  let temp;
  if (type === '℃') {
    temp = Math.floor(val * (9/5) + 32);
    type = '℉';
  } else {
    temp = Math.floor((val - 32) * (5/9));
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

  let tempDataVal = temp;
  showTempDegButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const tempSwitch = temperatureSwitch(tempDataVal, showTempDegButton.innerHTML);
    tempDataVal = tempSwitch.temp;
    showTempDegButton.innerHTML = tempSwitch.type;
    showTempearture.innerHTML = `${tempSwitch.temp}${tempSwitch.type}`;
  });
  
}

async function search() {
  await fetchWeather(searchCity.value);
}

searchCityBtn.addEventListener('click', () => {
  switchButton('℃');
  search();
});

searchCity.addEventListener("keyup", (e) => {
  if (e.key == "Enter") { 
    switchButton('℃');
    search();
  };
});
