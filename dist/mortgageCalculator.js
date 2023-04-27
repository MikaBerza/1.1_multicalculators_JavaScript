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

/***/ "./src/6_4_mortgageCalculatorPage/mortgageCalculator.js":
/*!**************************************************************!*\
  !*** ./src/6_4_mortgageCalculatorPage/mortgageCalculator.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _mortgageCalculator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mortgageCalculator.css */ \"./src/6_4_mortgageCalculatorPage/mortgageCalculator.css\");\n/* harmony import */ var _imgMortgageCalculator_1_35mobailCart_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgMortgageCalculator/1.35mobailCart.jpg */ \"./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.35mobailCart.jpg\");\n/* harmony import */ var _imgMortgageCalculator_1_36USBancorpIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgMortgageCalculator/1.36USBancorpIcon.png */ \"./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.36USBancorpIcon.png\");\n/*активация строго режима*/\n\n\n// импортируем стили css\n\n\n// импортируем изображения\n\n\n// Получаем NodeList с элементами Флажков ввода input\n// (Банковские процентные ставки, Собственные процентные ставки)\nconst inputArrayCheckbox = document.querySelectorAll('.form-check-flag-input');\n\n// Получаем NodeList с элементами Диапазона ввода input\nconst inputRange = document.querySelectorAll('.form-range');\n// Получаем NodeList с элементами Диапазона вывода Диапазона label\nconst labelRange = document.querySelectorAll('.form-label-number');\n\n// Получаем элементы выпадающего списка\nconst dropDownList = document.querySelector('#dropDownList');\n\n// Получаем NodeList с элементами Переключателя input\nconst inputArrayFlagSwitches = document.querySelectorAll('.form-check-input');\n\n// Получаем NodeList с элементами Переключателя label\nconst labelTextPercent = document.querySelectorAll('.form-check-label-centre');\n\n// Получаем NodeList с элементами вывода для правого столбца под иконкой (USBank)\nconst outputColNumber = document.querySelectorAll('.col__number');\n\n/*↓------------------Вспомогательные функции---------------------------------------------------------↓*/\n// Изначально элементы для выбора и расчета неактивны(функция createInactiveElements()\nfunction createInactiveElements() {\n  for (let i = 0; i < inputRange.length; i++) {\n    // Делаем неактивным элемент (Диапазона)\n    inputRange[i].setAttribute('disabled', '');\n    // Значение элементов (Диапазона) устанавливаются по умолчанию\n    labelRange[i].innerHTML = labelRange[i].dataset.valuelabel;\n    inputRange[i].value = inputRange[i].dataset.valueinput;\n    // Делаем неактивным элемент (Выпадающий список)\n    dropDownList.setAttribute('disabled', '');\n    // Делаем неактивным элемент (Переключатели)\n    inputArrayFlagSwitches[i].setAttribute('disabled', '');\n    inputArrayFlagSwitches[i].checked = false;\n  }\n}\ncreateInactiveElements();\n\n/*Функция устанавливает зависимость первоначального взноса от \r\nстоимости недвижимости. Первоначальный взнос должен быть не менее 30%\r\nи не более 100% от стоимости недвижимости.\r\nРассчитать первоначальный взнос*/\nfunction calculateTheInitialPayment() {\n  // стоимость недвижимости\n  let theCostOfRealEstate = Number(inputRange[1].value);\n  // минимальный первоначальный взнос (30%)\n  let minInitialPayment = (theCostOfRealEstate * 0.3).toFixed(0);\n  // первоначальный взнос\n  let initialPayment = Number(inputRange[2].value);\n  if (initialPayment > theCostOfRealEstate) {\n    inputRange[2].value = theCostOfRealEstate;\n    labelRange[2].textContent = divideNumberByTheDischarge(theCostOfRealEstate);\n  }\n  if (Number(inputRange[2].value) < minInitialPayment) {\n    inputRange[2].value = minInitialPayment;\n    labelRange[2].textContent = divideNumberByTheDischarge(minInitialPayment);\n  }\n}\n\n// С помощью цикла добираемся до каждого элемента диапазона\nfor (let i = 0; i < inputRange.length; i++) {\n  // ловим событие для каждого диапазона\n  inputRange[i].addEventListener('input', function () {\n    // запускаем функцию\n    calculateTheInitialPayment();\n    // изменяем текст значения диапазона\n    labelRange[i].innerHTML = divideNumberByTheDischarge(this.value);\n  });\n}\n\n/*Функции разделяет число на разряды пробелом. Берем целую часть числа \r\nи в цикле проходится каждый разряд от старшего к младшему. Если порядковый номер \r\nразряда делится на 3 (кроме самого старшего), тогда производится добавление пробела. \r\nТаким образом, после 3, 6, 9 и т.д. разрядов появятся пробелы. \r\nРазделить число на разряды*/\nfunction divideNumberByTheDischarge(number) {\n  let parts = (number + '').split('.');\n  let main = parts[0];\n  let len = main.length;\n  let output = '';\n  let i = len - 1;\n  while (i >= 0) {\n    // метод charAt() возвращает символ по заданному индексу внутри строки.\n    output = main.charAt(i) + output;\n    if ((len - i) % 3 === 0 && i > 0) {\n      output = ' ' + output;\n    }\n    --i;\n  }\n  if (parts.length > 1) {\n    output += '.' + parts[1];\n  }\n  return output;\n}\n\n// Изначально элементы для вывода результатов в правом столбце под иконкой (USBank)\n// установлены по умолчанию\nfunction setStandardOutputValues() {\n  for (let elem of outputColNumber) {\n    elem.innerHTML = elem.dataset.value;\n  }\n}\nsetStandardOutputValues();\n\n// Элементы активны при выборе левого флажка (Банковская годовая % ставка)\nfunction createActiveElementsBankBet() {\n  for (let i = 0; i < inputRange.length; i++) {\n    // Делаем активным элемент (Диапазона)\n    inputRange[i].removeAttribute('disabled');\n    // Делаем неактивным элемент (Диапазона-Собственная годовая % ставка)\n    inputRange[0].setAttribute('disabled', '');\n    // Делаем активным элемент (Выпадающий список)\n    dropDownList.removeAttribute('disabled');\n    // Делаем активным элемент (Переключатели)\n    inputArrayFlagSwitches[i].removeAttribute('disabled');\n  }\n  // Делаем активным элемент (правый флажок)\n  inputArrayCheckbox[1].setAttribute('disabled', '');\n}\n\n// Элементы активны при выборе правого флажка (Собственная годовая % ставка)\nfunction createActiveElementsOwnBet() {\n  for (let i = 0; i < inputRange.length; i++) {\n    // Делаем активным элемент (Диапазона)\n    inputRange[i].removeAttribute('disabled');\n    // Делаем неактивным элемент (Выпадающий список)\n    dropDownList.setAttribute('disabled', '');\n    // Делаем неактивным элемент (Переключатели)\n    inputArrayFlagSwitches[i].setAttribute('disabled', '');\n  }\n  // Делаем активным элемент (левый флажок)\n  inputArrayCheckbox[0].setAttribute('disabled', '');\n}\n\n// Функция добавляет (активирует) класс со стилем для элементов Переключателей\nfunction addClass() {\n  for (let i = 0; i < labelTextPercent.length; i++) {\n    inputArrayFlagSwitches[i].addEventListener('click', function () {\n      if (inputArrayFlagSwitches[i].checked === true) {\n        labelTextPercent[i].classList.add('active-text');\n      } else {\n        labelTextPercent[i].classList.remove('active-text');\n      }\n    });\n  }\n}\n\n// Функция удаляет (деактивирует) класс со стилем для элементов Переключателей\nfunction deleteClass() {\n  for (let i = 0; i < labelTextPercent.length; i++) {\n    labelTextPercent[i].classList.remove('active-text');\n  }\n}\n/*↑------------------Вспомогательные функции---------------------------------------------------------↑*/\n\n/*↓↓-----------------Функции для расчета при акт.флажке (Собственная годовая % ставка)--------------↓↓*/\n// [0]Функция вычисляет число суммы кредита\nfunction calcLoanAmount() {\n  let priceRealEstate = Number(inputRange[1].value);\n  let initialPayment = Number(inputRange[2].value);\n  let loanAmount = priceRealEstate - initialPayment;\n  outputColNumber[0].innerHTML = divideNumberByTheDischarge(loanAmount);\n  return loanAmount;\n}\n\n// [1]Функция возвращает число годовой процентной ставки (при акт. галочке - Собственная годовая % ставка)\nfunction getDigitAnnualInterestRateRight() {\n  let result = inputRange[0].value;\n  outputColNumber[1].innerHTML = result;\n  return Number(result);\n}\n\n// [2]Функция вычисляет число ежемесячного платежа\nfunction calcMonthlyPaymentRight() {\n  // сумма кредита\n  let s = calcLoanAmount();\n  // ежемесячная процентная ставка\n  let i = calcMonthlyInterestRateRight();\n  // срок на который берется кредит (в месяцах)\n  let n = Number(inputRange[3].value) * 12;\n  let result = s * (i + i / ((1 + i) ** n - 1));\n  outputColNumber[2].innerHTML = divideNumberByTheDischarge(result.toFixed(3));\n  return result;\n}\n\n// [3]Функция вычисляет число ежемесячной процентной ставки\nfunction calcMonthlyInterestRateRight() {\n  // ежемесячная процентная ставка\n  let monthlyRate = getDigitAnnualInterestRateRight() / 100 / 12;\n  outputColNumber[3].innerHTML = monthlyRate.toFixed(4);\n  return monthlyRate;\n}\n\n// [4]Функция вычисляет сумму, которая идет на погашение процентов\nfunction calcInterestRepaymentAmountRight() {\n  // сумма оставшейся задолженности по кредиту, т.е. остаток\n  let sn = calcLoanAmount();\n  // ежемесячная процентная ставка\n  let i = calcMonthlyInterestRateRight();\n  let interestRepaymentAmount = sn * i;\n  outputColNumber[4].innerHTML = divideNumberByTheDischarge(interestRepaymentAmount.toFixed(3));\n  return interestRepaymentAmount;\n}\n\n// [5]функция вычисляет сумму, которая идет на погашение тела кредита\nfunction calcRepaymentAmountLoanBodyRight() {\n  // число ежемесячного платежа\n  let p = calcMonthlyPaymentRight();\n  // сумму, которая идет на погашение процентов\n  let inn = calcInterestRepaymentAmountRight();\n  let repaymentAmountLoanBody = p - inn;\n  outputColNumber[5].innerHTML = divideNumberByTheDischarge(repaymentAmountLoanBody.toFixed(3));\n  return repaymentAmountLoanBody;\n}\n\n// функция запускает другие функции для расчета по собственной процентной ставке\nfunction calcAtOwnInterestRate() {\n  for (let i = 0; i < inputRange.length; i++) {\n    //[0]Функция вычисляет число суммы кредита\n    inputRange[i].addEventListener('click', calcLoanAmount);\n    //[1]Функция возвращает число годовой процентной ставки\n    inputRange[i].addEventListener('click', getDigitAnnualInterestRateRight);\n    // [2]Функция вычисляет число ежемесячного платежа\n    inputRange[i].addEventListener('click', calcMonthlyPaymentRight);\n    // [3]Функция вычисляет число ежемесячной процентной ставки\n    inputRange[i].addEventListener('click', calcMonthlyInterestRateRight);\n    // [4]Функция вычисляет сумму, которая идет на погашение процентов\n    inputRange[i].addEventListener('click', calcInterestRepaymentAmountRight);\n    // [5]функция вычисляет сумму, которая идет на погашение тела кредита\n    inputRange[i].addEventListener('click', calcRepaymentAmountLoanBodyRight);\n  }\n}\n/*↑↑-------------Функции для расчета при акт.флажке (Собственная годовая % ставка)------------------↑↑*/\n\n/*↓↓-------------Функции для расчета при акт.флажке (Банковская годовая % ставка)-------------------↓↓*/\n// [0]Функция вычисляет число суммы кредита\n// calcLoanAmount() эту функцию перепременил\n\n// [1]Функция возвращает число годовой процентной ставки (при акт. галочке - Банковская годовая % ставка)\n// из выпадающего списка, с учетом услуг, снижающих ставку по кредиту\nfunction getDigitAnnualInterestRateLeft() {\n  // Ставка из выпадающего списка\n  let betFromList = dropDownList[dropDownList.selectedIndex].value;\n  // Результат с учетом снижающих ставок\n  let result = 0;\n  // Суммарное число услуг, снижающих ставку по кредиту\n  let sum = 0;\n  // С помощью цыкла добираемся до каждой услуги и суммируем их\n  for (let i = 0; i < inputArrayFlagSwitches.length; i++) {\n    if (inputArrayFlagSwitches[i].checked === true) {\n      sum += Number(inputArrayFlagSwitches[i].value);\n    }\n  }\n  // Получаем результат с учетом всех снижающих ставок\n  result = Number(betFromList) - sum;\n  outputColNumber[1].innerHTML = result.toFixed(2);\n  // возвращаем результат\n  return result;\n}\n\n// [2]Функция вычисляет число ежемесячного платежа\nfunction calcMonthlyPaymentLeft() {\n  // сумма кредита\n  let s = calcLoanAmount();\n  // ежемесячная процентная ставка\n  let i = calcMonthlyInterestRateLeft();\n  // срок на который берется кредит (в месяцах)\n  let n = Number(inputRange[3].value) * 12;\n  let result = s * (i + i / ((1 + i) ** n - 1));\n  outputColNumber[2].innerHTML = divideNumberByTheDischarge(result.toFixed(3));\n  return result;\n}\n\n// [3]Функция вычисляет число ежемесячной процентной ставки\nfunction calcMonthlyInterestRateLeft() {\n  // ежемесячная процентная ставка\n  let monthlyRate = getDigitAnnualInterestRateLeft() / 100 / 12;\n  outputColNumber[3].innerHTML = monthlyRate.toFixed(4);\n  return monthlyRate;\n}\n\n// [4]Функция вычисляет сумму, которая идет на погашение процентов\nfunction calcInterestRepaymentAmountLeft() {\n  // сумма оставшейся задолженности по кредиту, т.е. остаток\n  let sn = calcLoanAmount();\n  // ежемесячная процентная ставка\n  let i = calcMonthlyInterestRateLeft();\n  let interestRepaymentAmount = sn * i;\n  outputColNumber[4].innerHTML = divideNumberByTheDischarge(interestRepaymentAmount.toFixed(3));\n  return interestRepaymentAmount;\n}\n\n// [5]функция вычисляет сумму, которая идет на погашение тела кредита\nfunction calcRepaymentAmountLoanBodyLeft() {\n  // число ежемесячного платежа\n  let p = calcMonthlyPaymentLeft();\n  // сумму, которая идет на погашение процентов\n  let inn = calcInterestRepaymentAmountLeft();\n  let repaymentAmountLoanBody = p - inn;\n  outputColNumber[5].innerHTML = divideNumberByTheDischarge(repaymentAmountLoanBody.toFixed(3));\n  return repaymentAmountLoanBody;\n}\n\n// функция запускает другие функции для расчета по банковской процентной стваке\nfunction calcAtBankInterestRate() {\n  for (let i = 0; i < inputArrayFlagSwitches.length; i++) {\n    /*\r\n    Можно сделать через this, решение получиться короче!,\r\n    Объект this указывает на элемент, в котором произошло событие!!!\r\n    this.addEventListener('click', calcLoanAmount);\r\n    this.addEventListener('click', getDigitAnnualInterestRateRight);\r\n    this.addEventListener('click', calcMonthlyPaymentRight);\r\n    this.addEventListener('click', calcMonthlyInterestRateRight);\r\n    this.addEventListener('click', calcInterestRepaymentAmountRight);\r\n    this.addEventListener('click', calcRepaymentAmountLoanBodyRight);\r\n    Но в строгом режиме('use strict') --- (Объект this) ---Выдает ошибку!\r\n    Делаю по другому)))!\r\n    */\n    //[0]Функция вычисляет число суммы кредита\n    inputRange[i].addEventListener('click', calcLoanAmount);\n    //[1]Функция возвращает число годовой процентной ставки\n    dropDownList.addEventListener('click', getDigitAnnualInterestRateLeft);\n    inputArrayFlagSwitches[i].addEventListener('click', getDigitAnnualInterestRateLeft);\n    //[2]Функция вычисляет число ежемесячного платежа\n    inputRange[i].addEventListener('click', calcMonthlyPaymentLeft);\n    dropDownList.addEventListener('click', calcMonthlyPaymentLeft);\n    inputArrayFlagSwitches[i].addEventListener('click', calcMonthlyPaymentLeft);\n    //[3]Функция вычисляет число ежемесячной процентной ставки\n    dropDownList.addEventListener('click', calcMonthlyInterestRateLeft);\n    inputArrayFlagSwitches[i].addEventListener('click', calcMonthlyInterestRateLeft);\n    //[4]Функция вычисляет сумму, которая идет на погашение процентов\n    inputRange[i].addEventListener('click', calcInterestRepaymentAmountLeft);\n    dropDownList.addEventListener('click', calcInterestRepaymentAmountLeft);\n    inputArrayFlagSwitches[i].addEventListener('click', calcInterestRepaymentAmountLeft);\n    // [5]функция вычисляет сумму, которая идет на погашение тела кредита\n    inputRange[i].addEventListener('click', calcRepaymentAmountLoanBodyLeft);\n    dropDownList.addEventListener('click', calcRepaymentAmountLoanBodyLeft);\n    inputArrayFlagSwitches[i].addEventListener('click', calcRepaymentAmountLoanBodyLeft);\n  }\n}\n/*↑↑-------------Функции для расчета при акт.флажке (Банковская годовая % ставка)-------------------↑↑*/\n\n/*↓↓↓------------Результирующая функции------------------------------------------------------------↓↓↓*/\n// функция определяет по какой ставки будет производиться расчет\n// по Банковской годовой % ставки или по Собственной годовой % ставки\nfunction determinesToBeCalculated() {\n  for (let i = 0; i < inputArrayCheckbox.length; i++) {\n    inputArrayCheckbox[i].addEventListener('click', function () {\n      if (inputArrayCheckbox[0].checked === true) {\n        // Проверяем\n        console.log('Выбран левый флажек');\n        // Элементы активны при выборе левого влажка (Банковская годовая % ставка)\n        createActiveElementsBankBet();\n        // Функция добавляет (активирует) класс со стилем для элементов Переключателей\n        addClass();\n        // функция запускает другие функции для расчета по банковской процентной стваке\n        calcAtBankInterestRate();\n      } else if (inputArrayCheckbox[1].checked === true) {\n        console.log('Выбран правый флажек');\n        // Элементы активны при выборе правого влажка (Собственная годовая % ставка)\n        createActiveElementsOwnBet();\n        // функция запускает другие функции для расчета по собственной процентной стваке\n        calcAtOwnInterestRate();\n      } else {\n        console.log('Флажки не выбраны');\n        // Делаем активными (правый и левый флажки)\n        inputArrayCheckbox[0].removeAttribute('disabled');\n        inputArrayCheckbox[1].removeAttribute('disabled');\n        // Элементы для выбора и расчета неактивны(функция createInactiveElements()\n        createInactiveElements();\n        // Функция удаляет класс со стилем для элементов Переключателей\n        deleteClass();\n        // устанавливаем значения по умолчанию для правого столбца вывода\n        setStandardOutputValues();\n      }\n    });\n  }\n}\ndeterminesToBeCalculated();\n/*↑↑↑------------Результирующая функции------------------------------------------------------------↑↑↑*/\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_4_mortgageCalculatorPage/mortgageCalculator.js?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_4_mortgageCalculatorPage/mortgageCalculator.css":
/*!***************************************************************!*\
  !*** ./src/6_4_mortgageCalculatorPage/mortgageCalculator.css ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_4_mortgageCalculatorPage/mortgageCalculator.css?");

/***/ }),

/***/ "./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.35mobailCart.jpg":
/*!*********************************************************************************!*\
  !*** ./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.35mobailCart.jpg ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.35mobailCart.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.35mobailCart.jpg?");

/***/ }),

/***/ "./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.36USBancorpIcon.png":
/*!************************************************************************************!*\
  !*** ./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.36USBancorpIcon.png ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.36USBancorpIcon.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.36USBancorpIcon.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_4_mortgageCalculatorPage/mortgageCalculator.js");
/******/ 	
/******/ })()
;