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

/***/ "./src/6_0_mainPage/mainSpeedClickSection.js":
/*!***************************************************!*\
  !*** ./src/6_0_mainPage/mainSpeedClickSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_0_mainPage_imgMain_4_section_1_29fonSectionFour_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg */ \"./src/6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg\");\n/* harmony import */ var _6_0_mainPage_imgMain_4_section_1_30iconClick_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../6_0_mainPage/imgMain/4_section/1.30iconClick.png */ \"./src/6_0_mainPage/imgMain/4_section/1.30iconClick.png\");\n/* harmony import */ var _6_0_mainPage_imgMain_4_section_1_31iconUpdate_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../6_0_mainPage/imgMain/4_section/1.31iconUpdate.png */ \"./src/6_0_mainPage/imgMain/4_section/1.31iconUpdate.png\");\n/*активация строго режима*/\r\n\r\n\r\n// Считываем кнопку клик\r\nconst btnClick = document.getElementById('btnClickSectionFour');\r\n// Считываем кнопку перезагрузить\r\nconst btnReboot = document.getElementById('btnRebootSectionFour');\r\n// Считываем вывод таймер\r\nconst timerSF = document.getElementById('timerSectionFour');\r\n// Считываем вывод счетчика\r\nconst counterSF = document.getElementById('counterSectionFour');\r\n// Считываем вывод результата\r\nconst resultSF = document.getElementById('resultSectionFour');\r\n\r\n// импортируем картинки (4_section)\r\n\r\n\r\n\r\n\r\n/* \r\nИнициализируем переменную (timer) как глобальную\r\nчтобы в ней между запусками функции хранилось значение\r\n*/\r\nlet timerClick;\r\n\r\n/* \r\nИнициализируем переменную (internalCounter)\r\nвнутренний счетчик и присваиваем ей значение 30\r\n(это будет 30 секунд)\r\n*/\r\nlet internalCounter = 30;\r\n\r\n// Функция запускает таймер\r\nfunction startTimer() {\r\n  // отвязываем обработчик события (т.е. по клику перестаем запускать функцию startTimer)\r\n  this.removeEventListener('click', startTimer);\r\n\r\n  timerClick = setInterval(function () {\r\n    --internalCounter;\r\n    // проверяю как работате\r\n    // console.log(internalCounter);\r\n    timerSF.innerHTML = internalCounter;\r\n    if (internalCounter === 0) {\r\n      // Останавливаем таймер\r\n      clearInterval(timerClick);\r\n    }\r\n    // console.log(internalCounter);\r\n  }, 1000);\r\n}\r\n\r\n// Функция запускает клики по кнопке и счетчик\r\nfunction startClick() {\r\n  counterSF.innerHTML = Number(counterSF.innerHTML) + 1;\r\n  if (internalCounter === 0) {\r\n    // отвязываем обработчик события (т.е. по клику перестаем запускать функцию startClick)\r\n    this.removeEventListener('click', startClick);\r\n    /* Выводим общее кол-во кликов в секунду.\r\n    Метод toFixed производит округление числа до указанного знака в дробной части.*/\r\n    resultSF.innerHTML = (counterSF.innerHTML / 30).toFixed(2);\r\n  }\r\n}\r\n\r\n// Функция устанавливает значения в исходные положения\r\nfunction setStartPosition() {\r\n  // clearInterval останавливаем таймер\r\n  clearInterval(timerClick);\r\n  // Внутреннюю переменную устанавливаем в исходное положение\r\n  internalCounter = 30;\r\n  // Вывод таймера устанавливаем в исходное положение\r\n  timerSF.innerHTML = 30;\r\n  // Вывод счетчика устанавливаем в исходное положение\r\n  counterSF.innerHTML = 0;\r\n  // Вывод результата устанавливаем в исходное положение\r\n  resultSF.innerHTML = 0;\r\n  // Восстанавливаем обработчики событий, чтобы можно было заного запустить и кликать)\r\n  btnClick.addEventListener('click', startTimer);\r\n  btnClick.addEventListener('click', startClick);\r\n}\r\n\r\n/*\r\nМетод addEventListener - добавляет обработчик события к указанному элементу и \r\nзапустить выполнение программы при совершении заданного действия\r\n*/\r\nbtnClick.addEventListener('click', startTimer);\r\nbtnClick.addEventListener('click', startClick);\r\nbtnReboot.addEventListener('click', setStartPosition);\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/mainSpeedClickSection.js?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg":
/*!*******************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.29fonSectionFour.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/4_section/1.29fonSectionFour.jpg?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/4_section/1.30iconClick.png":
/*!**************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/4_section/1.30iconClick.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.30iconClick.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/4_section/1.30iconClick.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/4_section/1.31iconUpdate.png":
/*!***************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/4_section/1.31iconUpdate.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 	})();
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