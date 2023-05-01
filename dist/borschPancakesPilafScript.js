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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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