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

/***/ "./src/6_13_globalFiles/borschPancakesPilafScript.js":
/*!***********************************************************!*\
  !*** ./src/6_13_globalFiles/borschPancakesPilafScript.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n//\r\n//\r\n//\r\n\r\n/*-----Формула для проектов: 6_1_borschPage, 6_2_pancakesPage, 6_3_pilafPage---------------------------------*/\r\nfunction calculateNumberOfProducts(\r\n  elemInput,\r\n  elemProductsArr,\r\n  elemQuantityArr,\r\n  elemCellSalt,\r\n  elemProductPerServing\r\n) {\r\n  for (let i = 0; i < elemProductsArr.length; i++) {\r\n    if (\r\n      elemInput.value === '' ||\r\n      elemInput.value[0] === '-' ||\r\n      elemInput.value.length > 3\r\n    ) {\r\n      // Инпут изменяется если в него вводят не числовое значение\r\n      elemInput.value = 0;\r\n      elemQuantityArr[i].innerHTML = 0;\r\n      // если вводят число \"0\", то поля возвращаются в стандартные состояния\r\n    } else if (Number(elemInput.value) === 0) {\r\n      elemQuantityArr[i].innerHTML = 0;\r\n      elemCellSalt.innerHTML = 0;\r\n    } else {\r\n      // формула для заполнения ячеек в колонке 'Колличество'\r\n      elemQuantityArr[i].innerHTML = (\r\n        Number(elemInput.value) *\r\n        elemProductPerServing[elemProductsArr[i].innerHTML]\r\n      ).toFixed(2);\r\n      elemCellSalt.innerHTML = 'по вкусу';\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateNumberOfProducts);\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/borschPancakesPilafScript.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/6_13_globalFiles/borschPancakesPilafScript.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;