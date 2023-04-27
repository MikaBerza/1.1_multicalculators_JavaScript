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

/***/ "./src/6_10_passwordGeneratorPage/passwordGenerator.js":
/*!*************************************************************!*\
  !*** ./src/6_10_passwordGeneratorPage/passwordGenerator.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _passwordGenerator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwordGenerator.css */ \"./src/6_10_passwordGeneratorPage/passwordGenerator.css\");\n/* harmony import */ var _imgPasswordGenerator_1_50fonPasswordGenerator_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgPasswordGenerator/1.50fonPasswordGenerator.jpg */ \"./src/6_10_passwordGeneratorPage/imgPasswordGenerator/1.50fonPasswordGenerator.jpg\");\n/*активация строго режима*/\n\n\n// импортируем стили css\n\n\n// импортируем изображения\n\n\n// Считываем кнопку сгенерировать\nconst btnPasswordGenerator = document.getElementById('btnPasswordGenerator');\n// Считываем вывод пароля\nconst outputPassword = document.getElementById('outputPassword');\n// Считываем инпут диапазона\nconst inputRange = document.getElementById('inputRange');\n// Считываем элемент формы вывода длины пароля\nconst labelRangeNumber = document.getElementById('labelRangeNumber');\n\n// Функция устанавливает длину пароля\nfunction setPasswordLength() {\n  labelRangeNumber.innerHTML = this.value;\n}\n// Функция возвращает случайное число\nfunction getRandom(min, max) {\n  return Math.floor(Math.random() * max - min + 1) + min;\n}\n// Функция генерирует пароль\nfunction generatePassword() {\n  // в переменную result накапливаем результат в цикле\n  let result = '';\n  /*строка с случайными символами из которой с помощью \r\n    функции getRandom() в переменную result записывается пароль\r\n    с указанным числом символов*/\n  let str = \"0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!\\\"\\u2116;%:?*()_+\";\n\n  /* Количество случайных символов, т.е. сколько случайных символов нам \r\n    нужно вывести, такое значение и задаем переменной numberOfCharacters*/\n  const numberOfCharacters = Number(labelRangeNumber.innerHTML);\n  for (let i = 0; i < numberOfCharacters; i++) {\n    result += str[getRandom(0, str.length - 1)];\n    // Проверяем\n    // console.log(result, i);\n  }\n  // Выводим результат на экран\n  outputPassword.innerHTML = result;\n}\n\n/*\r\nМетод addEventListener - добавляет обработчик события к указанному элементу и \r\nзапустить выполнение программы при совершении заданного действия\r\n*/\ninputRange.addEventListener('input', setPasswordLength);\nbtnPasswordGenerator.addEventListener('click', generatePassword);\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_10_passwordGeneratorPage/passwordGenerator.js?");

/***/ }),

/***/ "./src/6_10_passwordGeneratorPage/passwordGenerator.css":
/*!**************************************************************!*\
  !*** ./src/6_10_passwordGeneratorPage/passwordGenerator.css ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_10_passwordGeneratorPage/passwordGenerator.css?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_10_passwordGeneratorPage/imgPasswordGenerator/1.50fonPasswordGenerator.jpg":
/*!******************************************************************************************!*\
  !*** ./src/6_10_passwordGeneratorPage/imgPasswordGenerator/1.50fonPasswordGenerator.jpg ***!
  \******************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.50fonPasswordGenerator.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_10_passwordGeneratorPage/imgPasswordGenerator/1.50fonPasswordGenerator.jpg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_10_passwordGeneratorPage/passwordGenerator.js");
/******/ 	
/******/ })()
;