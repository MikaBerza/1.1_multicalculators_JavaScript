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

/***/ "./src/6_9_dailyTodoListPage/dailyTodoList.css":
/*!*****************************************************!*\
  !*** ./src/6_9_dailyTodoListPage/dailyTodoList.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_9_dailyTodoListPage/dailyTodoList.css?");

/***/ }),

/***/ "./src/6_9_dailyTodoListPage/dailyTodoList.js":
/*!****************************************************!*\
  !*** ./src/6_9_dailyTodoListPage/dailyTodoList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _dailyTodoList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyTodoList.css */ \"./src/6_9_dailyTodoListPage/dailyTodoList.css\");\n/* harmony import */ var _imgDailyTodoList_1_49octopus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgDailyTodoList/1.49octopus.svg */ \"./src/6_9_dailyTodoListPage/imgDailyTodoList/1.49octopus.svg\");\n/*активация строго режима*/\r\n\r\n// импортируем стили css\r\n\r\n\r\n// импортируем изображения\r\n\r\n\r\n/*______________Считываем элементы____________*/\r\n\r\n//___Считываем ввод рядом с кнопкой \"Добавить\"\r\nlet mainInput = document.querySelector('#main-input');\r\n// console.log(mainInput);\r\n//___Считываем кнопку \"Добавить\"\r\nlet mainButton = document.querySelector('#main-button');\r\n// console.log(mainButton);\r\n//___Считываем нумерованный список (тег <ol>)\r\nlet contentItems = document.querySelector('.content-items');\r\n// console.log(contentItems);\r\n\r\n/*___Объявляем переменную, которая в дальнейшем \r\nбудет хранить считываемые элементы списка li (тег <li>)*/\r\nlet listItemsLi;\r\n\r\n/*___Объявляем переменную, которая в дальнейшем \r\nбудет хранить считываемые элементы с классом close*/\r\nlet closeElem;\r\n\r\n/*______________Добавление нового элемента__________*/\r\n/*___функция добавляет новую заметку в нумерованный список\r\n (после введенной записи заметки в input, мы добавляем:\r\n  саму запись, элемент крестик, чтобы по нажатию на него, \r\n  мы могли удалить заметку)*/\r\nfunction addNewNoteElement() {\r\n  // Метод createElement позволяет создать новый элемент,\r\n  // передав в параметре имя тега.\r\n  let liElem = document.createElement('li');\r\n  console.log(liElem);\r\n  // для элемента <li> назначаем класс \"content-items__li\",\r\n  // который в дальнейшем будем стилизовать\r\n  // метод add объекта classList позволяет добавлять CSS классы элементу\r\n  liElem.classList.add('content-items__li');\r\n\r\n  // Метод createElement позволяет создать новый элемент,\r\n  // передав в параметре имя тега.\r\n  let spanElem = document.createElement('span');\r\n\r\n  // Создаёт новый текстовый узел с заданным текстом (x):\r\n  let crossElem = document.createTextNode('x');\r\n\r\n  // для элемента <span> назначаем класс \"close\",\r\n  // который в дальнейшем будем стилизовать\r\n  // Метод add объекта classList позволяет добавлять CSS классы элементу.\r\n  spanElem.classList.add('close');\r\n\r\n  /* Во внутрь тега <span> вставляем крестик (x).\r\n  Метод appendChild позволяет вставить в конец какого-либо другой элемент\r\n  Получим: <span class=\"close\">x;</span>___*/\r\n  spanElem.appendChild(crossElem);\r\n\r\n  // Эту запись будет добавляться в заметки\r\n  liElem.textContent = `${mainInput.value}`;\r\n  // После добавление заметки, input очищаем\r\n  mainInput.value = '';\r\n\r\n  /* Во внутрь тега <li> вставляем тег <span>.\r\n  Метод appendChild позволяет вставить в конец какого-либо другой элемент\r\n  Получим: <li><span class=\"close\">x;</span></li>___*/\r\n  liElem.appendChild(spanElem);\r\n  /* Во внутрь тега <ol> вставляем тег <li>.\r\n  Метод appendChild позволяет вставить в конец какого-либо другой элемент\r\n  Получим: <ol><li><span class=\"close\">x;</span></li></ol>___*/\r\n  contentItems.appendChild(liElem);\r\n}\r\n\r\n/*______________Отметить заметку как сделано____________*/\r\n//___функция добавляет класс (заметка становится перечеркнутой)\r\nfunction markAsDone() {\r\n  // Метод add объекта classList позволяет добавлять CSS классы элементу.\r\n  if (this.classList.contains('done')) {\r\n    this.classList.remove('done');\r\n  } else {\r\n    this.classList.add('done');\r\n  }\r\n}\r\n\r\n/*______________Редактировать замету____________________*/\r\n// ___функция для редактирования заметки\r\nfunction editNote() {\r\n  // записываем строку без крайнего символа(в нашем случаи-'x')\r\n  let str = this.textContent.slice(0, this.textContent.length - 1);\r\n  /*так наша строка будет, при редактирование появляться в поле\r\n  input без крайнего символа 'x'; */\r\n  mainInput.value = str;\r\n}\r\n\r\n/*______________Удаление элемента_______________________*/\r\n//___функция удаляет заметку из нумерованного списка\r\nfunction deleteNoteElement() {\r\n  /*Своим результатом этот метод bind возвращает новую функцию, \r\n  внутри которой this будет иметь жестко заданное значение. */\r\n  // console.log('click close');\r\n  // метод remove позволяет удалить элемент.\r\n  this.remove();\r\n}\r\n\r\n/*______________Объединяющий все функции модуль_________*/\r\n\r\n// По нажатию на кнопку, выполняется операция добавления заметки,\r\n// после ее добавления, ее можно пометить как выполнена или отредактировать\r\nmainButton.addEventListener('click', function () {\r\n  // если в input есть символы, то заметка добавляется\r\n  if (mainInput.value.length > 0) {\r\n    // Вызываем функцию\r\n    addNewNoteElement();\r\n    /*считываем элементы списка li (тег <li>)\r\n    свойство children хранит в себе псевдомассив дочерних элементов */\r\n    listItemsLi = document.querySelector('.content-items').children;\r\n    // console.log(listItemsLi, 'listItemsLi');\r\n    // если длина элементов списка больше 0\r\n    if (listItemsLi.length > 0) {\r\n      //___считываемые элементы с классом close\r\n      closeElem = document.querySelectorAll('.close');\r\n      // console.log(closeElem);\r\n      // в цикле к каждому элементу списка получаем доступ\r\n      for (let i = 0; i < listItemsLi.length; i++) {\r\n        // нажатием на крестик удаляем заметку\r\n        // методом bind привязываем навсегда контекст к функции (deleteNoteElement)\r\n        closeElem[i].addEventListener(\r\n          'click',\r\n          deleteNoteElement.bind(listItemsLi[i])\r\n        );\r\n        // одинарным нажатием на текст заметки, мы отмечаем(зачеркиваем его)\r\n        listItemsLi[i].addEventListener('click', markAsDone);\r\n        // двойным нажатием на текст заметки, мы можем редактировать его\r\n        listItemsLi[i].addEventListener('dblclick', editNote);\r\n      }\r\n    }\r\n    // если в input нет символов, пустая заметка не добавляется\r\n  } else if (mainInput.value.length === 0) {\r\n    console.log('в поле для ввода записи нет');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_9_dailyTodoListPage/dailyTodoList.js?");

/***/ }),

/***/ "./src/6_9_dailyTodoListPage/imgDailyTodoList/1.49octopus.svg":
/*!********************************************************************!*\
  !*** ./src/6_9_dailyTodoListPage/imgDailyTodoList/1.49octopus.svg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_9_dailyTodoListPage/dailyTodoList.js");
/******/ 	
/******/ })()
;