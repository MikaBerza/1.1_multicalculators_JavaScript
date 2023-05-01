/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/6_0_mainPage/mainSpeedClickSection.js":
/*!***************************************************!*\
  !*** ./src/6_0_mainPage/mainSpeedClickSection.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imgMain_4_section_1_29fonSectionFour_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgMain/4_section/1.29fonSectionFour.jpg */ \"./src/6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg\");\n/* harmony import */ var _imgMain_4_section_1_30iconClick_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgMain/4_section/1.30iconClick.png */ \"./src/6_0_mainPage/imgMain/4_section/1.30iconClick.png\");\n/* harmony import */ var _imgMain_4_section_1_31iconUpdate_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgMain/4_section/1.31iconUpdate.png */ \"./src/6_0_mainPage/imgMain/4_section/1.31iconUpdate.png\");\n/* eslint-disable import/first */\n// 'use strict';  отключил строгий режим по требованию eslint\n\n// Считываем кнопку клик\nconst btnClick = document.getElementById('btnClickSectionFour');\n// Считываем кнопку перезагрузить\nconst btnReboot = document.getElementById('btnRebootSectionFour');\n// Считываем вывод таймер\nconst timerSF = document.getElementById('timerSectionFour');\n// Считываем вывод счетчика\nconst counterSF = document.getElementById('counterSectionFour');\n// Считываем вывод результата\nconst resultSF = document.getElementById('resultSectionFour');\n\n// импортируем картинки (4_section)\n// eslint-disable-next-line no-unused-vars\n\n// eslint-disable-next-line no-unused-vars\n\n// eslint-disable-next-line no-unused-vars\n\n\n/* Инициализируем переменную (timer) как глобальную\r\nчтобы в ней между запусками функции хранилось значение */\nlet timerClick;\n\n/* Инициализируем переменную (internalCounter)\r\nвнутренний счетчик и присваиваем ей значение 30\r\n(это будет 30 секунд) */\nlet internalCounter = 30;\n\n// Функция запускает таймер\nfunction startTimer() {\n  // отвязываем обработчик события (т.е. по клику перестаем запускать функцию startTimer)\n  this.removeEventListener('click', startTimer);\n  timerClick = setInterval(() => {\n    --internalCounter;\n    // проверяю как работате\n    // console.log(internalCounter);\n    timerSF.innerHTML = internalCounter;\n    if (internalCounter === 0) {\n      // Останавливаем таймер\n      clearInterval(timerClick);\n    }\n    // console.log(internalCounter);\n  }, 1000);\n}\n\n// Функция запускает клики по кнопке и счетчик\nfunction startClick() {\n  counterSF.innerHTML = Number(counterSF.innerHTML) + 1;\n  if (internalCounter === 0) {\n    // отвязываем обработчик события (т.е. по клику перестаем запускать функцию startClick)\n    this.removeEventListener('click', startClick);\n    /* Выводим общее кол-во кликов в секунду.\r\n    Метод toFixed производит округление числа до указанного знака в дробной части */\n    resultSF.innerHTML = (counterSF.innerHTML / 30).toFixed(2);\n  }\n}\n\n// Функция устанавливает значения в исходные положения\nfunction setStartPosition() {\n  // clearInterval останавливаем таймер\n  clearInterval(timerClick);\n  // Внутреннюю переменную устанавливаем в исходное положение\n  internalCounter = 30;\n  // Вывод таймера устанавливаем в исходное положение\n  timerSF.innerHTML = 30;\n  // Вывод счетчика устанавливаем в исходное положение\n  counterSF.innerHTML = 0;\n  // Вывод результата устанавливаем в исходное положение\n  resultSF.innerHTML = 0;\n  // Восстанавливаем обработчики событий, чтобы можно было заного запустить и кликать)\n  btnClick.addEventListener('click', startTimer);\n  btnClick.addEventListener('click', startClick);\n}\n\n/* Метод addEventListener - добавляет обработчик события к указанному элементу и\r\nзапустить выполнение программы при совершении заданного действия */\nbtnClick.addEventListener('click', startTimer);\nbtnClick.addEventListener('click', startClick);\nbtnReboot.addEventListener('click', setStartPosition);\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/mainSpeedClickSection.js?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg":
/*!*******************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.29fonSectionFour.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/4_section/1.30iconClick.png":
/*!**************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/4_section/1.30iconClick.png ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.30iconClick.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/4_section/1.30iconClick.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/4_section/1.31iconUpdate.png":
/*!***************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/4_section/1.31iconUpdate.png ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.31iconUpdate.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/4_section/1.31iconUpdate.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_0_mainPage/mainSpeedClickSection.js");
/******/ 	
/******/ })()
;