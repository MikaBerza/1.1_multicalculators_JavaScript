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

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/electricityCalculator.css":
/*!*********************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/electricityCalculator.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/electricityCalculator.css?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/electricityCalculator.js":
/*!********************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/electricityCalculator.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _electricityCalculator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./electricityCalculator.css */ \"./src/6_7_electricityCalculatorPage/electricityCalculator.css\");\n/* harmony import */ var _imgElectricityCalculator_1_43barcode_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgElectricityCalculator/1.43barcode.jpg */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.43barcode.jpg\");\n/* harmony import */ var _imgElectricityCalculator_1_44counter_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgElectricityCalculator/1.44counter.jpeg */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.44counter.jpeg\");\n/* harmony import */ var _imgElectricityCalculator_1_45fonElectricity_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgElectricityCalculator/1.45fonElectricity.jpg */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.45fonElectricity.jpg\");\n/* harmony import */ var _imgElectricityCalculator_1_46markOfApproval_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgElectricityCalculator/1.46markOfApproval.png */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.46markOfApproval.png\");\n/* harmony import */ var _imgElectricityCalculator_1_47markOfConformity_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgElectricityCalculator/1.47markOfConformity.png */ \"./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.47markOfConformity.png\");\n/*активация строго режима*/\r\n\r\n// импортируем стили css\r\n\r\n\r\n// импортируем изображения\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*↓↓---------------------Раздел переменных-----------------------------------------↓↓*/\r\n// Считываем элементы li текущего показания Т1\r\nconst currentReadingsT1 = document.getElementById(\r\n  'listOfCurrentItemsT1'\r\n).children;\r\n// Считываем элемент input текущего показания Т1\r\nconst inputCurrentT1 = document.getElementById('inputCurrentT1');\r\n\r\n// Считываем элементы li предыдущего показания Т1\r\nconst previousReadingsT1 = document.getElementById(\r\n  'listOfPreviousItemsT1'\r\n).children;\r\n// Считываем элемент input предыдущего показания Т1\r\nconst inputPreviousT1 = document.getElementById('inputPreviousT1');\r\n\r\n/*↑↑---------------------Раздел переменных--------------------------------------------↑↑*/\r\n\r\n/*↓---------------------Раздел с общими функциями---------------------------------------↓*/\r\n// Ф1\r\n// Функция возвращает восьмеричный массив\r\n// с ввода текущих/предыдущих показаний (данных) счетчика\r\nfunction getOctalArray(dataCounter) {\r\n  // Считываем строку\r\n  let str = dataCounter;\r\n  // Делаем из строки массив\r\n  let arr = str.split('');\r\n  if (arr.length === 8) {\r\n    return arr;\r\n  } else {\r\n    console.log('В массиве МЕНЬШЕ 8 символов');\r\n    return ['null'];\r\n  }\r\n}\r\n\r\n// Ф2\r\n// Возвращает число совпадений.\r\n// Это своеобразная проверка, мы проверяем сколько чисел введено в инпут,\r\n// если количество совпадений равно 8, то в инпут ввели все числа.\r\nfunction getNumberOfMatches(octalArray) {\r\n  // Массив цифр с которыми сравнивается восьмеричный массив\r\n  let arrNum1 = '1234567890'.split('');\r\n  // Счетчик совпадений!\r\n  // Если ввили все цифры, он будет равен 8.\r\n  let counter = 0;\r\n  for (let i = 0; i < arrNum1.length; i++) {\r\n    for (let j = 0; j < octalArray.length; j++) {\r\n      if (arrNum1[i] === octalArray[j]) {\r\n        counter += 1;\r\n      }\r\n    }\r\n  }\r\n  return counter;\r\n}\r\n\r\n// Ф3\r\n// Функция выводит в li элементы, значения с инпута\r\n// которые прошли проверку и являются числами\r\nfunction outputNewElementsLi(listLi, inputData) {\r\n  // Восьмеричный массив из показаний счетчика\r\n  let octalArrayOfReadings = getOctalArray(inputData.value);\r\n  // Число (количество) совпадений\r\n  let numberOfMatches = getNumberOfMatches(octalArrayOfReadings);\r\n\r\n  console.log(octalArrayOfReadings);\r\n  console.log(numberOfMatches);\r\n\r\n  if (numberOfMatches === 8) {\r\n    console.log('+++ условие true');\r\n    for (let i = 0; i < octalArrayOfReadings.length; i++) {\r\n      // присваиваем каждому элементу списка li\r\n      // значение с инпута\r\n      listLi[i].innerHTML = octalArrayOfReadings[i];\r\n      inputData.classList.remove('bordTwo');\r\n    }\r\n  } else {\r\n    console.log('--- условие false');\r\n    inputData.classList.add('bordTwo');\r\n  }\r\n}\r\n\r\n/*↓↓---------------------Объединяющее все функции событие------------------------------------↓↓*/\r\n// При потери фокуса после ввода в инпут чисел,\r\n// эти числа автоматически появляются на счетчике №1 ХВС\r\n// т.е. в списке li\r\ninputCurrentT1.addEventListener('blur', function () {\r\n  outputNewElementsLi(currentReadingsT1, inputCurrentT1);\r\n});\r\n// При потери фокуса после ввода в инпут чисел,\r\n// эти числа автоматически появляются на счетчике №2 ХВС\r\n// т.е. в списке li\r\ninputPreviousT1.addEventListener('blur', function () {\r\n  outputNewElementsLi(previousReadingsT1, inputPreviousT1);\r\n});\r\n/*↑↑---------------------Объединяющее все функции событие------------------------------------↑↑*/\r\n\r\n// ==================ДОДЕЛАТЬ!=========ДОДЕЛАТЬ!==============ДОДЕЛАТЬ!=====\r\n// ==================ДОДЕЛАТЬ!=========ДОДЕЛАТЬ!==============ДОДЕЛАТЬ!=====\r\n// ==================ДОДЕЛАТЬ!=========ДОДЕЛАТЬ!==============ДОДЕЛАТЬ!=====\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/electricityCalculator.js?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.43barcode.jpg":
/*!************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.43barcode.jpg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.43barcode.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.43barcode.jpg?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.44counter.jpeg":
/*!*************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.44counter.jpeg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.44counter.jpeg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.44counter.jpeg?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.45fonElectricity.jpg":
/*!*******************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.45fonElectricity.jpg ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.45fonElectricity.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.45fonElectricity.jpg?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.46markOfApproval.png":
/*!*******************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.46markOfApproval.png ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.46markOfApproval.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.46markOfApproval.png?");

/***/ }),

/***/ "./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.47markOfConformity.png":
/*!*********************************************************************************************!*\
  !*** ./src/6_7_electricityCalculatorPage/imgElectricityCalculator/1.47markOfConformity.png ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_7_electricityCalculatorPage/electricityCalculator.js");
/******/ 	
/******/ })()
;