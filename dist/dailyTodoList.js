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

/***/ "./src/6_9_dailyTodoListPage/dailyTodoList.js":
/*!****************************************************!*\
  !*** ./src/6_9_dailyTodoListPage/dailyTodoList.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _dailyTodoList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyTodoList.css */ \"./src/6_9_dailyTodoListPage/dailyTodoList.css\");\n/* harmony import */ var _imgDailyTodoList_1_49octopus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgDailyTodoList/1.49octopus.svg */ \"./src/6_9_dailyTodoListPage/imgDailyTodoList/1.49octopus.svg\");\n/*активация строго режима*/\n\n\n// импортируем стили css\n\n\n// импортируем изображения\n\n\n/*______________Считываем элементы____________*/\n\n//___Считываем ввод рядом с кнопкой \"Добавить\"\nlet mainInput = document.querySelector('#main-input');\n// console.log(mainInput);\n//___Считываем кнопку \"Добавить\"\nlet mainButton = document.querySelector('#main-button');\n// console.log(mainButton);\n//___Считываем нумерованный список (тег <ol>)\nlet contentItems = document.querySelector('.content-items');\n// console.log(contentItems);\n\n/*___Объявляем переменную, которая в дальнейшем \r\nбудет хранить считываемые элементы списка li (тег <li>)*/\nlet listItemsLi;\n\n/*___Объявляем переменную, которая в дальнейшем \r\nбудет хранить считываемые элементы с классом close*/\nlet closeElem;\n\n/*______________Добавление нового элемента__________*/\n/*___функция добавляет новую заметку в нумерованный список\r\n (после введенной записи заметки в input, мы добавляем:\r\n  саму запись, элемент крестик, чтобы по нажатию на него, \r\n  мы могли удалить заметку)*/\nfunction addNewNoteElement() {\n  // Метод createElement позволяет создать новый элемент,\n  // передав в параметре имя тега.\n  let liElem = document.createElement('li');\n  console.log(liElem);\n  // для элемента <li> назначаем класс \"content-items__li\",\n  // который в дальнейшем будем стилизовать\n  // метод add объекта classList позволяет добавлять CSS классы элементу\n  liElem.classList.add('content-items__li');\n\n  // Метод createElement позволяет создать новый элемент,\n  // передав в параметре имя тега.\n  let spanElem = document.createElement('span');\n\n  // Создаёт новый текстовый узел с заданным текстом (x):\n  let crossElem = document.createTextNode('x');\n\n  // для элемента <span> назначаем класс \"close\",\n  // который в дальнейшем будем стилизовать\n  // Метод add объекта classList позволяет добавлять CSS классы элементу.\n  spanElem.classList.add('close');\n\n  /* Во внутрь тега <span> вставляем крестик (x).\r\n  Метод appendChild позволяет вставить в конец какого-либо другой элемент\r\n  Получим: <span class=\"close\">x;</span>___*/\n  spanElem.appendChild(crossElem);\n\n  // Эту запись будет добавляться в заметки\n  liElem.textContent = \"\".concat(mainInput.value);\n  // После добавление заметки, input очищаем\n  mainInput.value = '';\n\n  /* Во внутрь тега <li> вставляем тег <span>.\r\n  Метод appendChild позволяет вставить в конец какого-либо другой элемент\r\n  Получим: <li><span class=\"close\">x;</span></li>___*/\n  liElem.appendChild(spanElem);\n  /* Во внутрь тега <ol> вставляем тег <li>.\r\n  Метод appendChild позволяет вставить в конец какого-либо другой элемент\r\n  Получим: <ol><li><span class=\"close\">x;</span></li></ol>___*/\n  contentItems.appendChild(liElem);\n}\n\n/*______________Отметить заметку как сделано____________*/\n//___функция добавляет класс (заметка становится перечеркнутой)\nfunction markAsDone() {\n  // Метод add объекта classList позволяет добавлять CSS классы элементу.\n  if (this.classList.contains('done')) {\n    this.classList.remove('done');\n  } else {\n    this.classList.add('done');\n  }\n}\n\n/*______________Редактировать замету____________________*/\n// ___функция для редактирования заметки\nfunction editNote() {\n  // записываем строку без крайнего символа(в нашем случаи-'x')\n  let str = this.textContent.slice(0, this.textContent.length - 1);\n  /*так наша строка будет, при редактирование появляться в поле\r\n  input без крайнего символа 'x'; */\n  mainInput.value = str;\n}\n\n/*______________Удаление элемента_______________________*/\n//___функция удаляет заметку из нумерованного списка\nfunction deleteNoteElement() {\n  /*Своим результатом этот метод bind возвращает новую функцию, \r\n  внутри которой this будет иметь жестко заданное значение. */\n  // console.log('click close');\n  // метод remove позволяет удалить элемент.\n  this.remove();\n}\n\n/*______________Объединяющий все функции модуль_________*/\n\n// По нажатию на кнопку, выполняется операция добавления заметки,\n// после ее добавления, ее можно пометить как выполнена или отредактировать\nmainButton.addEventListener('click', function () {\n  // если в input есть символы, то заметка добавляется\n  if (mainInput.value.length > 0) {\n    // Вызываем функцию\n    addNewNoteElement();\n    /*считываем элементы списка li (тег <li>)\r\n    свойство children хранит в себе псевдомассив дочерних элементов */\n    listItemsLi = document.querySelector('.content-items').children;\n    // console.log(listItemsLi, 'listItemsLi');\n    // если длина элементов списка больше 0\n    if (listItemsLi.length > 0) {\n      //___считываемые элементы с классом close\n      closeElem = document.querySelectorAll('.close');\n      // console.log(closeElem);\n      // в цикле к каждому элементу списка получаем доступ\n      for (let i = 0; i < listItemsLi.length; i++) {\n        // нажатием на крестик удаляем заметку\n        // методом bind привязываем навсегда контекст к функции (deleteNoteElement)\n        closeElem[i].addEventListener('click', deleteNoteElement.bind(listItemsLi[i]));\n        // одинарным нажатием на текст заметки, мы отмечаем(зачеркиваем его)\n        listItemsLi[i].addEventListener('click', markAsDone);\n        // двойным нажатием на текст заметки, мы можем редактировать его\n        listItemsLi[i].addEventListener('dblclick', editNote);\n      }\n    }\n    // если в input нет символов, пустая заметка не добавляется\n  } else if (mainInput.value.length === 0) {\n    console.log('в поле для ввода записи нет');\n  }\n});\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_9_dailyTodoListPage/dailyTodoList.js?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_9_dailyTodoListPage/dailyTodoList.css":
/*!*****************************************************!*\
  !*** ./src/6_9_dailyTodoListPage/dailyTodoList.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_9_dailyTodoListPage/dailyTodoList.css?");

/***/ }),

/***/ "./src/6_9_dailyTodoListPage/imgDailyTodoList/1.49octopus.svg":
/*!********************************************************************!*\
  !*** ./src/6_9_dailyTodoListPage/imgDailyTodoList/1.49octopus.svg ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.49octopus.svg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_9_dailyTodoListPage/imgDailyTodoList/1.49octopus.svg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_9_dailyTodoListPage/dailyTodoList.js");
/******/ 	
/******/ })()
;