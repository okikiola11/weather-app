/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showCity\": () => (/* binding */ showCity),\n/* harmony export */   \"showTempearture\": () => (/* binding */ showTempearture),\n/* harmony export */   \"showIcon\": () => (/* binding */ showIcon),\n/* harmony export */   \"showDescription\": () => (/* binding */ showDescription),\n/* harmony export */   \"showHumidity\": () => (/* binding */ showHumidity),\n/* harmony export */   \"showWind\": () => (/* binding */ showWind),\n/* harmony export */   \"searchCity\": () => (/* binding */ searchCity),\n/* harmony export */   \"searchCityBtn\": () => (/* binding */ searchCityBtn),\n/* harmony export */   \"weatherContainer\": () => (/* binding */ weatherContainer),\n/* harmony export */   \"showBodyBckImg\": () => (/* binding */ showBodyBckImg),\n/* harmony export */   \"showCountry\": () => (/* binding */ showCountry),\n/* harmony export */   \"showTempDegButton\": () => (/* binding */ showTempDegButton)\n/* harmony export */ });\nconst showCity = document.querySelector('.show-city');\nconst showTempearture = document.querySelector('.show-temp');\nconst showIcon = document.querySelector('.show-icon');\nconst showDescription = document.querySelector('.show-description');\nconst showHumidity = document.querySelector('.show-humidity');\nconst showWind = document.querySelector('.show-wind');\nconst searchCity = document.querySelector('.search-city-input');\nconst showCountry = document.querySelector('.show-country');\nconst searchCityBtn = document.querySelector('.search-city-btn');\nconst weatherContainer = document.querySelector('.weather');\nconst showBodyBckImg = document.getElementsByTagName('body')[0];\nconst showTempDegButton = document.querySelector('.switch-unit');\n\n\n\n//# sourceURL=webpack://js-weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* eslint-disable consistent-return */\n/* eslint-disable no-use-before-define */\n\n\nconst API_KEY = '70c8519b5e37ccac35bcbea2d8b91b5b';\nlet temperatureDegButton = _dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton;\n\nasync function fetchWeather(city) {\n  try {\n    const fetchUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });\n    const response = await fetchUrl.json();\n    const result = await displayWeather(response);\n    return result;\n  } catch (err) {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showCity.innerText = `No data available for ${city}`;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showIcon.style.display = 'none';\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showDescription.innerText = '';\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showTempearture.innerText = '';\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showCountry.innerText = '';\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showHumidity.innerText = '';\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showWind.innerText = '';\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton.style.display = 'none';\n  }\n}\n\nconst switchButton = (type) => {\n  const btn = document.createElement('btn');\n  btn.className = 'switch-unit';\n  btn.innerHTML = type;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.weatherContainer.appendChild(btn);\n  return btn;\n};\n\nconst temperatureSwitch = (val, type) => {\n  let temp = null;\n  if (type === '℃') {\n    temp = (val * (9 / 5) + 32).toFixed(1);\n    type = '℉';\n  } else {\n    temp = ((val - 32) * (5 / 9)).toFixed(1);\n    type = '℃';\n  }\n  return { temp, type };\n};\n\nasync function displayWeather(data) {\n  const { name } = await data;\n  const { icon, description } = await data.weather[0];\n  const { temp, humidity } = await data.main;\n  const { speed } = await data.wind;\n  const { country } = await data.sys;\n\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showCity.innerText = `Weather in ${name}`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showDescription.innerText = description;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showTempearture.innerHTML = `${(temp / 10).toFixed(2)}℃`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showCountry.innerText = ` Country: ${country} `;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showHumidity.innerText = ` Humidity: ${humidity} %`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showWind.innerText = ` Wind speed: ${speed} m/s`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton.className = 'switch_unit';\n  _dom__WEBPACK_IMPORTED_MODULE_0__.weatherContainer.classList.remove('loading');\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showBodyBckImg.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;\n\n\n  let tempDataVal = data.main.temp;\n  temperatureDegButton.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    const tempSwitch = temperatureSwitch(tempDataVal, temperatureDegButton.innerHTML);\n    tempDataVal = tempSwitch.temp;\n    temperatureDegButton.innerHTML = tempSwitch.type;\n\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showTempearture.innerHTML = `${Math.floor(tempSwitch.temp) / 10}${tempSwitch.type}`;\n  });\n}\n\nasync function search() {\n  await fetchWeather(_dom__WEBPACK_IMPORTED_MODULE_0__.searchCity.value);\n  _dom__WEBPACK_IMPORTED_MODULE_0__.searchCity.value = '';\n}\n\n_dom__WEBPACK_IMPORTED_MODULE_0__.searchCityBtn.addEventListener('click', () => {\n  temperatureDegButton.remove();\n  temperatureDegButton = switchButton('℃');\n  search();\n});\n\n_dom__WEBPACK_IMPORTED_MODULE_0__.searchCity.addEventListener('keyup', (e) => {\n  if (e.key === 'Enter') {\n    temperatureDegButton.remove();\n    temperatureDegButton = switchButton('℃');\n    search();\n  }\n});\n\nfetchWeather('New york');\n\n\n//# sourceURL=webpack://js-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;