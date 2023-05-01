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

/***/ "./src/6_11_notepadPage/notepad.js":
/*!*****************************************!*\
  !*** ./src/6_11_notepadPage/notepad.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _notepad_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notepad.css */ \"./src/6_11_notepadPage/notepad.css\");\n/* harmony import */ var _imgNotepad_1_51bird_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgNotepad/1.51bird.svg */ \"./src/6_11_notepadPage/imgNotepad/1.51bird.svg\");\n// 'use strict';  отключил строгий режим по требованию eslint\n// импортируем стили css\n\n\n// импортируем изображения\n// eslint-disable-next-line no-unused-vars\n\n\n// ___Считываем textarea для записи/редактирования\nconst mainTextarea = document.querySelector('.main__textarea');\n// ___Считываем button для добавления записи\nconst mainBtn = document.querySelector('.main__button');\n// ___Считываем маркированный список ul\nconst elementUl = document.querySelector('.main__numbered-list');\n// ___Считываем input для поиска\nconst inpSearchElem = document.querySelector('.main__input-search');\n// ___Считываем meter для отображения индикатора выполненных задач\nconst mainIndicator = document.querySelector('.main__counter-indicator');\n// ___Считываем элемент select*/\nconst selectElem = document.querySelector('.main__filtering-select');\n\n// ___Массив с элементами списка\nconst arrayListItems = [];\n// Переменная состояния, для манипулирования функцией редактирования (editNote)\nlet condition;\n\n/* Объявляем переменную, которая будет хранить\r\nдату в формате (дд/мм/гг, чч.мм) и перезаписываться */\nlet recordingDate;\n/* Объявляем переменную, которая будет хранить\r\nHTMLCollection(массивоподобная коллекция) из элементов списка li */\nlet collectionLi;\n/* Объявляем переменную, которая будет хранить\r\nHTMLCollection(массивоподобная коллекция) из элементов span\r\nc классом (main__list-item-text) */\nlet collectionText;\n/* Объявляем переменную, которая будет хранить\r\nHTMLCollection(массивоподобная коллекция) из элементов input\r\nc классом (main__list-item-checkbox) */\nlet collectionCheckbox;\n/* Объявляем переменную, которая будет хранить\r\nHTMLCollection(массивоподобная коллекция) из элементов span\r\nc классом (main__list-item-close) */\nlet collectionClose;\n\n/* ______________Проверка записей на повторение____________________________ */\n/* ___функция проверяет на повторение, введенную запись в textarea с уже\r\n  существующими записями в блокноте */\nfunction checkEntriesForRepetition() {\n  // Метод includes проверяет наличие элемента в массиве.\n  // true - элемент есть\n  // false - элемента нет\n  const result = arrayListItems.includes(mainTextarea.value.trim());\n  if (result === false) {\n    arrayListItems.push(mainTextarea.value.trim());\n  }\n  // else {\n  //   console.log('Элемент уже существует в списке');\n  // }\n  return result;\n}\n\n/* ______________Добавление нового элемента________________________________ */\n/* ___функция добавляет новую запись в нумерованный список */\nfunction addNewElementList() {\n  // Метод createElement позволяет создать новый элемент,\n  // передав в параметре имя тега.\n  const liElem = document.createElement('li');\n  // для элемента <li> назначаем класс \"main__list-item\",\n  // который в дальнейшем будем стилизовать\n  // метод add объекта classList позволяет добавлять CSS классы элементу\n  liElem.classList.add('main__list-item');\n\n  // Метод createElement позволяет создать новый элемент,\n  // передав в параметре имя тега\n  const divElem1 = document.createElement('div');\n  const spanElem1 = document.createElement('span');\n  const inputElem1 = document.createElement('input');\n  const divElem2 = document.createElement('div');\n  const spanElem2 = document.createElement('span');\n  const spanElem3 = document.createElement('span');\n\n  // дата записи\n  recordingDate = new Date(Date.now()).toLocaleDateString('en-GB', {\n    hour: '2-digit',\n    minute: '2-digit',\n    day: '2-digit',\n    month: '2-digit',\n    year: '2-digit'\n  });\n  // Создаёт новый текстовый узел с заданным текстом:\n  const dateElem1 = document.createTextNode(recordingDate);\n  // Создаёт новый текстовый узел с заданным текстом:\n  const crossElem2 = document.createTextNode('x');\n\n  /* для элементов назначаем классы\r\n  Метод add объекта classList позволяет добавлять CSS классы элементу */\n  divElem1.classList.add('main__list-item-block1');\n  spanElem1.classList.add('main__list-item-text');\n  inputElem1.classList.add('main__list-item-checkbox');\n  //\n  divElem2.classList.add('main__list-item-block2');\n  spanElem2.classList.add('main__list-item-date');\n  spanElem3.classList.add('main__list-item-close');\n\n  // добавляем атрибут для тега <input>\n  inputElem1.setAttribute('type', 'checkbox');\n\n  /* Во внутрь тега <div> вставляем заданный текст.\r\n      Метод appendChild позволяет вставить в конец какого-либо другой элемент */\n  divElem1.appendChild(spanElem1);\n  divElem1.appendChild(inputElem1);\n\n  /* Во внутрь тега <div> вставляем заданный текст.\r\n      Метод appendChild позволяет вставить в конец какого-либо другой элемент */\n  divElem2.appendChild(spanElem2);\n  divElem2.appendChild(spanElem3);\n  /* Во внутрь тега <span> вставляем заданный текст.\r\n      Метод appendChild позволяет вставить в конец какого-либо другой элемент */\n  spanElem2.appendChild(dateElem1);\n  spanElem3.appendChild(crossElem2);\n\n  // Эта запись будет добавляться\n  spanElem1.textContent = \"\".concat(mainTextarea.value);\n  // После добавление записи, input очищаем\n  mainTextarea.value = '';\n\n  // Во внутрь тега <li> вставляем тег <span>\n  liElem.appendChild(divElem1);\n  liElem.appendChild(divElem2);\n  /* Во внутрь тега <ul> вставляем тег <li>.\r\n    Метод appendChild позволяет вставить в конец какого-либо другой элемент */\n  elementUl.appendChild(liElem);\n}\n\n/* ______________Поиск элементов___________________________________________ */\n// ___функция поиска элементов в списке\nfunction search() {\n  // переводим вводимою строку в верхний регистр\n  const str = inpSearchElem.value.toUpperCase();\n  /* Берем HTMLCollection элементов li списка ul, проходим по ним циклом, сравнивая их с\r\n   переменной str предварительно переводя в верхний регистр */\n  for (let i = 0; i < collectionLi.length; i++) {\n    if (collectionText[i].textContent.toUpperCase().indexOf(str) > -1) {\n      /* Если совпадение в строке найдено,\r\n      показываем элемент.\r\n      Эквивалентно записи <li style=\"display: '' \"></li> */\n      collectionLi[i].style.display = '';\n    } else {\n      /* Если совпадение в строке не найдено,\r\n      не показываем элемент.\r\n      Эквивалентно записи <li style=\"display: none\"></li> */\n      collectionLi[i].style.display = 'none';\n    }\n  }\n}\n\n/* ______________Фильтрация________________________________________________ */\n// ___функция фильтрует записи в блокноте\nfunction getFilteredItems() {\n  if (selectElem.value === 'Все') {\n    // console.log('Все');\n    for (let i = 0; i < collectionCheckbox.length; i++) {\n      collectionLi[i].style.display = '';\n    }\n  }\n  if (selectElem.value === 'Выполненные') {\n    // console.log('Выполненные');\n    for (let i = 0; i < collectionCheckbox.length; i++) {\n      if (collectionCheckbox[i].checked === true) {\n        collectionLi[i].style.display = '';\n      } else if (collectionCheckbox[i].checked === false) {\n        collectionLi[i].style.display = 'none';\n      }\n    }\n  }\n  if (selectElem.value === 'Невыполненные') {\n    // console.log('Невыполненные');\n    for (let i = 0; i < collectionCheckbox.length; i++) {\n      if (collectionCheckbox[i].checked === false) {\n        collectionLi[i].style.display = '';\n      } else if (collectionCheckbox[i].checked === true) {\n        collectionLi[i].style.display = 'none';\n      }\n    }\n  }\n}\n\n/* ______________Счетчик выполненных/НЕвыполненных задач__________________ */\n// ___функция вычисляет количество выполненных и невыполненных задач\nfunction calcCompletedAndUnfulfilledTasks() {\n  // ___Считываем элемент <span> (выполненные задачи)\n  const completedTasks = document.querySelector('.main__counter-text-done');\n  // ___Считываем элемент <span> (НЕвыполненные задачи)\n  const unfulfilledTasks = document.querySelector('.main__counter-text-notDone');\n  // переменные (счетчики выполненных/невыполненных задач)\n  let counterCompletedTasks = 0;\n  let counterUnfulfilledTasks = 0;\n  for (let i = 0; i < collectionCheckbox.length; i++) {\n    if (collectionCheckbox[i].checked) {\n      counterCompletedTasks++;\n    } else {\n      counterUnfulfilledTasks++;\n    }\n  }\n  completedTasks.textContent = \"\\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435 - \".concat(counterCompletedTasks);\n  unfulfilledTasks.textContent = \"\\u043D\\u0435\\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435  - \".concat(counterUnfulfilledTasks);\n\n  // константы с процентами\n  const twentyPercent = 0.2;\n  const eightyPercent = 0.8;\n  const ninetyPercent = 0.9;\n\n  // Индикация выполненных задач\n  mainIndicator.value = counterCompletedTasks;\n  mainIndicator.low = (collectionCheckbox.length * twentyPercent).toFixed(2);\n  mainIndicator.high = (collectionCheckbox.length * eightyPercent).toFixed(2);\n  mainIndicator.max = collectionCheckbox.length;\n  mainIndicator.optimum = (collectionCheckbox.length * ninetyPercent).toFixed(2);\n\n  /* запускаем фильтрующую функцию, чтобы при установки/снятии флажка,\r\n  запись в блокноте моментально отфильтровывалась, а не ждала, пока\r\n  сделают клик по 'элементу (select) */\n  getFilteredItems();\n}\n\n/* ______________Удаление записи___________________________________________ */\n// ___функция удаляет запись из списка\nfunction deleteNoteElement() {\n  /* Своим результатом метод bind возвращает новую функцию,\r\n    внутри которой this будет иметь жестко заданное значение.\r\n    Объект this указывает на элемент, в котором произошло событие.\r\n    Метод remove позволяет удалить элемент */\n  this.remove();\n\n  // пересчитываем выполненные/невыполненные задачи\n  calcCompletedAndUnfulfilledTasks();\n\n  // переменная содержит элементы списка с классом (main__list-item-text)\n  /* Свойство firstElementChild содержит первый дочерний элемент.\r\n  Дочерними элементами считаются все теги, которые непосредственно расположены внутри блока */\n  const listItem = this.firstElementChild.firstElementChild.textContent;\n  // удаление элемента из массива (arrayListItems)\n  for (let i = 0; i < arrayListItems.length; i++) {\n    if (listItem === arrayListItems[i]) {\n      arrayListItems.splice(i, 1);\n    }\n  }\n}\n\n/* ______________Редактирование записи_____________________________________ */\n// ___функция изменения состояния, если активна кнопка Добавить\nfunction changingStateAddButton() {\n  // меняем название кнопки\n  mainBtn.textContent = 'Добавить';\n  // меняем состояние\n  condition = false;\n}\n\n// ___функция изменения состояния, если активна кнопка Редактировать\nfunction changingStateEditButton() {\n  // меняем название кнопки\n  mainBtn.textContent = 'Редактировать';\n  // меняем состояние\n  condition = true;\n}\n\n// ___функция для редактирования записи\nfunction editNote() {\n  if (condition === false) {\n    // после dblclick по редактируемому элементу, переходим в поле textarea\n    mainTextarea.value = this.firstElementChild.firstElementChild.textContent;\n    // Вызываем функцию изменения состояния, для кнопки Редактировать\n    changingStateEditButton();\n\n    /* ======================================================================\r\n    КОД дублируется из функции deleteNoteElement(), попробовать сделать так,\r\n    чтобы он не дублировался, а переиспользовался в этих функциях!!!\r\n    ====================================================================== */\n    this.remove();\n    calcCompletedAndUnfulfilledTasks();\n    const listItem = this.firstElementChild.firstElementChild.textContent;\n    for (let i = 0; i < arrayListItems.length; i++) {\n      if (listItem === arrayListItems[i]) {\n        arrayListItems.splice(i, 1);\n      }\n    }\n  }\n}\n\n// ___функция запускает считывание элементов с заданными классами\nfunction startReadingElements() {\n  // ___считываемые элементы с классом main__list-item-text\n  collectionText = document.getElementsByClassName('main__list-item-text');\n  // ___считываем элементы с классом main__list - item\n  collectionLi = document.getElementsByClassName('main__list-item');\n  // ___считываем элементы с классом main__list-item-checkbox\n  collectionCheckbox = document.getElementsByClassName('main__list-item-checkbox');\n  // ___считываемые элементы с классом main__list-item-close\n  collectionClose = document.getElementsByClassName('main__list-item-close');\n}\n\n/* ______________Объединяющее все функции событие___________________________ */\n// Отслеживаем событие click при нажатии на кнопку\nmainBtn.addEventListener('click', () => {\n  /* Проверяем записанную строку в поле textarea на:\r\n  -длина этой строки больше 0;\r\n  -наличие этой строки в уже существующем списке записей */\n  if (mainTextarea.value.trim().length > 0 && checkEntriesForRepetition() === false) {\n    // Вызываем функцию (добавление нового элемента списка)\n    addNewElementList();\n    // Вызываем функцию (считывание элементов с заданными классами)\n    startReadingElements();\n    // Вызываем функцию (Подсчет выполненных/НЕвыполненных задач)\n    calcCompletedAndUnfulfilledTasks();\n    // Вызываем функцию изменения состояния, для кнопки Добавить\n    changingStateAddButton();\n\n    /* В цикле мы получаем доступ к каждому элементу списка,\r\n    а функция будет вызываться всякий раз, когда указанное событие доставляется\r\n    целевому объекту */\n    for (let i = 0; i < collectionLi.length; i++) {\n      // =====Редактирование записи\n      if (condition === false) {\n        collectionLi[i].addEventListener('dblclick', editNote);\n      }\n\n      // =====Установить/убрать флажок\n      collectionCheckbox[i].addEventListener('click', calcCompletedAndUnfulfilledTasks);\n\n      // =====Удалить запись из списка\n      // методом bind привязываем навсегда контекст к функции (deleteNoteElement)\n      collectionClose[i].addEventListener('click', deleteNoteElement.bind(collectionLi[i]));\n    }\n    // =====Фильтрация\n    selectElem.addEventListener('click', getFilteredItems);\n    // =====Поиск\n    inpSearchElem.addEventListener('keyup', search);\n  }\n});\n\n// ------------------------------\n// самовызывающиеся функция\n// она регулирует установку фона\n(function setTemporaryBackground() {\n  const mainFlexContainer = document.querySelector('.main__flex-container');\n  // Метод createElement позволяет создать новый элемент, передав в параметре имя тега\n  const img = document.createElement('img');\n  img.src = mainFlexContainer.style.backgroundImage.slice(4, -1).replace(/\"/g, ''); // извлекаем URL из CSS\n  // пока изображения нет задаем цвет фона\n  mainFlexContainer.style.backgroundColor = '#e6eaaf';\n  /* Браузер позволяет отслеживать загрузку сторонних ресурсов: скриптов, ифреймов,\r\n  изображений и др. Для этого существуют два события:\r\n  load – успешная загрузка,\r\n  error – во время загрузки произошла ошибка */\n  img.onload = () => {\n    // когда изображение загружено убираем цвет фона\n    // и на этом месте появляется изображение\n    mainFlexContainer.style.backgroundColor = 'transparent';\n  };\n  img.onerror = () => {\n    // console.log('Ошибка загрузки изображения');\n    // если ошибка загрузки, задаем цвет фона\n    mainFlexContainer.style.backgroundColor = '#e6eaaf';\n  };\n})();\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_11_notepadPage/notepad.js?");

/***/ }),

/***/ "./src/6_11_notepadPage/notepad.css":
/*!******************************************!*\
  !*** ./src/6_11_notepadPage/notepad.css ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_11_notepadPage/notepad.css?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_11_notepadPage/imgNotepad/1.51bird.svg":
/*!******************************************************!*\
  !*** ./src/6_11_notepadPage/imgNotepad/1.51bird.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1.51bird.svg\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_11_notepadPage/imgNotepad/1.51bird.svg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_11_notepadPage/notepad.js");
/******/ 	
/******/ })()
;