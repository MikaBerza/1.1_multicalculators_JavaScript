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

/***/ "./src/6_8_waterCalculatorPage/waterCalculator.js":
/*!********************************************************!*\
  !*** ./src/6_8_waterCalculatorPage/waterCalculator.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _waterCalculator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterCalculator.css */ \"./src/6_8_waterCalculatorPage/waterCalculator.css\");\n/* harmony import */ var _imgWaterCalculator_1_48fonWater_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgWaterCalculator/1.48fonWater.jpg */ \"./src/6_8_waterCalculatorPage/imgWaterCalculator/1.48fonWater.jpg\");\n/*активация строго режима*/\n\n\n// импортируем стили css\n\n\n// импортируем изображения\n\n\n/*↓↓---------------------Раздел переменных для ХВС-----------------------------------------↓↓*/\n// Считываем элементы li (текущие показания) ХВС счетчика\nconst coldOneLi = document.getElementsByClassName('coldOneLi');\n// Считываем (текущие показания) с input ХВС счетчика\nconst coldInpActual = document.querySelector('#coldInpActual');\n\n// Считываем элементы li (предыдущие показания) XВС счетчика\nconst coldTwoLi = document.getElementsByClassName('coldTwoLi');\n// Считываем (предыдущие показания) с input ХВС счетчика\nconst coldInpPrevious = document.querySelector('#coldInpPrevious');\n\n// Считываем инпут тарифа XВС счетчика\nconst coldInpWaterRate = document.querySelector('#coldInpWaterRate');\n// Считываем кнопку расчет XВС счетчика\nconst coldBtn = document.querySelector('#coldButton');\n// Считываем параграф куда будем выводить результат(стоимость, руб) по XВС счетчику\nconst coldOutputOfCostResults = document.querySelector('#coldOutputOfCostResults');\n// Считываем параграф куда будем выводить результат(расхода, м3) по XВС счетчику\nconst coldOutputOfExpenditureResults = document.querySelector('#coldOutputOfExpenditureResults');\n/*↑↑---------------------Раздел переменных для ХВС-----------------------------------------↑↑*/\n//\n//\n//\n/*↓---------------------Раздел с общими функциями---------------------------------------↓*/\n// Ф1\n// Функция возвращает восьмеричный массив\n// с ввода текущих/предыдущих показаний (данных) счетчика\nfunction getOctalArray(dataCounter) {\n  // Считываем строку\n  let str = dataCounter;\n  // Делаем из строки массив\n  let arr = str.split('');\n  if (arr.length === 8) {\n    return arr;\n  } else {\n    console.log('В массиве МЕНЬШЕ 8 символов');\n    return ['null'];\n  }\n}\n\n// Ф2\n// Возвращает число совпадений.\n// Это своеобразная проверка, мы проверяем сколько чисел введено в инпут,\n// если количество совпадений равно 8, то в инпут ввели все числа.\nfunction getNumberOfMatches(octalArray) {\n  // Массив цифр с которыми сравнивается восьмеричный массив\n  let arrNum1 = '1234567890'.split('');\n  // Счетчик совпадений!\n  // Если ввили все цифры, он будет равен 8.\n  let counter = 0;\n  for (let i = 0; i < arrNum1.length; i++) {\n    for (let j = 0; j < octalArray.length; j++) {\n      if (arrNum1[i] === octalArray[j]) {\n        counter += 1;\n      }\n    }\n  }\n  return counter;\n}\n\n// Ф3\n// Функция выводит в li элементы, значения с инпута\n// которые прошли проверку и являются числами\nfunction outputNewElementsLi(listLi, inputData) {\n  // Восьмеричный массив из показаний счетчика\n  let octalArrayOfReadings = getOctalArray(inputData.value);\n  // Число (количество) совпадений\n  let numberOfMatches = getNumberOfMatches(octalArrayOfReadings);\n  console.log(octalArrayOfReadings);\n  console.log(numberOfMatches);\n  if (numberOfMatches === 8) {\n    console.log('+++ условие true');\n    for (let i = 0; i < octalArrayOfReadings.length; i++) {\n      // присваиваем каждому элементу списка li\n      // значение с инпута\n      listLi[i].innerHTML = octalArrayOfReadings[i];\n      inputData.classList.remove('bordTwo');\n    }\n  } else {\n    console.log('--- условие false');\n    inputData.classList.add('bordTwo');\n  }\n}\n\n// Ф4\n// Функция выводит результат расчета (стоимость и расход)\nfunction outputTheCostAndWaterConsumption(inpOne, inpTwo, inpThree, outputOne, outputTwo) {\n  // Восьмеричный массив из текущих показаний счетчика\n  let octalArrayOfCurrentReadings = getOctalArray(inpOne.value);\n  // Восьмеричный массив из предыдущих показаний счетчика\n  let octalArrayOfPreviousReadings = getOctalArray(inpTwo.value);\n  // Проверка восьмеричных массивов на числа (чтобы там небыло других символов)\n  // Проверка на числа текущих показаний счетчика\n  let checkOne = getNumberOfMatches(octalArrayOfCurrentReadings);\n  // Проверка на числа предыдущих показаний счетчика\n  let checkTwo = getNumberOfMatches(octalArrayOfPreviousReadings);\n  // Стоимость тарифа за воду\n  let tariffNumber = Number(inpThree.value);\n  // Результат\n  let result = null;\n  if (checkOne === 8 && checkTwo === 8) {\n    // делаем из восьмеричного массива ЧИСЛО\n    let currentReadings = Number(octalArrayOfCurrentReadings.join(''));\n    let previousReadings = Number(octalArrayOfPreviousReadings.join(''));\n    if (currentReadings < previousReadings) {\n      // Класс и запись появляется если данные некорректны\n      outputOne.innerHTML = 'Данные некорректны!!!';\n      outputOne.classList.add('resultStyle');\n      outputTwo.innerHTML = 'Данные некорректны!!!';\n      outputTwo.classList.add('resultStyle');\n    } else if (currentReadings >= previousReadings && tariffNumber !== 0) {\n      // т.к. счетчик восьмироликовый, первые 5 цифр это метры кубические,\n      // а последнии 3 цифры это литры, чтобы производить вычитание\n      // из одних и тех же условных вилечин, приводим значение нашего счетчика\n      // к метрам кубическим деля его на 1000\n      result = (currentReadings / 1000 - previousReadings / 1000) * tariffNumber;\n      // Появившиеся класс и запись исчезают если данные корректны\n      outputOne.classList.remove('resultStyle');\n      outputTwo.classList.remove('resultStyle');\n      // Выводим стоимость\n      outputOne.innerHTML = 'Стоимость ' + result.toFixed(2) + ' ₽';\n      // Выводим расход\n      console.log(tariffNumber, 'ЭЭЭЭЭЭ');\n      outputTwo.innerHTML = 'Расход ' + (result / tariffNumber).toFixed(2) + ' м3';\n    }\n  }\n}\n/*↑---------------------Раздел с общими функциями---------------------------------------↑*/\n//\n//\n//\n/*↓↓---------------------Раздел функций для ХВС-----------------------------------------↓↓*/\n// При потери фокуса после ввода в инпут чисел,\n// эти числа автоматически появляются на счетчике №1 ХВС\n// т.е. в списке li\ncoldInpActual.addEventListener('blur', function () {\n  outputNewElementsLi(coldOneLi, coldInpActual);\n});\n// При потери фокуса после ввода в инпут чисел,\n// эти числа автоматически появляются на счетчике №2 ХВС\n// т.е. в списке li\ncoldInpPrevious.addEventListener('blur', function () {\n  outputNewElementsLi(coldTwoLi, coldInpPrevious);\n});\n// По клику выводит стоимость и расход по счетчику ХВС\ncoldBtn.addEventListener('click', function () {\n  outputTheCostAndWaterConsumption(coldInpActual, coldInpPrevious, coldInpWaterRate, coldOutputOfCostResults, coldOutputOfExpenditureResults);\n});\n/*↑↑---------------------Раздел функций для ХВС-----------------------------------------↑↑*/\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_8_waterCalculatorPage/waterCalculator.js?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_8_waterCalculatorPage/waterCalculator.css":
/*!*********************************************************!*\
  !*** ./src/6_8_waterCalculatorPage/waterCalculator.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_8_waterCalculatorPage/waterCalculator.css?");

/***/ }),

/***/ "./src/6_8_waterCalculatorPage/imgWaterCalculator/1.48fonWater.jpg":
/*!*************************************************************************!*\
  !*** ./src/6_8_waterCalculatorPage/imgWaterCalculator/1.48fonWater.jpg ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.48fonWater.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_8_waterCalculatorPage/imgWaterCalculator/1.48fonWater.jpg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_8_waterCalculatorPage/waterCalculator.js");
/******/ 	
/******/ })()
;