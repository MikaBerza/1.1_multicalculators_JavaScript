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

/***/ "./src/6_13_globalFiles/borschPancakesPilafStyle.css":
/*!***********************************************************!*\
  !*** ./src/6_13_globalFiles/borschPancakesPilafStyle.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/borschPancakesPilafStyle.css?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_2_pancakesPage/pancakes.css":
/*!*******************************************!*\
  !*** ./src/6_2_pancakesPage/pancakes.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_2_pancakesPage/pancakes.css?");

/***/ }),

/***/ "./src/6_13_globalFiles/borschPancakesPilafScript.js":
/*!***********************************************************!*\
  !*** ./src/6_13_globalFiles/borschPancakesPilafScript.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n//\r\n//\r\n//\r\n\r\n/*-----Формула для проектов: 6_1_borschPage, 6_2_pancakesPage, 6_3_pilafPage---------------------------------*/\r\nfunction calculateNumberOfProducts(\r\n  elemInput,\r\n  elemProductsArr,\r\n  elemQuantityArr,\r\n  elemCellSalt,\r\n  elemProductPerServing\r\n) {\r\n  for (let i = 0; i < elemProductsArr.length; i++) {\r\n    if (\r\n      elemInput.value === '' ||\r\n      elemInput.value[0] === '-' ||\r\n      elemInput.value.length > 3\r\n    ) {\r\n      // Инпут изменяется если в него вводят не числовое значение\r\n      elemInput.value = 0;\r\n      elemQuantityArr[i].innerHTML = 0;\r\n      // если вводят число \"0\", то поля возвращаются в стандартные состояния\r\n    } else if (Number(elemInput.value) === 0) {\r\n      elemQuantityArr[i].innerHTML = 0;\r\n      elemCellSalt.innerHTML = 0;\r\n    } else {\r\n      // формула для заполнения ячеек в колонке 'Колличество'\r\n      elemQuantityArr[i].innerHTML = (\r\n        Number(elemInput.value) *\r\n        elemProductPerServing[elemProductsArr[i].innerHTML]\r\n      ).toFixed(2);\r\n      elemCellSalt.innerHTML = 'по вкусу';\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateNumberOfProducts);\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/borschPancakesPilafScript.js?");

/***/ }),

/***/ "./src/6_2_pancakesPage/pancakes.js":
/*!******************************************!*\
  !*** ./src/6_2_pancakesPage/pancakes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _6_13_globalFiles_borschPancakesPilafStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../6_13_globalFiles/borschPancakesPilafStyle.css */ \"./src/6_13_globalFiles/borschPancakesPilafStyle.css\");\n/* harmony import */ var _pancakes_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pancakes.css */ \"./src/6_2_pancakesPage/pancakes.css\");\n/* harmony import */ var _imgPancakes_1_33fonPancakes_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgPancakes/1.33fonPancakes.jpg */ \"./src/6_2_pancakesPage/imgPancakes/1.33fonPancakes.jpg\");\n/* harmony import */ var _6_13_globalFiles_borschPancakesPilafScript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../6_13_globalFiles/borschPancakesPilafScript */ \"./src/6_13_globalFiles/borschPancakesPilafScript.js\");\n/*активация строго режима*/\r\n\r\n// импортируем стили css\r\n\r\n\r\n\r\n// импортируем изображения\r\n\r\n//импортирую функцию\r\n\r\n\r\n// Считываем инпут\r\nconst input = document.getElementById('idProductInput');\r\n// Считываем кнопку Расчитать\r\nconst btn = document.getElementById('btnProduct');\r\n\r\n// Считываем ячейки с именем продукта (получается массив)\r\nconst productsArr = document.querySelectorAll('.table-products');\r\n// Считываем ячейки с колличеством данного продукта (получается массив)\r\nconst quantityArr = document.querySelectorAll('.table-quantity');\r\n// Считываем ячейку справа от ячейки соль в столбце количество\r\nconst cellSalt = document.getElementById('salt');\r\n\r\n// Объект содержит продукты для одной порции блюда (вес продукта в граммах)\r\nconst productPerServing = {\r\n  Молоко: 0.12,\r\n  Яйца: 1,\r\n  Мука: 35,\r\n  'Масло сливочное, растопленное': 5,\r\n  Соль: 0.5,\r\n  Сахар: 5,\r\n};\r\n\r\n// По нажатию на кнопку 'РАССЧИТАТЬ', ячейки столбца 'Количество' заполняются требуемым грамможем(граммами) продуктов\r\nbtn.addEventListener('click', function () {\r\n  (0,_6_13_globalFiles_borschPancakesPilafScript__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\r\n    input,\r\n    productsArr,\r\n    quantityArr,\r\n    cellSalt,\r\n    productPerServing\r\n  );\r\n});\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_2_pancakesPage/pancakes.js?");

/***/ }),

/***/ "./src/6_2_pancakesPage/imgPancakes/1.33fonPancakes.jpg":
/*!**************************************************************!*\
  !*** ./src/6_2_pancakesPage/imgPancakes/1.33fonPancakes.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.33fonPancakes.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_2_pancakesPage/imgPancakes/1.33fonPancakes.jpg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_2_pancakesPage/pancakes.js");
/******/ 	
/******/ })()
;