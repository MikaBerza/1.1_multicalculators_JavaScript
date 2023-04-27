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

/***/ "./src/6_7_electricityCalculatorPage/electricityCalculator.js":
/*!********************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/electricityCalculator.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _electricityCalculator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./electricityCalculator.css */ \"./src/6_7_electricityCalculatorPage/electricityCalculator.css\");\n/* harmony import */ var _imgElectricityCalculator_1_43barcode_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgElectricityCalculator/1.43barcode.jpg */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.43barcode.jpg\");\n/* harmony import */ var _imgElectricityCalculator_1_44counter_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgElectricityCalculator/1.44counter.jpeg */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.44counter.jpeg\");\n/* harmony import */ var _imgElectricityCalculator_1_45fonElectricity_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgElectricityCalculator/1.45fonElectricity.jpg */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.45fonElectricity.jpg\");\n/* harmony import */ var _imgElectricityCalculator_1_46markOfApproval_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgElectricityCalculator/1.46markOfApproval.png */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.46markOfApproval.png\");\n/* harmony import */ var _imgElectricityCalculator_1_47markOfConformity_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgElectricityCalculator/1.47markOfConformity.png */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.47markOfConformity.png\");\n/*активация строго режима*/\n\n\n// импортируем стили css\n\n\n// импортируем изображения\n\n\n\n\n\n\n/*↓↓---------------------Раздел переменных-----------------------------------------↓↓*/\n// Считываем элементы li текущего показания Т1\nconst currentReadingsT1 = document.getElementById('listOfCurrentItemsT1').children;\n// Считываем элемент input текущего показания Т1\nconst inputCurrentT1 = document.getElementById('inputCurrentT1');\n\n// Считываем элементы li предыдущего показания Т1\nconst previousReadingsT1 = document.getElementById('listOfPreviousItemsT1').children;\n// Считываем элемент input предыдущего показания Т1\nconst inputPreviousT1 = document.getElementById('inputPreviousT1');\n\n/*↑↑---------------------Раздел переменных--------------------------------------------↑↑*/\n\n/*↓---------------------Раздел с общими функциями---------------------------------------↓*/\n// Ф1\n// Функция возвращает восьмеричный массив\n// с ввода текущих/предыдущих показаний (данных) счетчика\nfunction getOctalArray(dataCounter) {\n  // Считываем строку\n  let str = dataCounter;\n  // Делаем из строки массив\n  let arr = str.split('');\n  if (arr.length === 8) {\n    return arr;\n  } else {\n    console.log('В массиве МЕНЬШЕ 8 символов');\n    return ['null'];\n  }\n}\n\n// Ф2\n// Возвращает число совпадений.\n// Это своеобразная проверка, мы проверяем сколько чисел введено в инпут,\n// если количество совпадений равно 8, то в инпут ввели все числа.\nfunction getNumberOfMatches(octalArray) {\n  // Массив цифр с которыми сравнивается восьмеричный массив\n  let arrNum1 = '1234567890'.split('');\n  // Счетчик совпадений!\n  // Если ввили все цифры, он будет равен 8.\n  let counter = 0;\n  for (let i = 0; i < arrNum1.length; i++) {\n    for (let j = 0; j < octalArray.length; j++) {\n      if (arrNum1[i] === octalArray[j]) {\n        counter += 1;\n      }\n    }\n  }\n  return counter;\n}\n\n// Ф3\n// Функция выводит в li элементы, значения с инпута\n// которые прошли проверку и являются числами\nfunction outputNewElementsLi(listLi, inputData) {\n  // Восьмеричный массив из показаний счетчика\n  let octalArrayOfReadings = getOctalArray(inputData.value);\n  // Число (количество) совпадений\n  let numberOfMatches = getNumberOfMatches(octalArrayOfReadings);\n  console.log(octalArrayOfReadings);\n  console.log(numberOfMatches);\n  if (numberOfMatches === 8) {\n    console.log('+++ условие true');\n    for (let i = 0; i < octalArrayOfReadings.length; i++) {\n      // присваиваем каждому элементу списка li\n      // значение с инпута\n      listLi[i].innerHTML = octalArrayOfReadings[i];\n      inputData.classList.remove('bordTwo');\n    }\n  } else {\n    console.log('--- условие false');\n    inputData.classList.add('bordTwo');\n  }\n}\n\n/*↓↓---------------------Объединяющее все функции событие------------------------------------↓↓*/\n// При потери фокуса после ввода в инпут чисел,\n// эти числа автоматически появляются на счетчике №1 ХВС\n// т.е. в списке li\ninputCurrentT1.addEventListener('blur', function () {\n  outputNewElementsLi(currentReadingsT1, inputCurrentT1);\n});\n// При потери фокуса после ввода в инпут чисел,\n// эти числа автоматически появляются на счетчике №2 ХВС\n// т.е. в списке li\ninputPreviousT1.addEventListener('blur', function () {\n  outputNewElementsLi(previousReadingsT1, inputPreviousT1);\n});\n/*↑↑---------------------Объединяющее все функции событие------------------------------------↑↑*/\n\n// ==================ДОДЕЛАТЬ!=========ДОДЕЛАТЬ!==============ДОДЕЛАТЬ!=====\n// ==================ДОДЕЛАТЬ!=========ДОДЕЛАТЬ!==============ДОДЕЛАТЬ!=====\n// ==================ДОДЕЛАТЬ!=========ДОДЕЛАТЬ!==============ДОДЕЛАТЬ!=====\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/electricityCalculator.js?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/electricityCalculator.css":
/*!*********************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/electricityCalculator.css ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/electricityCalculator.css?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.43barcode.jpg":
/*!************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.43barcode.jpg ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.43barcode.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.43barcode.jpg?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.44counter.jpeg":
/*!*************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.44counter.jpeg ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.44counter.jpeg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.44counter.jpeg?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.45fonElectricity.jpg":
/*!*******************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.45fonElectricity.jpg ***!
  \*******************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.45fonElectricity.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.45fonElectricity.jpg?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.46markOfApproval.png":
/*!*******************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.46markOfApproval.png ***!
  \*******************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.46markOfApproval.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.46markOfApproval.png?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.47markOfConformity.png":
/*!*********************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.47markOfConformity.png ***!
  \*********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.47markOfConformity.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.47markOfConformity.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_7_electricityCalculatorPage/electricityCalculator.js");
/******/ 	
/******/ })()
;