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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showCity\": () => (/* binding */ showCity),\n/* harmony export */   \"showTempearture\": () => (/* binding */ showTempearture),\n/* harmony export */   \"showDescription\": () => (/* binding */ showDescription),\n/* harmony export */   \"showHumidity\": () => (/* binding */ showHumidity),\n/* harmony export */   \"showWind\": () => (/* binding */ showWind)\n/* harmony export */ });\nconst showCity = document.querySelector(\".show-city\");\nconst showTempearture = document.querySelector(\".show-temp\");\nconst showDescription = document.querySelector(\"show-description\");\nconst showHumidity = document.querySelector(\".show-humidity\");\nconst showWind = document.querySelector(\".show-wind\");\n\n\n\n//# sourceURL=webpack://js-weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\nasync function fetchWeather(city) {\n  let fetch_url = await fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\"\n  + city \n  + \"&appid=\" \n  + apiKey );\n  let response = await fetch_url.json();\n  let result = await displayWeather(response)\n  console.log(result)\n}\n\nasync function displayWeather(data) {\n  const { name } = data;\n  const { icon, description } = data.weather[0];\n  const { temp, humidity } = data.main;\n  const { speed } = data.wind;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showCity.innerText = `Weather in ${name}`;\n  console.log(name, icon, description, temp, humidity, speed);\n  console.log(_dom__WEBPACK_IMPORTED_MODULE_0__.showCity)\n}\n\n\n// let weather = {\n//   apiKey: \"70c8519b5e37ccac35bcbea2d8b91b5b\",\n//   fetchWeather: function(city) {\n//     fetch(\n//       \"http://api.openweathermap.org/data/2.5/weather?q=\" \n//       + city \n//       + \"&appid=\" \n//       + this.apiKey\n//     )\n//     .then((response) => response.json())\n//     .then((data) => this.displayWeather(data));\n//   },\n//   displayWeather: function(data) {\n//     const { name } = data;\n//     const { icon, description } = data.weather[0];\n//     const { temp, humidity } = data.main;\n//     const { speed } = data.wind;\n//     console.log(name, icon, description, temp, humidity, speed);\n//   }\n// };\n\nconsole.log(fetchWeather('Tokyo'))\n\n//# sourceURL=webpack://js-weather-app/./src/index.js?");

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