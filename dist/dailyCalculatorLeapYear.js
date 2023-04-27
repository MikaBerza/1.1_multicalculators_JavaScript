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

/***/ "./src/6_5_dailyCalculatorPage/dailyCalculatorLeapYear.js":
/*!****************************************************************!*\
  !*** ./src/6_5_dailyCalculatorPage/dailyCalculatorLeapYear.js ***!
  \****************************************************************/
/***/ (function() {

eval("/*активация строго режима*/\n\n\n// Считываем введенное кол-во дней\nconst inputYear = document.getElementById('inputYear');\n// Считываем кнопку расчитать\nconst buttonСalculateYear = document.getElementById('btnСalculationYear');\n// Считываем форму вывода строки\nconst formOutputsYear = document.getElementById('formOutputYear');\n\n// После расчета, если выполняется условие, включается Активный класс\n// Неактивный класс CSS (заглушка)\nconst closedClassYear = 'outputInactiveYear';\n// Активные классы CSS\n// Если выполняется Условие №1 и №2\nconst openClassYearYes = 'outputActiveYearYes';\nconst openClassYearNo = 'outputActiveYearNo';\n// Если выполняются остальные условие\nconst requirementYear = 'form-control__requirementOne';\nconst openClassErrorYear = 'outputActiveOne';\n// После срабатывания события событие blur\nconst formControlYear = 'form-control';\n\n// Функция определяет високосный год\nfunction defineALeapYear() {\n  let year = Number(inputYear.value);\n  let receivedDate = new Date(year, 2, 0);\n  // Запишем условие №1\n  if (receivedDate.getDate() === 29 && inputYear.value.length <= 4 && inputYear.value.length !== 0) {\n    formOutputsYear.setAttribute('class', openClassYearYes);\n    formOutputsYear.innerHTML = \"\\u0412\\u0438\\u0441\\u043E\\u043A\\u043E\\u0441\\u043D\\u044B\\u0439\";\n    // Запишем условие №2\n  } else if (receivedDate.getDate() !== 29 && inputYear.value.length <= 4 && inputYear.value.length !== 0) {\n    formOutputsYear.setAttribute('class', openClassYearNo);\n    formOutputsYear.innerHTML = \"\\u041D\\u0415\\u0432\\u0438\\u0441\\u043E\\u043A\\u043E\\u0441\\u043D\\u044B\\u0439\";\n    // Запишем условие №3\n  } else if (inputYear.value.length > 4) {\n    formOutputsYear.setAttribute('class', openClassErrorYear);\n    inputYear.setAttribute('class', requirementYear);\n    formOutputsYear.innerHTML = '↑ Число года введено некорректно ↑';\n    // Остальные условия\n  } else {\n    formOutputsYear.setAttribute('class', openClassErrorYear);\n    inputYear.setAttribute('class', requirementYear);\n    formOutputsYear.innerHTML = '↑ Заполните поле ввода ↑';\n  }\n}\nbuttonСalculateYear.addEventListener('click', defineALeapYear);\n\n// Вешаем событие blur вызывается когда элемент теряет фокус.\nbuttonСalculateYear.addEventListener('blur', function () {\n  // setAttribute()Метод устанавливает новое значение для атрибута\n  formOutputsYear.setAttribute('class', closedClassYear);\n  inputYear.setAttribute('class', formControlYear);\n  inputYear.placeholder = 'гггг';\n});\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_5_dailyCalculatorPage/dailyCalculatorLeapYear.js?");

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