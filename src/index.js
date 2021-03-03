import { showCity, showTempearture, showDescription, showHumidity, showWind }
  from "./dom";



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
  console.log(name, icon, description, temp, humidity, speed);
  console.log(showCity)
}


// let weather = {
//   apiKey: "70c8519b5e37ccac35bcbea2d8b91b5b",
//   fetchWeather: function(city) {
//     fetch(
//       "http://api.openweathermap.org/data/2.5/weather?q=" 
//       + city 
//       + "&appid=" 
//       + this.apiKey
//     )
//     .then((response) => response.json())
//     .then((data) => this.displayWeather(data));
//   },
//   displayWeather: function(data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity } = data.main;
//     const { speed } = data.wind;
//     console.log(name, icon, description, temp, humidity, speed);
//   }
// };

console.log(fetchWeather('Tokyo'))