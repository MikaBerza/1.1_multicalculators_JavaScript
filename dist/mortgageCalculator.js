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

/***/ "./src/6_4_mortgageCalculatorPage/mortgageCalculator.css":
/*!***************************************************************!*\
  !*** ./src/6_4_mortgageCalculatorPage/mortgageCalculator.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_4_mortgageCalculatorPage/mortgageCalculator.css?");

/***/ }),

/***/ "./src/6_4_mortgageCalculatorPage/mortgageCalculator.js":
/*!**************************************************************!*\
  !*** ./src/6_4_mortgageCalculatorPage/mortgageCalculator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _mortgageCalculator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mortgageCalculator.css */ \"./src/6_4_mortgageCalculatorPage/mortgageCalculator.css\");\n/* harmony import */ var _imgMortgageCalculator_1_35mobailCart_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgMortgageCalculator/1.35mobailCart.jpg */ \"./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.35mobailCart.jpg\");\n/* harmony import */ var _imgMortgageCalculator_1_36USBancorpIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgMortgageCalculator/1.36USBancorpIcon.png */ \"./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.36USBancorpIcon.png\");\n/*активация строго режима*/\r\n\r\n// импортируем стили css\r\n\r\n\r\n// импортируем изображения\r\n\r\n\r\n// Получаем NodeList с элементами Флажков ввода input\r\n// (Банковские процентные ставки, Собственные процентные ставки)\r\nconst inputArrayCheckbox = document.querySelectorAll('.form-check-flag-input');\r\n\r\n// Получаем NodeList с элементами Диапазона ввода input\r\nconst inputRange = document.querySelectorAll('.form-range');\r\n// Получаем NodeList с элементами Диапазона вывода Диапазона label\r\nconst labelRange = document.querySelectorAll('.form-label-number');\r\n\r\n// Получаем элементы выпадающего списка\r\nconst dropDownList = document.querySelector('#dropDownList');\r\n\r\n// Получаем NodeList с элементами Переключателя input\r\nconst inputArrayFlagSwitches = document.querySelectorAll('.form-check-input');\r\n\r\n// Получаем NodeList с элементами Переключателя label\r\nconst labelTextPercent = document.querySelectorAll('.form-check-label-centre');\r\n\r\n// Получаем NodeList с элементами вывода для правого столбца под иконкой (USBank)\r\nconst outputColNumber = document.querySelectorAll('.col__number');\r\n\r\n/*↓------------------Вспомогательные функции---------------------------------------------------------↓*/\r\n// Изначально элементы для выбора и расчета неактивны(функция createInactiveElements()\r\nfunction createInactiveElements() {\r\n  for (let i = 0; i < inputRange.length; i++) {\r\n    // Делаем неактивным элемент (Диапазона)\r\n    inputRange[i].setAttribute('disabled', '');\r\n    // Значение элементов (Диапазона) устанавливаются по умолчанию\r\n    labelRange[i].innerHTML = labelRange[i].dataset.valuelabel;\r\n    inputRange[i].value = inputRange[i].dataset.valueinput;\r\n    // Делаем неактивным элемент (Выпадающий список)\r\n    dropDownList.setAttribute('disabled', '');\r\n    // Делаем неактивным элемент (Переключатели)\r\n    inputArrayFlagSwitches[i].setAttribute('disabled', '');\r\n    inputArrayFlagSwitches[i].checked = false;\r\n  }\r\n}\r\ncreateInactiveElements();\r\n\r\n/*Функция устанавливает зависимость первоначального взноса от \r\nстоимости недвижимости. Первоначальный взнос должен быть не менее 30%\r\nи не более 100% от стоимости недвижимости.\r\nРассчитать первоначальный взнос*/\r\nfunction calculateTheInitialPayment() {\r\n  // стоимость недвижимости\r\n  let theCostOfRealEstate = Number(inputRange[1].value);\r\n  // минимальный первоначальный взнос (30%)\r\n  let minInitialPayment = (theCostOfRealEstate * 0.3).toFixed(0);\r\n  // первоначальный взнос\r\n  let initialPayment = Number(inputRange[2].value);\r\n\r\n  if (initialPayment > theCostOfRealEstate) {\r\n    inputRange[2].value = theCostOfRealEstate;\r\n    labelRange[2].textContent = divideNumberByTheDischarge(theCostOfRealEstate);\r\n  }\r\n  if (Number(inputRange[2].value) < minInitialPayment) {\r\n    inputRange[2].value = minInitialPayment;\r\n    labelRange[2].textContent = divideNumberByTheDischarge(minInitialPayment);\r\n  }\r\n}\r\n\r\n// С помощью цикла добираемся до каждого элемента диапазона\r\nfor (let i = 0; i < inputRange.length; i++) {\r\n  // ловим событие для каждого диапазона\r\n  inputRange[i].addEventListener('input', function () {\r\n    // запускаем функцию\r\n    calculateTheInitialPayment();\r\n    // изменяем текст значения диапазона\r\n    labelRange[i].innerHTML = divideNumberByTheDischarge(this.value);\r\n  });\r\n}\r\n\r\n/*Функции разделяет число на разряды пробелом. Берем целую часть числа \r\nи в цикле проходится каждый разряд от старшего к младшему. Если порядковый номер \r\nразряда делится на 3 (кроме самого старшего), тогда производится добавление пробела. \r\nТаким образом, после 3, 6, 9 и т.д. разрядов появятся пробелы. \r\nРазделить число на разряды*/\r\nfunction divideNumberByTheDischarge(number) {\r\n  let parts = (number + '').split('.');\r\n  let main = parts[0];\r\n  let len = main.length;\r\n  let output = '';\r\n  let i = len - 1;\r\n\r\n  while (i >= 0) {\r\n    // метод charAt() возвращает символ по заданному индексу внутри строки.\r\n    output = main.charAt(i) + output;\r\n    if ((len - i) % 3 === 0 && i > 0) {\r\n      output = ' ' + output;\r\n    }\r\n    --i;\r\n  }\r\n\r\n  if (parts.length > 1) {\r\n    output += '.' + parts[1];\r\n  }\r\n  return output;\r\n}\r\n\r\n// Изначально элементы для вывода результатов в правом столбце под иконкой (USBank)\r\n// установлены по умолчанию\r\nfunction setStandardOutputValues() {\r\n  for (let elem of outputColNumber) {\r\n    elem.innerHTML = elem.dataset.value;\r\n  }\r\n}\r\nsetStandardOutputValues();\r\n\r\n// Элементы активны при выборе левого флажка (Банковская годовая % ставка)\r\nfunction createActiveElementsBankBet() {\r\n  for (let i = 0; i < inputRange.length; i++) {\r\n    // Делаем активным элемент (Диапазона)\r\n    inputRange[i].removeAttribute('disabled');\r\n    // Делаем неактивным элемент (Диапазона-Собственная годовая % ставка)\r\n    inputRange[0].setAttribute('disabled', '');\r\n    // Делаем активным элемент (Выпадающий список)\r\n    dropDownList.removeAttribute('disabled');\r\n    // Делаем активным элемент (Переключатели)\r\n    inputArrayFlagSwitches[i].removeAttribute('disabled');\r\n  }\r\n  // Делаем активным элемент (правый флажок)\r\n  inputArrayCheckbox[1].setAttribute('disabled', '');\r\n}\r\n\r\n// Элементы активны при выборе правого флажка (Собственная годовая % ставка)\r\nfunction createActiveElementsOwnBet() {\r\n  for (let i = 0; i < inputRange.length; i++) {\r\n    // Делаем активным элемент (Диапазона)\r\n    inputRange[i].removeAttribute('disabled');\r\n    // Делаем неактивным элемент (Выпадающий список)\r\n    dropDownList.setAttribute('disabled', '');\r\n    // Делаем неактивным элемент (Переключатели)\r\n    inputArrayFlagSwitches[i].setAttribute('disabled', '');\r\n  }\r\n  // Делаем активным элемент (левый флажок)\r\n  inputArrayCheckbox[0].setAttribute('disabled', '');\r\n}\r\n\r\n// Функция добавляет (активирует) класс со стилем для элементов Переключателей\r\nfunction addClass() {\r\n  for (let i = 0; i < labelTextPercent.length; i++) {\r\n    inputArrayFlagSwitches[i].addEventListener('click', function () {\r\n      if (inputArrayFlagSwitches[i].checked === true) {\r\n        labelTextPercent[i].classList.add('active-text');\r\n      } else {\r\n        labelTextPercent[i].classList.remove('active-text');\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n// Функция удаляет (деактивирует) класс со стилем для элементов Переключателей\r\nfunction deleteClass() {\r\n  for (let i = 0; i < labelTextPercent.length; i++) {\r\n    labelTextPercent[i].classList.remove('active-text');\r\n  }\r\n}\r\n/*↑------------------Вспомогательные функции---------------------------------------------------------↑*/\r\n\r\n/*↓↓-----------------Функции для расчета при акт.флажке (Собственная годовая % ставка)--------------↓↓*/\r\n// [0]Функция вычисляет число суммы кредита\r\nfunction calcLoanAmount() {\r\n  let priceRealEstate = Number(inputRange[1].value);\r\n  let initialPayment = Number(inputRange[2].value);\r\n\r\n  let loanAmount = priceRealEstate - initialPayment;\r\n  outputColNumber[0].innerHTML = divideNumberByTheDischarge(loanAmount);\r\n  return loanAmount;\r\n}\r\n\r\n// [1]Функция возвращает число годовой процентной ставки (при акт. галочке - Собственная годовая % ставка)\r\nfunction getDigitAnnualInterestRateRight() {\r\n  let result = inputRange[0].value;\r\n  outputColNumber[1].innerHTML = result;\r\n  return Number(result);\r\n}\r\n\r\n// [2]Функция вычисляет число ежемесячного платежа\r\nfunction calcMonthlyPaymentRight() {\r\n  // сумма кредита\r\n  let s = calcLoanAmount();\r\n  // ежемесячная процентная ставка\r\n  let i = calcMonthlyInterestRateRight();\r\n  // срок на который берется кредит (в месяцах)\r\n  let n = Number(inputRange[3].value) * 12;\r\n\r\n  let result = s * (i + i / ((1 + i) ** n - 1));\r\n  outputColNumber[2].innerHTML = divideNumberByTheDischarge(result.toFixed(3));\r\n  return result;\r\n}\r\n\r\n// [3]Функция вычисляет число ежемесячной процентной ставки\r\nfunction calcMonthlyInterestRateRight() {\r\n  // ежемесячная процентная ставка\r\n  let monthlyRate = getDigitAnnualInterestRateRight() / 100 / 12;\r\n  outputColNumber[3].innerHTML = monthlyRate.toFixed(4);\r\n  return monthlyRate;\r\n}\r\n\r\n// [4]Функция вычисляет сумму, которая идет на погашение процентов\r\nfunction calcInterestRepaymentAmountRight() {\r\n  // сумма оставшейся задолженности по кредиту, т.е. остаток\r\n  let sn = calcLoanAmount();\r\n  // ежемесячная процентная ставка\r\n  let i = calcMonthlyInterestRateRight();\r\n  let interestRepaymentAmount = sn * i;\r\n  outputColNumber[4].innerHTML = divideNumberByTheDischarge(\r\n    interestRepaymentAmount.toFixed(3)\r\n  );\r\n  return interestRepaymentAmount;\r\n}\r\n\r\n// [5]функция вычисляет сумму, которая идет на погашение тела кредита\r\nfunction calcRepaymentAmountLoanBodyRight() {\r\n  // число ежемесячного платежа\r\n  let p = calcMonthlyPaymentRight();\r\n  // сумму, которая идет на погашение процентов\r\n  let inn = calcInterestRepaymentAmountRight();\r\n  let repaymentAmountLoanBody = p - inn;\r\n  outputColNumber[5].innerHTML = divideNumberByTheDischarge(\r\n    repaymentAmountLoanBody.toFixed(3)\r\n  );\r\n  return repaymentAmountLoanBody;\r\n}\r\n\r\n// функция запускает другие функции для расчета по собственной процентной ставке\r\nfunction calcAtOwnInterestRate() {\r\n  for (let i = 0; i < inputRange.length; i++) {\r\n    //[0]Функция вычисляет число суммы кредита\r\n    inputRange[i].addEventListener('click', calcLoanAmount);\r\n    //[1]Функция возвращает число годовой процентной ставки\r\n    inputRange[i].addEventListener('click', getDigitAnnualInterestRateRight);\r\n    // [2]Функция вычисляет число ежемесячного платежа\r\n    inputRange[i].addEventListener('click', calcMonthlyPaymentRight);\r\n    // [3]Функция вычисляет число ежемесячной процентной ставки\r\n    inputRange[i].addEventListener('click', calcMonthlyInterestRateRight);\r\n    // [4]Функция вычисляет сумму, которая идет на погашение процентов\r\n    inputRange[i].addEventListener('click', calcInterestRepaymentAmountRight);\r\n    // [5]функция вычисляет сумму, которая идет на погашение тела кредита\r\n    inputRange[i].addEventListener('click', calcRepaymentAmountLoanBodyRight);\r\n  }\r\n}\r\n/*↑↑-------------Функции для расчета при акт.флажке (Собственная годовая % ставка)------------------↑↑*/\r\n\r\n/*↓↓-------------Функции для расчета при акт.флажке (Банковская годовая % ставка)-------------------↓↓*/\r\n// [0]Функция вычисляет число суммы кредита\r\n// calcLoanAmount() эту функцию перепременил\r\n\r\n// [1]Функция возвращает число годовой процентной ставки (при акт. галочке - Банковская годовая % ставка)\r\n// из выпадающего списка, с учетом услуг, снижающих ставку по кредиту\r\nfunction getDigitAnnualInterestRateLeft() {\r\n  // Ставка из выпадающего списка\r\n  let betFromList = dropDownList[dropDownList.selectedIndex].value;\r\n  // Результат с учетом снижающих ставок\r\n  let result = 0;\r\n  // Суммарное число услуг, снижающих ставку по кредиту\r\n  let sum = 0;\r\n  // С помощью цыкла добираемся до каждой услуги и суммируем их\r\n  for (let i = 0; i < inputArrayFlagSwitches.length; i++) {\r\n    if (inputArrayFlagSwitches[i].checked === true) {\r\n      sum += Number(inputArrayFlagSwitches[i].value);\r\n    }\r\n  }\r\n  // Получаем результат с учетом всех снижающих ставок\r\n  result = Number(betFromList) - sum;\r\n  outputColNumber[1].innerHTML = result.toFixed(2);\r\n  // возвращаем результат\r\n  return result;\r\n}\r\n\r\n// [2]Функция вычисляет число ежемесячного платежа\r\nfunction calcMonthlyPaymentLeft() {\r\n  // сумма кредита\r\n  let s = calcLoanAmount();\r\n  // ежемесячная процентная ставка\r\n  let i = calcMonthlyInterestRateLeft();\r\n  // срок на который берется кредит (в месяцах)\r\n  let n = Number(inputRange[3].value) * 12;\r\n\r\n  let result = s * (i + i / ((1 + i) ** n - 1));\r\n  outputColNumber[2].innerHTML = divideNumberByTheDischarge(result.toFixed(3));\r\n  return result;\r\n}\r\n\r\n// [3]Функция вычисляет число ежемесячной процентной ставки\r\nfunction calcMonthlyInterestRateLeft() {\r\n  // ежемесячная процентная ставка\r\n  let monthlyRate = getDigitAnnualInterestRateLeft() / 100 / 12;\r\n  outputColNumber[3].innerHTML = monthlyRate.toFixed(4);\r\n  return monthlyRate;\r\n}\r\n\r\n// [4]Функция вычисляет сумму, которая идет на погашение процентов\r\nfunction calcInterestRepaymentAmountLeft() {\r\n  // сумма оставшейся задолженности по кредиту, т.е. остаток\r\n  let sn = calcLoanAmount();\r\n  // ежемесячная процентная ставка\r\n  let i = calcMonthlyInterestRateLeft();\r\n  let interestRepaymentAmount = sn * i;\r\n  outputColNumber[4].innerHTML = divideNumberByTheDischarge(\r\n    interestRepaymentAmount.toFixed(3)\r\n  );\r\n  return interestRepaymentAmount;\r\n}\r\n\r\n// [5]функция вычисляет сумму, которая идет на погашение тела кредита\r\nfunction calcRepaymentAmountLoanBodyLeft() {\r\n  // число ежемесячного платежа\r\n  let p = calcMonthlyPaymentLeft();\r\n  // сумму, которая идет на погашение процентов\r\n  let inn = calcInterestRepaymentAmountLeft();\r\n  let repaymentAmountLoanBody = p - inn;\r\n  outputColNumber[5].innerHTML = divideNumberByTheDischarge(\r\n    repaymentAmountLoanBody.toFixed(3)\r\n  );\r\n  return repaymentAmountLoanBody;\r\n}\r\n\r\n// функция запускает другие функции для расчета по банковской процентной стваке\r\nfunction calcAtBankInterestRate() {\r\n  for (let i = 0; i < inputArrayFlagSwitches.length; i++) {\r\n    /*\r\n    Можно сделать через this, решение получиться короче!,\r\n    Объект this указывает на элемент, в котором произошло событие!!!\r\n    this.addEventListener('click', calcLoanAmount);\r\n    this.addEventListener('click', getDigitAnnualInterestRateRight);\r\n    this.addEventListener('click', calcMonthlyPaymentRight);\r\n    this.addEventListener('click', calcMonthlyInterestRateRight);\r\n    this.addEventListener('click', calcInterestRepaymentAmountRight);\r\n    this.addEventListener('click', calcRepaymentAmountLoanBodyRight);\r\n    Но в строгом режиме('use strict') --- (Объект this) ---Выдает ошибку!\r\n    Делаю по другому)))!\r\n    */\r\n    //[0]Функция вычисляет число суммы кредита\r\n    inputRange[i].addEventListener('click', calcLoanAmount);\r\n    //[1]Функция возвращает число годовой процентной ставки\r\n    dropDownList.addEventListener('click', getDigitAnnualInterestRateLeft);\r\n    inputArrayFlagSwitches[i].addEventListener(\r\n      'click',\r\n      getDigitAnnualInterestRateLeft\r\n    );\r\n    //[2]Функция вычисляет число ежемесячного платежа\r\n    inputRange[i].addEventListener('click', calcMonthlyPaymentLeft);\r\n    dropDownList.addEventListener('click', calcMonthlyPaymentLeft);\r\n    inputArrayFlagSwitches[i].addEventListener('click', calcMonthlyPaymentLeft);\r\n    //[3]Функция вычисляет число ежемесячной процентной ставки\r\n    dropDownList.addEventListener('click', calcMonthlyInterestRateLeft);\r\n    inputArrayFlagSwitches[i].addEventListener(\r\n      'click',\r\n      calcMonthlyInterestRateLeft\r\n    );\r\n    //[4]Функция вычисляет сумму, которая идет на погашение процентов\r\n    inputRange[i].addEventListener('click', calcInterestRepaymentAmountLeft);\r\n    dropDownList.addEventListener('click', calcInterestRepaymentAmountLeft);\r\n    inputArrayFlagSwitches[i].addEventListener(\r\n      'click',\r\n      calcInterestRepaymentAmountLeft\r\n    );\r\n    // [5]функция вычисляет сумму, которая идет на погашение тела кредита\r\n    inputRange[i].addEventListener('click', calcRepaymentAmountLoanBodyLeft);\r\n    dropDownList.addEventListener('click', calcRepaymentAmountLoanBodyLeft);\r\n    inputArrayFlagSwitches[i].addEventListener(\r\n      'click',\r\n      calcRepaymentAmountLoanBodyLeft\r\n    );\r\n  }\r\n}\r\n/*↑↑-------------Функции для расчета при акт.флажке (Банковская годовая % ставка)-------------------↑↑*/\r\n\r\n/*↓↓↓------------Результирующая функции------------------------------------------------------------↓↓↓*/\r\n// функция определяет по какой ставки будет производиться расчет\r\n// по Банковской годовой % ставки или по Собственной годовой % ставки\r\nfunction determinesToBeCalculated() {\r\n  for (let i = 0; i < inputArrayCheckbox.length; i++) {\r\n    inputArrayCheckbox[i].addEventListener('click', function () {\r\n      if (inputArrayCheckbox[0].checked === true) {\r\n        // Проверяем\r\n        console.log('Выбран левый флажек');\r\n        // Элементы активны при выборе левого влажка (Банковская годовая % ставка)\r\n        createActiveElementsBankBet();\r\n        // Функция добавляет (активирует) класс со стилем для элементов Переключателей\r\n        addClass();\r\n        // функция запускает другие функции для расчета по банковской процентной стваке\r\n        calcAtBankInterestRate();\r\n      } else if (inputArrayCheckbox[1].checked === true) {\r\n        console.log('Выбран правый флажек');\r\n        // Элементы активны при выборе правого влажка (Собственная годовая % ставка)\r\n        createActiveElementsOwnBet();\r\n        // функция запускает другие функции для расчета по собственной процентной стваке\r\n        calcAtOwnInterestRate();\r\n      } else {\r\n        console.log('Флажки не выбраны');\r\n        // Делаем активными (правый и левый флажки)\r\n        inputArrayCheckbox[0].removeAttribute('disabled');\r\n        inputArrayCheckbox[1].removeAttribute('disabled');\r\n        // Элементы для выбора и расчета неактивны(функция createInactiveElements()\r\n        createInactiveElements();\r\n        // Функция удаляет класс со стилем для элементов Переключателей\r\n        deleteClass();\r\n        // устанавливаем значения по умолчанию для правого столбца вывода\r\n        setStandardOutputValues();\r\n      }\r\n    });\r\n  }\r\n}\r\ndeterminesToBeCalculated();\r\n/*↑↑↑------------Результирующая функции------------------------------------------------------------↑↑↑*/\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_4_mortgageCalculatorPage/mortgageCalculator.js?");

/***/ }),

/***/ "./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.35mobailCart.jpg":
/*!*********************************************************************************!*\
  !*** ./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.35mobailCart.jpg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.35mobailCart.jpg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.35mobailCart.jpg?");

/***/ }),

/***/ "./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.36USBancorpIcon.png":
/*!************************************************************************************!*\
  !*** ./src/6_4_mortgageCalculatorPage/imgMortgageCalculator/1.36USBancorpIcon.png ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_4_mortgageCalculatorPage/mortgageCalculator.js");
/******/ 	
/******/ })()
;