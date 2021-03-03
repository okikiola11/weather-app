import { showCity, showTempearture, showIcon, 
  showDescription, showHumidity, showWind, searchCity,
  searchCityBtn } from "./dom";


async function fetchWeather(city) {
  let fetch_url = await fetch("http://api.openweathermap.org/data/2.5/weather?q="
  + city 
  + "&appid=" 
  + apiKey );
  let response = await fetch_url.json();
  let result = await displayWeather(response)
  console.log(result)
}

async function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  showCity.innerText = `Weather in ${name}`;
  showIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
  showDescription.innerText = description;
  showTempearture.innerText = temp + "°C";
  showHumidity.innerText = ` Humidity: ${humidity} %`;
  showWind.innerText = ` Wind speed: ${speed} km/h`;

  console.log(name, icon, description, temp, humidity, speed);
  console.log(showCity)
}

function search() {
  fetchWeather(searchCity.value);
}

searchCityBtn.addEventListener('click', () => {
  search();
});
