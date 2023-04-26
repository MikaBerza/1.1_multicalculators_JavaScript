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

/***/ "./src/6_11_notepadPage/notepad.css":
/*!******************************************!*\
  !*** ./src/6_11_notepadPage/notepad.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_11_notepadPage/notepad.css?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_11_notepadPage/notepad.js":
/*!*****************************************!*\
  !*** ./src/6_11_notepadPage/notepad.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _notepad_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notepad.css */ \"./src/6_11_notepadPage/notepad.css\");\n/* harmony import */ var _imgNotepad_1_51bird_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgNotepad/1.51bird.svg */ \"./src/6_11_notepadPage/imgNotepad/1.51bird.svg\");\n/*активация строго режима*/\r\n\r\n// импортируем стили css\r\n\r\n\r\n// импортируем изображения\r\n\r\n\r\n//___Считываем textarea для записи/редактирования\r\nlet mainTextarea = document.querySelector('.main__textarea');\r\n//___Считываем button для добавления записи\r\nlet mainBtn = document.querySelector('.main__button');\r\n//___Считываем маркированный список ul\r\nlet elementUl = document.querySelector('.main__numbered-list');\r\n//___Считываем input для поиска\r\nlet inpSearchElem = document.querySelector('.main__input-search');\r\n//___Считываем meter для отображения индикатора выполненных задач\r\nlet mainIndicator = document.querySelector('.main__counter-indicator');\r\n//___Считываем элемент select*/\r\nlet selectElem = document.querySelector('.main__filtering-select');\r\n\r\n//___Массив с элементами списка\r\nlet arrayListItems = [];\r\n// Переменная состояния, для манипулирования функцией редактирования (editNote)\r\nlet condition;\r\n\r\n/*Объявляем переменную, которая будет хранить\r\nдату в формате (дд/мм/гг, чч.мм) и перезаписываться*/\r\nlet recordingDate;\r\n/*Объявляем переменную, которая будет хранить \r\nHTMLCollection(массивоподобная коллекция) из элементов списка li*/\r\nlet collectionLi;\r\n/*Объявляем переменную, которая будет хранить \r\nHTMLCollection(массивоподобная коллекция) из элементов span\r\nc классом (main__list-item-text)*/\r\nlet collectionText;\r\n/*Объявляем переменную, которая будет хранить \r\nHTMLCollection(массивоподобная коллекция) из элементов input\r\nc классом (main__list-item-checkbox)*/\r\nlet collectionCheckbox;\r\n/*Объявляем переменную, которая будет хранить \r\nHTMLCollection(массивоподобная коллекция) из элементов span\r\nc классом (main__list-item-close)*/\r\nlet collectionClose;\r\n\r\n/*______________Проверка записей на повторение____________________________*/\r\n/*___функция проверяет на повторение, введенную запись в textarea с уже \r\n  существующими записями в блокноте*/\r\nfunction checkEntriesForRepetition() {\r\n  // Метод includes проверяет наличие элемента в массиве.\r\n  // true - элемент есть\r\n  // false - элемента нет\r\n  let result = arrayListItems.includes(mainTextarea.value.trim());\r\n  if (result === false) {\r\n    arrayListItems.push(mainTextarea.value.trim());\r\n  } else {\r\n    console.log('Элемент уже существует в списке');\r\n  }\r\n  return result;\r\n}\r\n\r\n/*______________Добавление нового элемента________________________________*/\r\n/*___функция добавляет новую запись в нумерованный список*/\r\nfunction addNewElementList() {\r\n  // Метод createElement позволяет создать новый элемент,\r\n  // передав в параметре имя тега.\r\n  let liElem = document.createElement('li');\r\n  // для элемента <li> назначаем класс \"main__list-item\",\r\n  // который в дальнейшем будем стилизовать\r\n  // метод add объекта classList позволяет добавлять CSS классы элементу\r\n  liElem.classList.add('main__list-item');\r\n\r\n  // Метод createElement позволяет создать новый элемент,\r\n  // передав в параметре имя тега\r\n  let divElem1 = document.createElement('div');\r\n  let spanElem1 = document.createElement('span');\r\n  let inputElem1 = document.createElement('input');\r\n\r\n  let divElem2 = document.createElement('div');\r\n  let spanElem2 = document.createElement('span');\r\n  let spanElem3 = document.createElement('span');\r\n\r\n  // дата записи\r\n  recordingDate = new Date(Date.now()).toLocaleDateString('en-GB', {\r\n    hour: '2-digit',\r\n    minute: '2-digit',\r\n    day: '2-digit',\r\n    month: '2-digit',\r\n    year: '2-digit',\r\n  });\r\n  // Создаёт новый текстовый узел с заданным текстом:\r\n  let dateElem1 = document.createTextNode(recordingDate);\r\n  // Создаёт новый текстовый узел с заданным текстом:\r\n  let crossElem2 = document.createTextNode('x');\r\n\r\n  /*для элементов назначаем классы\r\n  Метод add объекта classList позволяет добавлять CSS классы элементу. */\r\n  divElem1.classList.add('main__list-item-block1');\r\n  spanElem1.classList.add('main__list-item-text');\r\n  inputElem1.classList.add('main__list-item-checkbox');\r\n  //\r\n  divElem2.classList.add('main__list-item-block2');\r\n  spanElem2.classList.add('main__list-item-date');\r\n  spanElem3.classList.add('main__list-item-close');\r\n\r\n  // добавляем атрибут для тега <input>\r\n  inputElem1.setAttribute('type', 'checkbox');\r\n\r\n  /* Во внутрь тега <div> вставляем заданный текст.\r\n      Метод appendChild позволяет вставить в конец какого-либо другой элемент*/\r\n  divElem1.appendChild(spanElem1);\r\n  divElem1.appendChild(inputElem1);\r\n\r\n  /* Во внутрь тега <div> вставляем заданный текст.\r\n      Метод appendChild позволяет вставить в конец какого-либо другой элемент*/\r\n  divElem2.appendChild(spanElem2);\r\n  divElem2.appendChild(spanElem3);\r\n  /* Во внутрь тега <span> вставляем заданный текст.\r\n      Метод appendChild позволяет вставить в конец какого-либо другой элемент*/\r\n  spanElem2.appendChild(dateElem1);\r\n  spanElem3.appendChild(crossElem2);\r\n\r\n  // Эта запись будет добавляться\r\n  spanElem1.textContent = `${mainTextarea.value}`;\r\n  // После добавление записи, input очищаем\r\n  mainTextarea.value = '';\r\n\r\n  // Во внутрь тега <li> вставляем тег <span>\r\n  liElem.appendChild(divElem1);\r\n  liElem.appendChild(divElem2);\r\n  /* Во внутрь тега <ul> вставляем тег <li>.\r\n    Метод appendChild позволяет вставить в конец какого-либо другой элемент*/\r\n  elementUl.appendChild(liElem);\r\n}\r\n\r\n/*______________Поиск элементов___________________________________________*/\r\n//___функция поиска элементов в списке\r\nfunction search() {\r\n  // переводим вводимою строку в верхний регистр\r\n  let str = inpSearchElem.value.toUpperCase();\r\n  /*Берем HTMLCollection элементов li списка ul, проходим по ним циклом, сравнивая их с\r\n   переменной str предварительно переводя в верхний регистр.*/\r\n  for (let i = 0; i < collectionLi.length; i++) {\r\n    if (collectionText[i].textContent.toUpperCase().indexOf(str) > -1) {\r\n      /*Если совпадение в строке найдено, \r\n      показываем элемент.\r\n      Эквивалентно записи <li style=\"display: '' \"></li>*/\r\n      collectionLi[i].style.display = '';\r\n    } else {\r\n      /*Если совпадение в строке не найдено, \r\n      не показываем элемент.\r\n      Эквивалентно записи <li style=\"display: none\"></li>*/\r\n      collectionLi[i].style.display = 'none';\r\n    }\r\n  }\r\n}\r\n\r\n/*______________Фильтрация________________________________________________*/\r\n//___функция фильтрует записи в блокноте\r\nfunction getFilteredItems() {\r\n  if (selectElem.value === 'Все') {\r\n    // console.log('Все');\r\n    for (let i = 0; i < collectionCheckbox.length; i++) {\r\n      collectionLi[i].style.display = '';\r\n    }\r\n  }\r\n  if (selectElem.value === 'Выполненные') {\r\n    // console.log('Выполненные');\r\n    for (let i = 0; i < collectionCheckbox.length; i++) {\r\n      if (collectionCheckbox[i].checked === true) {\r\n        collectionLi[i].style.display = '';\r\n      } else if (collectionCheckbox[i].checked === false) {\r\n        collectionLi[i].style.display = 'none';\r\n      }\r\n    }\r\n  }\r\n  if (selectElem.value === 'Невыполненные') {\r\n    // console.log('Невыполненные');\r\n    for (let i = 0; i < collectionCheckbox.length; i++) {\r\n      if (collectionCheckbox[i].checked === false) {\r\n        collectionLi[i].style.display = '';\r\n      } else if (collectionCheckbox[i].checked === true) {\r\n        collectionLi[i].style.display = 'none';\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/*______________Счетчик выполненных/НЕвыполненных задач__________________*/\r\n//___функция вычисляет количество выполненных и невыполненных задач\r\nfunction calcCompletedAndUnfulfilledTasks() {\r\n  //___Считываем элемент <span> (выполненные задачи)\r\n  let completedTasks = document.querySelector('.main__counter-text-done');\r\n  //___Считываем элемент <span> (НЕвыполненные задачи)\r\n  let unfulfilledTasks = document.querySelector('.main__counter-text-notDone');\r\n  // переменные (счетчики выполненных/невыполненных задач)\r\n  let counterCompletedTasks = 0;\r\n  let counterUnfulfilledTasks = 0;\r\n\r\n  for (let elem of collectionCheckbox) {\r\n    elem.checked ? counterCompletedTasks++ : counterUnfulfilledTasks++;\r\n  }\r\n  completedTasks.textContent = `выполненные - ${counterCompletedTasks}`;\r\n  unfulfilledTasks.textContent = `невыполненные  - ${counterUnfulfilledTasks}`;\r\n\r\n  // константы с процентами\r\n  const twentyPercent = 0.2;\r\n  const eightyPercent = 0.8;\r\n  const ninetyPercent = 0.9;\r\n\r\n  // Индикация выполненных задач\r\n  mainIndicator.value = counterCompletedTasks;\r\n  mainIndicator.low = (collectionCheckbox.length * twentyPercent).toFixed(2);\r\n  mainIndicator.high = (collectionCheckbox.length * eightyPercent).toFixed(2);\r\n  mainIndicator.max = collectionCheckbox.length;\r\n  mainIndicator.optimum = (collectionCheckbox.length * ninetyPercent).toFixed(2);\r\n\r\n  /*запускаем фильтрующую функцию, чтобы при установки/снятии флажка,\r\n  запись в блокноте моментально отфильтровывалась, а не ждала, пока\r\n  сделают клик по 'элементу (select)*/\r\n  getFilteredItems();\r\n}\r\n\r\n/*______________Удаление записи___________________________________________*/\r\n//___функция удаляет запись из списка\r\nfunction deleteNoteElement() {\r\n  /*Своим результатом метод bind возвращает новую функцию, \r\n    внутри которой this будет иметь жестко заданное значение. \r\n    Объект this указывает на элемент, в котором произошло событие.\r\n    Метод remove позволяет удалить элемент.*/\r\n  this.remove();\r\n\r\n  // пересчитываем выполненные/невыполненные задачи\r\n  calcCompletedAndUnfulfilledTasks();\r\n\r\n  // переменная содержит элементы списка с классом (main__list-item-text)\r\n  /*Свойство firstElementChild содержит первый дочерний элемент. \r\n  Дочерними элементами считаются все теги, которые непосредственно расположены внутри блока.*/\r\n  let listItem = this.firstElementChild.firstElementChild.textContent;\r\n  // удаление элемента из массива (arrayListItems)\r\n  for (let i = 0; i < arrayListItems.length; i++) {\r\n    if (listItem === arrayListItems[i]) {\r\n      arrayListItems.splice(i, 1);\r\n    }\r\n  }\r\n}\r\n\r\n/*______________Редактирование записи_____________________________________*/\r\n//___функция изменения состояния, если активна кнопка Добавить\r\nfunction changingStateAddButton() {\r\n  // меняем название кнопки\r\n  mainBtn.textContent = 'Добавить';\r\n  // меняем состояние\r\n  condition = false;\r\n}\r\n\r\n//___функция изменения состояния, если активна кнопка Редактировать\r\nfunction changingStateEditButton() {\r\n  // меняем название кнопки\r\n  mainBtn.textContent = 'Редактировать';\r\n  // меняем состояние\r\n  condition = true;\r\n}\r\n\r\n//___функция для редактирования записи\r\nfunction editNote() {\r\n  if (condition === false) {\r\n    // после dblclick по редактируемому элементу, переходим в поле textarea\r\n    mainTextarea.value = this.firstElementChild.firstElementChild.textContent;\r\n    // Вызываем функцию изменения состояния, для кнопки Редактировать\r\n    changingStateEditButton();\r\n\r\n    /*======================================================================\r\n    КОД дублируется из функции deleteNoteElement(), попробовать сделать так,\r\n    чтобы он не дублировался, а переиспользовался в этих функциях!!!\r\n    ======================================================================*/\r\n    this.remove();\r\n    calcCompletedAndUnfulfilledTasks();\r\n    let listItem = this.firstElementChild.firstElementChild.textContent;\r\n    for (let i = 0; i < arrayListItems.length; i++) {\r\n      if (listItem === arrayListItems[i]) {\r\n        arrayListItems.splice(i, 1);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n//___функция запускает считывание элементов с заданными классами\r\nfunction startReadingElements() {\r\n  //___считываемые элементы с классом main__list-item-text\r\n  collectionText = document.getElementsByClassName('main__list-item-text');\r\n  //___считываем элементы с классом main__list - item\r\n  collectionLi = document.getElementsByClassName('main__list-item');\r\n  //___считываем элементы с классом main__list-item-checkbox\r\n  collectionCheckbox = document.getElementsByClassName(\r\n    'main__list-item-checkbox'\r\n  );\r\n  //___считываемые элементы с классом main__list-item-close\r\n  collectionClose = document.getElementsByClassName('main__list-item-close');\r\n}\r\n\r\n/*______________Объединяющее все функции событие___________________________*/\r\n// Отслеживаем событие click при нажатии на кнопку\r\nmainBtn.addEventListener('click', function () {\r\n  /*Проверяем записанную строку в поле textarea на:\r\n  -длина этой строки больше 0;\r\n  -наличие этой строки в уже существующем списке записей*/\r\n  if (\r\n    mainTextarea.value.trim().length > 0 &&\r\n    checkEntriesForRepetition() === false\r\n  ) {\r\n    // Вызываем функцию (добавление нового элемента списка)\r\n    addNewElementList();\r\n    // Вызываем функцию (считывание элементов с заданными классами)\r\n    startReadingElements();\r\n    // Вызываем функцию (Подсчет выполненных/НЕвыполненных задач)\r\n    calcCompletedAndUnfulfilledTasks();\r\n    // Вызываем функцию изменения состояния, для кнопки Добавить\r\n    changingStateAddButton();\r\n\r\n    /*В цикле мы получаем доступ к каждому элементу списка,\r\n  а функция будет вызываться всякий раз, когда указанное событие доставляется \r\n  целевому объекту*/\r\n    for (let i = 0; i < collectionLi.length; i++) {\r\n      //=====Редактирование записи\r\n      if (condition === false) {\r\n        collectionLi[i].addEventListener('dblclick', editNote);\r\n      }\r\n\r\n      //=====Установить/убрать флажок\r\n      collectionCheckbox[i].addEventListener(\r\n        'click',\r\n        calcCompletedAndUnfulfilledTasks\r\n      );\r\n\r\n      //=====Удалить запись из списка\r\n      // методом bind привязываем навсегда контекст к функции (deleteNoteElement)\r\n      collectionClose[i].addEventListener(\r\n        'click',\r\n        deleteNoteElement.bind(collectionLi[i])\r\n      );\r\n    }\r\n    //=====Фильтрация\r\n    selectElem.addEventListener('click', getFilteredItems);\r\n    //=====Поиск\r\n    inpSearchElem.addEventListener('keyup', search);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_11_notepadPage/notepad.js?");

/***/ }),

/***/ "./src/6_11_notepadPage/imgNotepad/1.51bird.svg":
/*!******************************************************!*\
  !*** ./src/6_11_notepadPage/imgNotepad/1.51bird.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_11_notepadPage/notepad.js");
/******/ 	
/******/ })()
;