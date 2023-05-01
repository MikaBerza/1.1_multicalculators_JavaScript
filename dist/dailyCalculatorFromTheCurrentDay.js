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

/***/ "./src/6_5_dailyCalculatorPage/dailyCalculatorFromTheCurrentDay.js":
/*!*************************************************************************!*\
  !*** ./src/6_5_dailyCalculatorPage/dailyCalculatorFromTheCurrentDay.js ***!
  \*************************************************************************/
/***/ (function() {

eval("/*активация строго режима*/\n\n\n// \n// \n// \n\n// Считываем введенное кол-во дней\nconst inputDay = document.getElementById('inputDay');\n// Считываем кнопку рассчитать\nconst buttonСalculateDay = document.getElementById('btnСalculationDay');\n// Считываем форму вывода строки\nconst formOutputsDay = document.getElementById('formOutputDay');\n\n// После расчета, если выполняется условие, включается Активный класс\n// Неактивный класс CSS (заглушка)\nconst closedClassDay = 'outputInactiveDay';\n// Активные классы CSS\n// Если выполняется Условие №1\nconst openClassDay = 'outputActiveDay';\n// Если выполняется Условие №1.1 и №2\nconst requirementDay = 'form-control__requirementOne';\nconst openClassErrorDay = 'outputActiveOne';\n// После срабатывания события событие blur\nconst formControlDay = 'form-control';\n\n// Функция вычисляет количество дней с текущего дня\nfunction calculateTheNumberOfDaysFromTheCurrentDay() {\n  // Текущая общая дата\n  let currentTotalDate = new Date();\n  // Текущий год\n  let currentYear = currentTotalDate.getFullYear();\n  // Текущий месяц\n  let currentMonth = currentTotalDate.getMonth();\n  // Текущий день\n  let currentDay = currentTotalDate.getDate();\n  // Проверяем что приходит\n  // console.log(currentDay);\n  // Вводимое количество дней\n  let numberOfDaysEntered = Number(inputDay.value);\n  // Проверяем что приходит\n  // console.log(numberOfDaysEntered);\n  /*Сумма между текущим днем и вводимым числом (ставим знак \"+\", т.к. если будет знак \"-\"\r\n  и пользователь решит ввести число с знаком \"-\", то функция отработает не так как мы\r\n  планируем потому-что минус на минус даст плюс) */\n  let diff = currentDay + numberOfDaysEntered;\n  // Полученная дата\n  let receivedDate = new Date(currentYear, currentMonth, diff);\n  /*------------------------------------------------------------------------*/\n  // Массив дней недели\n  const arrayOfDaysOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];\n  // массив месяцев года\n  const arrayOfMonthsOfTheWeek = ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май.', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'];\n  /*------------------------------------------------------------------------*/\n  // Запишем условие №1\n  if (inputDay.value !== '' && inputDay.value.length <= 8) {\n    // setAttribute()Метод устанавливает новое значение для атрибута\n    formOutputsDay.setAttribute('class', openClassDay);\n    // Выводим дату словами\n    formOutputsDay.textContent = \"\".concat(arrayOfDaysOfTheWeek[receivedDate.getDay()], \", \").concat(receivedDate.getDate(), \" \").concat(arrayOfMonthsOfTheWeek[receivedDate.getMonth()], \" \").concat(receivedDate.getFullYear(), \"\\u0433.\");\n    // Запишем условие №1.1\n  } else if (inputDay.value.length >= 8) {\n    formOutputsDay.setAttribute('class', openClassErrorDay);\n    inputDay.setAttribute('class', requirementDay);\n    formOutputsDay.textContent = '↑ Число дней введено некорректно ↑';\n    // Запишем условие №2\n  } else {\n    formOutputsDay.setAttribute('class', openClassErrorDay);\n    inputDay.setAttribute('class', requirementDay);\n    formOutputsDay.textContent = '↑ Заполните поле ввода ↑';\n  }\n}\n\n// Вешаем событие на кнопку для вычисления \nbuttonСalculateDay.addEventListener('click', calculateTheNumberOfDaysFromTheCurrentDay);\n\n// Вешаем событие blur вызывается когда элемент теряет фокус\nbuttonСalculateDay.addEventListener('blur', function () {\n  // setAttribute()Метод устанавливает новое значение для атрибута\n  formOutputsDay.setAttribute('class', closedClassDay);\n  inputDay.setAttribute('class', formControlDay);\n});\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_5_dailyCalculatorPage/dailyCalculatorFromTheCurrentDay.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/6_5_dailyCalculatorPage/dailyCalculatorFromTheCurrentDay.js"]();
/******/ 	
/******/ })()
;