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

/***/ "./src/6_8_waterCalculatorPage/waterCalculator.css":
/*!*********************************************************!*\
  !*** ./src/6_8_waterCalculatorPage/waterCalculator.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_8_waterCalculatorPage/waterCalculator.css?");

/***/ }),

/***/ "./src/6_8_waterCalculatorPage/waterCalculator.js":
/*!********************************************************!*\
  !*** ./src/6_8_waterCalculatorPage/waterCalculator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _waterCalculator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterCalculator.css */ \"./src/6_8_waterCalculatorPage/waterCalculator.css\");\n/* harmony import */ var _imgWaterCalculator_1_48fonWater_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgWaterCalculator/1.48fonWater.jpg */ \"./src/6_8_waterCalculatorPage/imgWaterCalculator/1.48fonWater.jpg\");\n/*активация строго режима*/\r\n\r\n// импортируем стили css\r\n\r\n\r\n// импортируем изображения\r\n\r\n\r\n/*↓↓---------------------Раздел переменных для ХВС-----------------------------------------↓↓*/\r\n// Считываем элементы li (текущие показания) ХВС счетчика\r\nconst coldOneLi = document.getElementsByClassName('coldOneLi');\r\n// Считываем (текущие показания) с input ХВС счетчика\r\nconst coldInpActual = document.querySelector('#coldInpActual');\r\n\r\n// Считываем элементы li (предыдущие показания) XВС счетчика\r\nconst coldTwoLi = document.getElementsByClassName('coldTwoLi');\r\n// Считываем (предыдущие показания) с input ХВС счетчика\r\nconst coldInpPrevious = document.querySelector('#coldInpPrevious');\r\n\r\n// Считываем инпут тарифа XВС счетчика\r\nconst coldInpWaterRate = document.querySelector('#coldInpWaterRate');\r\n// Считываем кнопку расчет XВС счетчика\r\nconst coldBtn = document.querySelector('#coldButton');\r\n// Считываем параграф куда будем выводить результат(стоимость, руб) по XВС счетчику\r\nconst coldOutputOfCostResults = document.querySelector(\r\n  '#coldOutputOfCostResults'\r\n);\r\n// Считываем параграф куда будем выводить результат(расхода, м3) по XВС счетчику\r\nconst coldOutputOfExpenditureResults = document.querySelector(\r\n  '#coldOutputOfExpenditureResults'\r\n);\r\n/*↑↑---------------------Раздел переменных для ХВС-----------------------------------------↑↑*/\r\n//\r\n//\r\n//\r\n/*↓---------------------Раздел с общими функциями---------------------------------------↓*/\r\n// Ф1\r\n// Функция возвращает восьмеричный массив\r\n// с ввода текущих/предыдущих показаний (данных) счетчика\r\nfunction getOctalArray(dataCounter) {\r\n  // Считываем строку\r\n  let str = dataCounter;\r\n  // Делаем из строки массив\r\n  let arr = str.split('');\r\n  if (arr.length === 8) {\r\n    return arr;\r\n  } else {\r\n    console.log('В массиве МЕНЬШЕ 8 символов');\r\n    return ['null'];\r\n  }\r\n}\r\n\r\n// Ф2\r\n// Возвращает число совпадений.\r\n// Это своеобразная проверка, мы проверяем сколько чисел введено в инпут,\r\n// если количество совпадений равно 8, то в инпут ввели все числа.\r\nfunction getNumberOfMatches(octalArray) {\r\n  // Массив цифр с которыми сравнивается восьмеричный массив\r\n  let arrNum1 = '1234567890'.split('');\r\n  // Счетчик совпадений!\r\n  // Если ввили все цифры, он будет равен 8.\r\n  let counter = 0;\r\n  for (let i = 0; i < arrNum1.length; i++) {\r\n    for (let j = 0; j < octalArray.length; j++) {\r\n      if (arrNum1[i] === octalArray[j]) {\r\n        counter += 1;\r\n      }\r\n    }\r\n  }\r\n  return counter;\r\n}\r\n\r\n// Ф3\r\n// Функция выводит в li элементы, значения с инпута\r\n// которые прошли проверку и являются числами\r\nfunction outputNewElementsLi(listLi, inputData) {\r\n  // Восьмеричный массив из показаний счетчика\r\n  let octalArrayOfReadings = getOctalArray(inputData.value);\r\n  // Число (количество) совпадений\r\n  let numberOfMatches = getNumberOfMatches(octalArrayOfReadings);\r\n\r\n  console.log(octalArrayOfReadings);\r\n  console.log(numberOfMatches);\r\n\r\n  if (numberOfMatches === 8) {\r\n    console.log('+++ условие true');\r\n    for (let i = 0; i < octalArrayOfReadings.length; i++) {\r\n      // присваиваем каждому элементу списка li\r\n      // значение с инпута\r\n      listLi[i].innerHTML = octalArrayOfReadings[i];\r\n      inputData.classList.remove('bordTwo');\r\n    }\r\n  } else {\r\n    console.log('--- условие false');\r\n    inputData.classList.add('bordTwo');\r\n  }\r\n}\r\n\r\n// Ф4\r\n// Функция выводит результат расчета (стоимость и расход)\r\nfunction outputTheCostAndWaterConsumption(\r\n  inpOne,\r\n  inpTwo,\r\n  inpThree,\r\n  outputOne,\r\n  outputTwo\r\n) {\r\n  // Восьмеричный массив из текущих показаний счетчика\r\n  let octalArrayOfCurrentReadings = getOctalArray(inpOne.value);\r\n  // Восьмеричный массив из предыдущих показаний счетчика\r\n  let octalArrayOfPreviousReadings = getOctalArray(inpTwo.value);\r\n  // Проверка восьмеричных массивов на числа (чтобы там небыло других символов)\r\n  // Проверка на числа текущих показаний счетчика\r\n  let checkOne = getNumberOfMatches(octalArrayOfCurrentReadings);\r\n  // Проверка на числа предыдущих показаний счетчика\r\n  let checkTwo = getNumberOfMatches(octalArrayOfPreviousReadings);\r\n  // Стоимость тарифа за воду\r\n  let tariffNumber = Number(inpThree.value);\r\n  // Результат\r\n  let result = null;\r\n\r\n  if (checkOne === 8 && checkTwo === 8) {\r\n    // делаем из восьмеричного массива ЧИСЛО\r\n    let currentReadings = Number(octalArrayOfCurrentReadings.join(''));\r\n    let previousReadings = Number(octalArrayOfPreviousReadings.join(''));\r\n\r\n    if (currentReadings < previousReadings) {\r\n      // Класс и запись появляется если данные некорректны\r\n      outputOne.innerHTML = 'Данные некорректны!!!';\r\n      outputOne.classList.add('resultStyle');\r\n      outputTwo.innerHTML = 'Данные некорректны!!!';\r\n      outputTwo.classList.add('resultStyle');\r\n    } else if (currentReadings >= previousReadings && tariffNumber !== 0) {\r\n      // т.к. счетчик восьмироликовый, первые 5 цифр это метры кубические,\r\n      // а последнии 3 цифры это литры, чтобы производить вычитание\r\n      // из одних и тех же условных вилечин, приводим значение нашего счетчика\r\n      // к метрам кубическим деля его на 1000\r\n      result =\r\n        (currentReadings / 1000 - previousReadings / 1000) * tariffNumber;\r\n      // Появившиеся класс и запись исчезают если данные корректны\r\n      outputOne.classList.remove('resultStyle');\r\n      outputTwo.classList.remove('resultStyle');\r\n      // Выводим стоимость\r\n      outputOne.innerHTML = 'Стоимость ' + result.toFixed(2) + ' ₽';\r\n      // Выводим расход\r\n      console.log(tariffNumber, 'ЭЭЭЭЭЭ');\r\n      outputTwo.innerHTML =\r\n        'Расход ' + (result / tariffNumber).toFixed(2) + ' м3';\r\n    }\r\n  }\r\n}\r\n/*↑---------------------Раздел с общими функциями---------------------------------------↑*/\r\n//\r\n//\r\n//\r\n/*↓↓---------------------Раздел функций для ХВС-----------------------------------------↓↓*/\r\n// При потери фокуса после ввода в инпут чисел,\r\n// эти числа автоматически появляются на счетчике №1 ХВС\r\n// т.е. в списке li\r\ncoldInpActual.addEventListener('blur', function () {\r\n  outputNewElementsLi(coldOneLi, coldInpActual);\r\n});\r\n// При потери фокуса после ввода в инпут чисел,\r\n// эти числа автоматически появляются на счетчике №2 ХВС\r\n// т.е. в списке li\r\ncoldInpPrevious.addEventListener('blur', function () {\r\n  outputNewElementsLi(coldTwoLi, coldInpPrevious);\r\n});\r\n// По клику выводит стоимость и расход по счетчику ХВС\r\ncoldBtn.addEventListener('click', function () {\r\n  outputTheCostAndWaterConsumption(\r\n    coldInpActual,\r\n    coldInpPrevious,\r\n    coldInpWaterRate,\r\n    coldOutputOfCostResults,\r\n    coldOutputOfExpenditureResults\r\n  );\r\n});\r\n/*↑↑---------------------Раздел функций для ХВС-----------------------------------------↑↑*/\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_8_waterCalculatorPage/waterCalculator.js?");

/***/ }),

/***/ "./src/6_8_waterCalculatorPage/imgWaterCalculator/1.48fonWater.jpg":
/*!*************************************************************************!*\
  !*** ./src/6_8_waterCalculatorPage/imgWaterCalculator/1.48fonWater.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_8_waterCalculatorPage/waterCalculator.js");
/******/ 	
/******/ })()
;