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

/***/ "./src/6_5_dailyCalculatorPage/dailyCalculatorFromTheCurrentDay.js":
/*!*************************************************************************!*\
  !*** ./src/6_5_dailyCalculatorPage/dailyCalculatorFromTheCurrentDay.js ***!
  \*************************************************************************/
/***/ (() => {

eval("/*активация строго режима*/\r\n\r\n// \r\n// \r\n// \r\n\r\n// Считываем введенное кол-во дней\r\nconst inputDay = document.getElementById('inputDay');\r\n// Считываем кнопку рассчитать\r\nconst buttonСalculateDay = document.getElementById('btnСalculationDay');\r\n// Считываем форму вывода строки\r\nconst formOutputsDay = document.getElementById('formOutputDay');\r\n\r\n// После расчета, если выполняется условие, включается Активный класс\r\n// Неактивный класс CSS (заглушка)\r\nconst closedClassDay = 'outputInactiveDay';\r\n// Активные классы CSS\r\n// Если выполняется Условие №1\r\nconst openClassDay = 'outputActiveDay';\r\n// Если выполняется Условие №1.1 и №2\r\nconst requirementDay = 'form-control__requirementOne';\r\nconst openClassErrorDay = 'outputActiveOne';\r\n// После срабатывания события событие blur\r\nconst formControlDay = 'form-control';\r\n\r\n// Функция вычисляет количество дней с текущего дня\r\nfunction calculateTheNumberOfDaysFromTheCurrentDay() {\r\n  // Текущая общая дата\r\n  let currentTotalDate = new Date();\r\n  // Текущий год\r\n  let currentYear = currentTotalDate.getFullYear();\r\n  // Текущий месяц\r\n  let currentMonth = currentTotalDate.getMonth();\r\n  // Текущий день\r\n  let currentDay = currentTotalDate.getDate();\r\n  // Проверяем что приходит\r\n  // console.log(currentDay);\r\n  // Вводимое количество дней\r\n  let numberOfDaysEntered = Number(inputDay.value);\r\n  // Проверяем что приходит\r\n  // console.log(numberOfDaysEntered);\r\n  /*Сумма между текущим днем и вводимым числом (ставим знак \"+\", т.к. если будет знак \"-\"\r\n  и пользователь решит ввести число с знаком \"-\", то функция отработает не так как мы\r\n  планируем потому-что минус на минус даст плюс) */\r\n  let diff = currentDay + numberOfDaysEntered;\r\n  // Полученная дата\r\n  let receivedDate = new Date(currentYear, currentMonth, diff);\r\n  /*------------------------------------------------------------------------*/\r\n  // Массив дней недели\r\n  const arrayOfDaysOfTheWeek = [\r\n    'Воскресенье',\r\n    'Понедельник',\r\n    'Вторник',\r\n    'Среда',\r\n    'Четверг',\r\n    'Пятница',\r\n    'Суббота',\r\n  ];\r\n  // массив месяцев года\r\n  const arrayOfMonthsOfTheWeek = [\r\n    'Янв.',\r\n    'Фев.',\r\n    'Мар.',\r\n    'Апр.',\r\n    'Май.',\r\n    'Июн.',\r\n    'Июл.',\r\n    'Авг.',\r\n    'Сен.',\r\n    'Окт.',\r\n    'Ноя.',\r\n    'Дек.',\r\n  ];\r\n  /*------------------------------------------------------------------------*/\r\n  // Запишем условие №1\r\n  if (inputDay.value !== '' && inputDay.value.length <= 8) {\r\n    // setAttribute()Метод устанавливает новое значение для атрибута\r\n    formOutputsDay.setAttribute('class', openClassDay);\r\n    // Выводим дату словами\r\n    formOutputsDay.textContent = `${\r\n      arrayOfDaysOfTheWeek[receivedDate.getDay()]\r\n    }, ${receivedDate.getDate()} ${\r\n      arrayOfMonthsOfTheWeek[receivedDate.getMonth()]\r\n    } ${receivedDate.getFullYear()}г.`;\r\n    // Запишем условие №1.1\r\n  } else if (inputDay.value.length >= 8) {\r\n    formOutputsDay.setAttribute('class', openClassErrorDay);\r\n    inputDay.setAttribute('class', requirementDay);\r\n    formOutputsDay.textContent = '↑ Число дней введено некорректно ↑';\r\n    // Запишем условие №2\r\n  } else {\r\n    formOutputsDay.setAttribute('class', openClassErrorDay);\r\n    inputDay.setAttribute('class', requirementDay);\r\n    formOutputsDay.textContent = '↑ Заполните поле ввода ↑';\r\n  }\r\n}\r\n\r\n// Вешаем событие на кнопку для вычисления \r\nbuttonСalculateDay.addEventListener(\r\n  'click',\r\n  calculateTheNumberOfDaysFromTheCurrentDay\r\n);\r\n\r\n// Вешаем событие blur вызывается когда элемент теряет фокус\r\nbuttonСalculateDay.addEventListener('blur', function () {\r\n  // setAttribute()Метод устанавливает новое значение для атрибута\r\n  formOutputsDay.setAttribute('class', closedClassDay);\r\n  inputDay.setAttribute('class', formControlDay);\r\n});\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_5_dailyCalculatorPage/dailyCalculatorFromTheCurrentDay.js?");

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