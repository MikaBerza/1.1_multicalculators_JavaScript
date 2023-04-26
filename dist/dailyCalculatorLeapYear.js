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

/***/ "./src/6_5_dailyCalculatorPage/dailyCalculatorLeapYear.js":
/*!****************************************************************!*\
  !*** ./src/6_5_dailyCalculatorPage/dailyCalculatorLeapYear.js ***!
  \****************************************************************/
/***/ (() => {

eval("/*активация строго режима*/\r\n\r\n\r\n// Считываем введенное кол-во дней\r\nconst inputYear = document.getElementById('inputYear');\r\n// Считываем кнопку расчитать\r\nconst buttonСalculateYear = document.getElementById('btnСalculationYear');\r\n// Считываем форму вывода строки\r\nconst formOutputsYear = document.getElementById('formOutputYear');\r\n\r\n// После расчета, если выполняется условие, включается Активный класс\r\n// Неактивный класс CSS (заглушка)\r\nconst closedClassYear = 'outputInactiveYear';\r\n// Активные классы CSS\r\n// Если выполняется Условие №1 и №2\r\nconst openClassYearYes = 'outputActiveYearYes';\r\nconst openClassYearNo = 'outputActiveYearNo';\r\n// Если выполняются остальные условие\r\nconst requirementYear = 'form-control__requirementOne';\r\nconst openClassErrorYear = 'outputActiveOne';\r\n// После срабатывания события событие blur\r\nconst formControlYear = 'form-control';\r\n\r\n// Функция определяет високосный год\r\nfunction defineALeapYear() {\r\n  let year = Number(inputYear.value);\r\n  let receivedDate = new Date(year, 2, 0);\r\n  // Запишем условие №1\r\n  if (\r\n    receivedDate.getDate() === 29 &&\r\n    inputYear.value.length <= 4 &&\r\n    inputYear.value.length !== 0\r\n  ) {\r\n    formOutputsYear.setAttribute('class', openClassYearYes);\r\n    formOutputsYear.innerHTML = `Високосный`;\r\n    // Запишем условие №2\r\n  } else if (\r\n    receivedDate.getDate() !== 29 &&\r\n    inputYear.value.length <= 4 &&\r\n    inputYear.value.length !== 0\r\n  ) {\r\n    formOutputsYear.setAttribute('class', openClassYearNo);\r\n    formOutputsYear.innerHTML = `НЕвисокосный`;\r\n    // Запишем условие №3\r\n  } else if (inputYear.value.length > 4) {\r\n    formOutputsYear.setAttribute('class', openClassErrorYear);\r\n    inputYear.setAttribute('class', requirementYear);\r\n    formOutputsYear.innerHTML = '↑ Число года введено некорректно ↑';\r\n    // Остальные условия\r\n  } else {\r\n    formOutputsYear.setAttribute('class', openClassErrorYear);\r\n    inputYear.setAttribute('class', requirementYear);\r\n    formOutputsYear.innerHTML = '↑ Заполните поле ввода ↑';\r\n  }\r\n}\r\n\r\nbuttonСalculateYear.addEventListener('click', defineALeapYear);\r\n\r\n// Вешаем событие blur вызывается когда элемент теряет фокус.\r\nbuttonСalculateYear.addEventListener('blur', function () {\r\n  // setAttribute()Метод устанавливает новое значение для атрибута\r\n  formOutputsYear.setAttribute('class', closedClassYear);\r\n  inputYear.setAttribute('class', formControlYear);\r\n  inputYear.placeholder = 'гггг';\r\n});\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_5_dailyCalculatorPage/dailyCalculatorLeapYear.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/6_5_dailyCalculatorPage/dailyCalculatorLeapYear.js"]();
/******/ 	
/******/ })()
;