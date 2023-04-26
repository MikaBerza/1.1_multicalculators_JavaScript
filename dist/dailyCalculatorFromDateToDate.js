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

/***/ "./src/6_5_dailyCalculatorPage/dailyCalculatorFromDateToDate.js":
/*!**********************************************************************!*\
  !*** ./src/6_5_dailyCalculatorPage/dailyCalculatorFromDateToDate.js ***!
  \**********************************************************************/
/***/ (() => {

eval("/*активация строго режима*/\r\n\r\n\r\n// Считываем дату 'С которой рассчитать'\r\nconst dateInputOne = document.getElementById('inputDateWith');\r\n// Считываем дату 'До которой рассчитать'\r\nconst dateInputTwo = document.getElementById('inputDateBefore');\r\n// Считываем кнопку рассчитать\r\nconst buttonСalculate = document.getElementById('btnСalculation');\r\n// Считываем форму вывода строки\r\nconst formOutputs = document.getElementById('formOutput');\r\n// Считываем форму вывода картинок\r\nconst formOutputsImg = document.getElementById('formOutputImg');\r\n\r\n// После расчета, если выполняется условие, включается Активный класс\r\n// Неактивный класс CSS (заглушка)\r\nconst closedClass = 'outputInactive';\r\n// Активные классы CSS\r\n// Если выполняется Условие №1\r\nconst requirementOne = 'form-control__requirementOne';\r\nconst openClassOne = 'outputActiveOne';\r\n// Если выполняется Условие №2\r\nconst formControl = 'form-control';\r\nconst openClassTwo = 'outputActiveTwo';\r\nconst openClassTwoImg = 'outputActiveTwoImg';\r\n// Если выполняется Условие №3\r\nconst openClassThree = 'outputActiveThree';\r\nconst openClassThreeImg = 'outputActiveThreeImg';\r\n// Если выполняется Условие №4\r\nconst openClassFour = 'outputActiveFour';\r\n\r\n// Функция вычисляет разницу в днях между датами\r\nfunction calculateTheDifferenceBetweenDates() {\r\n  // Date.parse()Метод анализирует строковое представление даты\r\n  // и возвращает количество миллисекунд с 1 января 1970 года.\r\n  // В одном дне - 86400000мс\r\n  // Преобразуем к дням и записываем в переменные\r\n  let dateWith = Date.parse(dateInputOne.value) / 86400000;\r\n  // Проверяем что приходит\r\n  // console.log(dateWith);\r\n  let dateBefore = Date.parse(dateInputTwo.value) / 86400000;\r\n  // Проверяем что приходит\r\n  // console.log(dateBefore);\r\n  // Вычислим разницу дат\r\n  let diff = dateBefore - dateWith;\r\n  // Запишем условия\r\n  // Условие №1\r\n  if (isNaN(diff)) {\r\n    formOutputs.setAttribute('class', openClassOne);\r\n    dateInputOne.setAttribute('class', requirementOne);\r\n    dateInputTwo.setAttribute('class', requirementOne);\r\n    formOutputs.innerHTML = '↑ Заполните поля ввода ↑';\r\n    // Условие №2\r\n  } else if (diff < 0) {\r\n    formOutputsImg.setAttribute('class', openClassTwoImg);\r\n    formOutputs.setAttribute('class', openClassTwo);\r\n    dateInputOne.setAttribute('class', formControl);\r\n    dateInputTwo.setAttribute('class', formControl);\r\n    // Math.abs()-Функция возвращает абсолютное значение числа(убераем знак минус).\r\n    formOutputs.innerHTML = `Было ${Math.abs(diff)} дн. назад`;\r\n    // Условие №3\r\n  } else if (diff > 0) {\r\n    formOutputsImg.setAttribute('class', openClassThreeImg);\r\n    formOutputs.setAttribute('class', openClassThree);\r\n    dateInputOne.setAttribute('class', formControl);\r\n    dateInputTwo.setAttribute('class', formControl);\r\n\r\n    formOutputs.innerHTML = `Будет через ${Math.abs(diff)} дн.`;\r\n    // Условие №4\r\n  } else if (dateBefore === dateWith) {\r\n    formOutputs.setAttribute('class', openClassFour);\r\n    formOutputs.innerHTML = `Время для счастья – сейчас!`;\r\n  }\r\n}\r\n\r\n// Вешаем событие на кнопку\r\nbuttonСalculate.addEventListener('click', calculateTheDifferenceBetweenDates);\r\n\r\n// Вешаем событие blur вызывается когда элемент теряет фокус.\r\nbuttonСalculate.addEventListener('blur', function () {\r\n  // setAttribute()Метод устанавливает новое значение для атрибута\r\n  formOutputs.setAttribute('class', closedClass);\r\n  formOutputsImg.setAttribute('class', closedClass);\r\n  dateInputOne.setAttribute('class', formControl);\r\n  dateInputTwo.setAttribute('class', formControl);\r\n});\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_5_dailyCalculatorPage/dailyCalculatorFromDateToDate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/6_5_dailyCalculatorPage/dailyCalculatorFromDateToDate.js"]();
/******/ 	
/******/ })()
;