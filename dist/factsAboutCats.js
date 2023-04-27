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

/***/ "./src/6_6_factsAboutCatsPage/factsAboutCats.js":
/*!******************************************************!*\
  !*** ./src/6_6_factsAboutCatsPage/factsAboutCats.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _factsAboutCats_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factsAboutCats.css */ \"./src/6_6_factsAboutCatsPage/factsAboutCats.css\");\n/* harmony import */ var _imgFactsAboutCats_1_41defaultCat_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgFactsAboutCats/1.41defaultCat.jpg */ \"./src/6_6_factsAboutCatsPage/imgFactsAboutCats/1.41defaultCat.jpg\");\n/* harmony import */ var _imgFactsAboutCats_1_42loadingError_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgFactsAboutCats/1.42loadingError.jpg */ \"./src/6_6_factsAboutCatsPage/imgFactsAboutCats/1.42loadingError.jpg\");\n/*активация строго режима*/\n\n\n// импортируем стили css\n\n\n// импортируем изображения\n\n\n//\n//\n//\nconst fact = document.querySelector('.card__fact');\n// console.log(fact);\nconst img = document.querySelector('.card__img');\n// console.log(img);\n\n// Cat Facts API\nconst urlCatFact = 'https://catfact.ninja/fact';\n// console.log(urlCatFact);\n\n/*Глобальный fetch()метод запускает процесс извлечения ресурса из сети, \r\nвозвращая обещание (promise), которое выполняется, как только ответ \r\nстановится доступным. */\n\n/*async - У этого слова один простой смысл: эта функция всегда возвращает промис. \r\nЗначения других типов оборачиваются в завершившийся успешно \r\nпромис автоматически.*/\n\n/*await - ключевое слово  заставит интерпретатор JavaScript ждать до тех пор, пока \r\nпромис справа от await не выполнится. После чего оно вернёт его результат, \r\nи выполнение кода продолжится. */\n\n// async await - асинхронное ожидание\nasync function fetchHandler() {\n  try {\n    /*здесь храниться ответ от сервера, если бы не была написано \r\n    конструкция async await, то мы бы получали промис.*/\n    const responseFact = await fetch(urlCatFact);\n    // console.log(responseFact);\n\n    // поучаем тело ответа\n    const dataFact = await responseFact.json();\n    // console.log(dataFact);\n\n    fact.textContent = dataFact.fact;\n  } catch (error) {\n    // если возникнет ошибка, то мы выведем текст (Ошибка загрузки !!!)\n    fact.textContent = 'Ошибка загрузки !!!';\n    console.log(error);\n  }\n}\nimg.addEventListener('click', fetchHandler);\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_6_factsAboutCatsPage/factsAboutCats.js?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_6_factsAboutCatsPage/factsAboutCats.css":
/*!*******************************************************!*\
  !*** ./src/6_6_factsAboutCatsPage/factsAboutCats.css ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_6_factsAboutCatsPage/factsAboutCats.css?");

/***/ }),

/***/ "./src/6_6_factsAboutCatsPage/imgFactsAboutCats/1.41defaultCat.jpg":
/*!*************************************************************************!*\
  !*** ./src/6_6_factsAboutCatsPage/imgFactsAboutCats/1.41defaultCat.jpg ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.41defaultCat.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_6_factsAboutCatsPage/imgFactsAboutCats/1.41defaultCat.jpg?");

/***/ }),

/***/ "./src/6_6_factsAboutCatsPage/imgFactsAboutCats/1.42loadingError.jpg":
/*!***************************************************************************!*\
  !*** ./src/6_6_factsAboutCatsPage/imgFactsAboutCats/1.42loadingError.jpg ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.42loadingError.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_6_factsAboutCatsPage/imgFactsAboutCats/1.42loadingError.jpg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_6_factsAboutCatsPage/factsAboutCats.js");
/******/ 	
/******/ })()
;