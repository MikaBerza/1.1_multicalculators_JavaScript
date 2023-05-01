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

/***/ "./src/6_13_globalFiles/borschPancakesPilafScript.js":
/*!***********************************************************!*\
  !*** ./src/6_13_globalFiles/borschPancakesPilafScript.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// 'use strict';  отключил строгий режим по требованию eslint\n\n/* -----Формула для проектов: 6_1_borschPage, 6_2_pancakesPage, 6_3_pilafPage-------------------- */\nfunction calculateNumberOfProducts(elemInput, elemProductsArr, elemQuantityArr, elemCellSalt, elemProductPerServing) {\n  for (let i = 0; i < elemProductsArr.length; i++) {\n    if (elemInput.value === '' || elemInput.value[0] === '-' || elemInput.value.length > 3) {\n      // Инпут изменяется если в него вводят не числовое значение\n      elemInput.value = 0;\n      elemQuantityArr[i].innerHTML = 0;\n      // если вводят число \"0\", то поля возвращаются в стандартные состояния\n    } else if (Number(elemInput.value) === 0) {\n      elemQuantityArr[i].innerHTML = 0;\n      elemCellSalt.innerHTML = 0;\n    } else {\n      // формула для заполнения ячеек в колонке 'Колличество'\n      elemQuantityArr[i].innerHTML = (Number(elemInput.value) * elemProductPerServing[elemProductsArr[i].innerHTML]).toFixed(2);\n      elemCellSalt.innerHTML = 'по вкусу';\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculateNumberOfProducts);\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/borschPancakesPilafScript.js?");

/***/ }),

/***/ "./src/6_3_pilafPage/pilaf.js":
/*!************************************!*\
  !*** ./src/6_3_pilafPage/pilaf.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _6_13_globalFiles_borschPancakesPilafStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../6_13_globalFiles/borschPancakesPilafStyle.css */ \"./src/6_13_globalFiles/borschPancakesPilafStyle.css\");\n/* harmony import */ var _pilaf_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pilaf.css */ \"./src/6_3_pilafPage/pilaf.css\");\n/* harmony import */ var _imgPilaf_1_34fonPilaf_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgPilaf/1.34fonPilaf.jpg */ \"./src/6_3_pilafPage/imgPilaf/1.34fonPilaf.jpg\");\n/* harmony import */ var _6_13_globalFiles_borschPancakesPilafScript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../6_13_globalFiles/borschPancakesPilafScript */ \"./src/6_13_globalFiles/borschPancakesPilafScript.js\");\n// 'use strict';  отключил строгий режим по требованию eslint\n// импортируем стили css\n\n\n\n// импортируем фоновое изображение\n// eslint-disable-next-line no-unused-vars\n\n// импортирую функцию\n\n\n// Считываем инпут\nconst input = document.getElementById('idProductInput');\n// Считываем кнопку Расчитать\nconst btn = document.getElementById('btnProduct');\n\n// Считываем ячейки с именем продукта (получается массив)\nconst productsArr = document.querySelectorAll('.table-products');\n// Считываем ячейки с колличеством данного продукта (получается массив)\nconst quantityArr = document.querySelectorAll('.table-quantity');\n// Считываем ячейку справа от ячейки соль в столбце количество\nconst cellSalt = document.getElementById('salt');\n\n// Объект содержит продукты для одной порции блюда (вес продукта в граммах)\nconst productPerServing = {\n  'Баранина (молодая)': 100,\n  Рис: 90,\n  'Лук репчатый': 0.4,\n  Морковь: 90,\n  Чеснок: 0.4,\n  'Масло растительное': 2,\n  Зира: 2,\n  Вода: 0.09\n};\n\n/* По нажатию на кнопку 'РАССЧИТАТЬ', ячейки столбца 'Количество'\r\nзаполняются требуемым грамможем(граммами) продуктов */\nbtn.addEventListener('click', () => {\n  (0,_6_13_globalFiles_borschPancakesPilafScript__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(input, productsArr, quantityArr, cellSalt, productPerServing);\n});\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_3_pilafPage/pilaf.js?");

/***/ }),

/***/ "./src/6_13_globalFiles/borschPancakesPilafStyle.css":
/*!***********************************************************!*\
  !*** ./src/6_13_globalFiles/borschPancakesPilafStyle.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/borschPancakesPilafStyle.css?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_3_pilafPage/pilaf.css":
/*!*************************************!*\
  !*** ./src/6_3_pilafPage/pilaf.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_3_pilafPage/pilaf.css?");

/***/ }),

/***/ "./src/6_3_pilafPage/imgPilaf/1.34fonPilaf.jpg":
/*!*****************************************************!*\
  !*** ./src/6_3_pilafPage/imgPilaf/1.34fonPilaf.jpg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.34fonPilaf.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_3_pilafPage/imgPilaf/1.34fonPilaf.jpg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_3_pilafPage/pilaf.js");
/******/ 	
/******/ })()
;