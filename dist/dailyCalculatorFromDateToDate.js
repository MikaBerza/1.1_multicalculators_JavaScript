/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/6_5_dailyCalculatorPage/dailyCalculatorFromDateToDate.js":
/*!**********************************************************************!*\
  !*** ./src/6_5_dailyCalculatorPage/dailyCalculatorFromDateToDate.js ***!
  \**********************************************************************/
/***/ (function() {

eval("// 'use strict';  отключил строгий режим по требованию eslint\n\n// Считываем дату 'С которой рассчитать'\nconst dateInputOne = document.getElementById('inputDateWith');\n// Считываем дату 'До которой рассчитать'\nconst dateInputTwo = document.getElementById('inputDateBefore');\n// Считываем кнопку рассчитать\nconst buttonСalculate = document.getElementById('btnСalculation');\n// Считываем форму вывода строки\nconst formOutputs = document.getElementById('formOutput');\n// Считываем форму вывода картинок\nconst formOutputsImg = document.getElementById('formOutputImg');\n\n// После расчета, если выполняется условие, включается Активный класс\n// Неактивный класс CSS (заглушка)\nconst closedClass = 'outputInactive';\n// Активные классы CSS\n// Если выполняется Условие №1\nconst requirementOne = 'form-control__requirementOne';\nconst openClassOne = 'outputActiveOne';\n// Если выполняется Условие №2\nconst formControl = 'form-control';\nconst openClassTwo = 'outputActiveTwo';\nconst openClassTwoImg = 'outputActiveTwoImg';\n// Если выполняется Условие №3\nconst openClassThree = 'outputActiveThree';\nconst openClassThreeImg = 'outputActiveThreeImg';\n// Если выполняется Условие №4\nconst openClassFour = 'outputActiveFour';\n\n// Функция вычисляет разницу в днях между датами\nfunction calculateTheDifferenceBetweenDates() {\n  // Date.parse()Метод анализирует строковое представление даты\n  // и возвращает количество миллисекунд с 1 января 1970 года.\n  // В одном дне - 86400000мс\n  // Преобразуем к дням и записываем в переменные\n  const dateWith = Date.parse(dateInputOne.value) / 86400000;\n  // Проверяем что приходит\n  // console.log(dateWith);\n  const dateBefore = Date.parse(dateInputTwo.value) / 86400000;\n  // Проверяем что приходит\n  // console.log(dateBefore);\n  // Вычислим разницу дат\n  const diff = dateBefore - dateWith;\n  // Запишем условия\n  // Условие №1\n  if (Number.isNaN(diff)) {\n    formOutputs.setAttribute('class', openClassOne);\n    dateInputOne.setAttribute('class', requirementOne);\n    dateInputTwo.setAttribute('class', requirementOne);\n    formOutputs.innerHTML = '↑ Заполните поля ввода ↑';\n    // Условие №2\n  } else if (diff < 0) {\n    formOutputsImg.setAttribute('class', openClassTwoImg);\n    formOutputs.setAttribute('class', openClassTwo);\n    dateInputOne.setAttribute('class', formControl);\n    dateInputTwo.setAttribute('class', formControl);\n    // Math.abs()-Функция возвращает абсолютное значение числа(убераем знак минус).\n    formOutputs.innerHTML = \"\\u0411\\u044B\\u043B\\u043E \".concat(Math.abs(diff), \" \\u0434\\u043D. \\u043D\\u0430\\u0437\\u0430\\u0434\");\n    // Условие №3\n  } else if (diff > 0) {\n    formOutputsImg.setAttribute('class', openClassThreeImg);\n    formOutputs.setAttribute('class', openClassThree);\n    dateInputOne.setAttribute('class', formControl);\n    dateInputTwo.setAttribute('class', formControl);\n    formOutputs.innerHTML = \"\\u0411\\u0443\\u0434\\u0435\\u0442 \\u0447\\u0435\\u0440\\u0435\\u0437 \".concat(Math.abs(diff), \" \\u0434\\u043D.\");\n    // Условие №4\n  } else if (dateBefore === dateWith) {\n    formOutputs.setAttribute('class', openClassFour);\n    formOutputs.innerHTML = 'Время для счастья – сейчас!';\n  }\n}\n\n// Вешаем событие на кнопку\nbuttonСalculate.addEventListener('click', calculateTheDifferenceBetweenDates);\n\n// Вешаем событие blur вызывается когда элемент теряет фокус.\nbuttonСalculate.addEventListener('blur', () => {\n  // setAttribute()Метод устанавливает новое значение для атрибута\n  formOutputs.setAttribute('class', closedClass);\n  formOutputsImg.setAttribute('class', closedClass);\n  dateInputOne.setAttribute('class', formControl);\n  dateInputTwo.setAttribute('class', formControl);\n});\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_5_dailyCalculatorPage/dailyCalculatorFromDateToDate.js?");

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