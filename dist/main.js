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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showCity\": () => (/* binding */ showCity),\n/* harmony export */   \"showTempearture\": () => (/* binding */ showTempearture),\n/* harmony export */   \"showIcon\": () => (/* binding */ showIcon),\n/* harmony export */   \"showDescription\": () => (/* binding */ showDescription),\n/* harmony export */   \"showHumidity\": () => (/* binding */ showHumidity),\n/* harmony export */   \"showWind\": () => (/* binding */ showWind),\n/* harmony export */   \"searchCity\": () => (/* binding */ searchCity),\n/* harmony export */   \"searchCityBtn\": () => (/* binding */ searchCityBtn),\n/* harmony export */   \"weatherContainer\": () => (/* binding */ weatherContainer),\n/* harmony export */   \"showBodyBckImg\": () => (/* binding */ showBodyBckImg),\n/* harmony export */   \"showCountry\": () => (/* binding */ showCountry),\n/* harmony export */   \"showTempDegButton\": () => (/* binding */ showTempDegButton)\n/* harmony export */ });\nconst showCity = document.querySelector(\".show-city\");\nconst showTempearture = document.querySelector(\".show-temp\");\nconst showIcon = document.querySelector(\".show-icon\");\nconst showDescription = document.querySelector(\".show-description\");\nconst showHumidity = document.querySelector(\".show-humidity\");\nconst showWind = document.querySelector(\".show-wind\");\nconst searchCity = document.querySelector(\".search-city-input\");\nconst showCountry = document.querySelector(\".show-country\");\nconst searchCityBtn = document.querySelector(\".search-city-btn\");\nconst weatherContainer = document.querySelector(\".weather\");\nconst showBodyBckImg = document.getElementsByTagName(\"body\")[0]; \nconst showTempDegButton = document.querySelector(\".switch-unit\");\n\n\n\n//# sourceURL=webpack://js-weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nasync function fetchWeather(city) {\n  let fetch_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });\n  let response = await fetch_url.json();\n  let result = await displayWeather(response);\n}\n\nconst switchButton = (type) => {\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton.innerHTML = type;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.weatherContainer.appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton);\n  return _dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton;\n}\n\nconst temperatureSwitch = (val, type) => {\n  let temp;\n  if (type === '℃') {\n    temp = Math.floor(val * (9/5) + 32);\n    type = '℉';\n  } else {\n    temp = Math.floor((val - 32) * (5/9));\n    type = '℃';\n  }\n  return { temp, type };\n}\n\nasync function displayWeather(data) {\n  const { name } = await data;\n  const { icon, description } = await data.weather[0];\n  const { temp, humidity } = await data.main;\n  const { speed } = await data.wind;\n  const { country } = await data.sys;\n  \n  _dom__WEBPACK_IMPORTED_MODULE_0__.showCity.innerText = `Weather in ${name}`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showDescription.innerText = description;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showTempearture.innerHTML = `${temp}℃`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showCountry.innerText = ` Country: ${country} `;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showHumidity.innerText = ` Humidity: ${humidity} %`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showWind.innerText = ` Wind speed: ${speed} m/s`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.weatherContainer.classList.remove(\"loading\");\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showBodyBckImg.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;\n\n  let tempDataVal = temp;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    \n    const tempSwitch = temperatureSwitch(tempDataVal, _dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton.innerHTML);\n    tempDataVal = tempSwitch.temp;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showTempDegButton.innerHTML = tempSwitch.type;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showTempearture.innerHTML = `${tempSwitch.temp}${tempSwitch.type}`;\n  });\n  \n}\n\nasync function search() {\n  await fetchWeather(_dom__WEBPACK_IMPORTED_MODULE_0__.searchCity.value);\n}\n\n_dom__WEBPACK_IMPORTED_MODULE_0__.searchCityBtn.addEventListener('click', () => {\n  switchButton('℃');\n  search();\n});\n\n_dom__WEBPACK_IMPORTED_MODULE_0__.searchCity.addEventListener(\"keyup\", (e) => {\n  if (e.key == \"Enter\") { \n    switchButton('℃');\n    search();\n  };\n});\n\n\n//# sourceURL=webpack://js-weather-app/./src/index.js?");

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