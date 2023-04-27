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

/***/ "./src/6_12_informationIpPage/informationIp.js":
/*!*****************************************************!*\
  !*** ./src/6_12_informationIpPage/informationIp.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _informationIp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informationIp.css */ \"./src/6_12_informationIpPage/informationIp.css\");\n\n\n// импортируем стили css\n\n\nconst inpCurrent = document.querySelector('.input-currentID');\nconst btnCurrent = document.querySelector('.btn-currentID');\nconst inpData = document.querySelector('.input-dataID');\nconst btnData = document.querySelector('.btn-dataID');\nconst arrTableName = document.querySelectorAll('.content__table-name');\nconst arrTableMeaning = document.querySelectorAll('.content__table-meaning');\nconst arrTableNameError = document.querySelectorAll('.content__table-name-error');\nconst arrTableMeaningError = document.querySelectorAll('.content__table-meaning-error');\n\n// API для получения своего IP\nconst url_IP = 'https://api.ipify.org?format=json';\n// API для получения информации об IP (вместо-(161.185.160.93) подставить свой/чужой IP)\nconst url_data_IP = \"http://ip-api.com/json/161.185.160.93\";\n\n/*Глобальный fetch()метод запускает процесс извлечения ресурса из сети, \r\nвозвращая обещание (promise), которое выполняется, как только ответ \r\nстановится доступным. */\n\n/*async - У этого слова один простой смысл: эта функция всегда возвращает промис. \r\nЗначения других типов оборачиваются в завершившийся успешно \r\nпромис автоматически.*/\n\n/*await - ключевое слово  заставит интерпретатор JavaScript ждать до тех пор, пока \r\nпромис справа от await не выполнится. После чего оно вернёт его результат, \r\nи выполнение кода продолжится. */\n\n// async await - асинхронное ожидание\n\n// Функция для получения текущего IP адреса\nasync function getCurrentIPAddress(urlIP) {\n  try {\n    // метод fetch возвращая обещание (promise)\n    // ответ от сервера c текущим IP адресом\n    const responseWithTheCurrentIP = await fetch(urlIP);\n    // response.json() – декодирует ответ в формате JSON\n    // тело ответа от сервера c текущим IP адресом\n    const responseBodyCurrentIP = await responseWithTheCurrentIP.json();\n    return responseBodyCurrentIP;\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n// Функция для получения данных IP-адреса\nasync function getDataIP(ip) {\n  try {\n    // метод fetch возвращая обещание (promise)\n    // ответ от сервера c текущими данными по IP-адресу\n    const responseWithCurrentIPData = await fetch(\"http://ip-api.com/json/\".concat(ip));\n    // response.json() – декодирует ответ в формате JSON\n    // тело ответа от сервера c текущими данными по IP-адресу\n    const responseBodyCurrentIPData = responseWithCurrentIPData.json();\n    // console.log(responseBodyCurrentIPData);\n    return responseBodyCurrentIPData;\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n// Функция проверяет код ответа\nfunction checkTheResponseCode(status) {\n  let responseCode;\n  if (status >= 100 && status <= 103) {\n    responseCode = \"\\u043A\\u043E\\u0434 \\u043E\\u0442\\u0432\\u0435\\u0442\\u0430 \".concat(status, \" - (\\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u044B\\u0439)\");\n    // console.log(`код ответа ${status} - (информационный)`);\n  }\n\n  if (status >= 200 && status <= 226) {\n    responseCode = \"\\u043A\\u043E\\u0434 \\u043E\\u0442\\u0432\\u0435\\u0442\\u0430 \".concat(status, \" - (\\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E)\");\n    // console.log(`код ответа ${status} - (успешно)`);\n  }\n\n  if (status >= 400 && status <= 499) {\n    responseCode = \"\\u043A\\u043E\\u0434 \\u043E\\u0442\\u0432\\u0435\\u0442\\u0430 \".concat(status, \" - (\\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043A\\u043B\\u0438\\u0435\\u043D\\u0442\\u0430)\");\n    console.log(\"\\u043A\\u043E\\u0434 \\u043E\\u0442\\u0432\\u0435\\u0442\\u0430 \".concat(status, \" - (\\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043A\\u043B\\u0438\\u0435\\u043D\\u0442\\u0430)\"));\n  }\n  if (status >= 500 && status <= 526) {\n    responseCode = \"\\u043A\\u043E\\u0434 \\u043E\\u0442\\u0432\\u0435\\u0442\\u0430 \".concat(status, \" - (\\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u0430)\");\n    // console.log(`код ответа ${status} - (ошибка сервера)`);\n  }\n\n  return responseCode;\n}\n\n// Функция заполняет пустыми ячейками таблицу\nfunction fillTheTableWithEmptyCells(arrOfCells1, arrOfCells2) {\n  for (let i = 0; i < arrOfCells1.length; i++) {\n    arrOfCells1[i].textContent = '';\n    arrOfCells2[i].textContent = '';\n  }\n}\n\n// Функция выводит ответ от сервера в таблицу (таблица БЕЗ ОШИБОК)\nfunction outputTheTableWithoutErrors(arrKeys, arrValues) {\n  if (arrKeys.length === arrValues.length && arrKeys.length !== 2) {\n    // Очищаем ячейки (таблица С ОШИБКАМИ)\n    fillTheTableWithEmptyCells(arrTableNameError, arrTableMeaningError);\n    // Заполняем таблицу (таблица БЕЗ ОШИБОК)\n    for (let i = 0; i < arrKeys.length; i++) {\n      arrTableName[i].textContent = \"\".concat(arrKeys[i], \":\");\n      // console.log(arrTableName[i]);\n      arrTableMeaning[i].textContent = arrValues[i];\n    }\n  }\n}\n\n// Функция выводит ответ от сервера в таблицу (таблица С ОШИБКАМИ)\nfunction outputTheTableWithAnError(arrKeys, arrValues) {\n  if (arrKeys.length === 2) {\n    // Очищаем ячейки (таблица БЕЗ ОШИБОК)\n    fillTheTableWithEmptyCells(arrTableName, arrTableMeaning);\n    // Заполняем таблицу (таблица С ОШИБКАМИ)\n    arrTableNameError[0].textContent = \"\".concat(arrKeys[0], \" : \");\n    arrTableNameError[1].textContent = \"\".concat(arrKeys[1], \" : \");\n    arrTableMeaningError[0].textContent = checkTheResponseCode(arrValues[0]);\n    let textError = \"\".concat(arrValues[1].title, \". \").concat(arrValues[1].message, \".\");\n    arrTableMeaningError[1].textContent = textError;\n  }\n}\ngetCurrentIPAddress(url_IP).then(function (ipAddress) {\n  console.log(ipAddress.ip);\n  // по клику вывожу в инпут текущий IP-адрес\n  btnCurrent.addEventListener('click', function () {\n    inpCurrent.value = ipAddress.ip;\n  });\n});\nbtnData.addEventListener('click', function () {\n  getDataIP(inpData.value).then(function (ipData) {\n    // массив с ключами объекта\n    let arrKeysIpData = Object.keys(ipData);\n    // массив с значениями объекта\n    let arrValueIpData = Object.values(ipData);\n\n    // Функция выводит ответ от сервера в таблицу (таблица БЕЗ ОШИБОК)\n    outputTheTableWithoutErrors(arrKeysIpData, arrValueIpData);\n    // Функция выводит ответ от сервера в таблицу (таблица С ОШИБКАМИ)\n    outputTheTableWithAnError(arrKeysIpData, arrValueIpData);\n  });\n});\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_12_informationIpPage/informationIp.js?");

/***/ }),

/***/ "./src/6_12_informationIpPage/informationIp.css":
/*!******************************************************!*\
  !*** ./src/6_12_informationIpPage/informationIp.css ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_12_informationIpPage/informationIp.css?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_12_informationIpPage/informationIp.js");
/******/ 	
/******/ })()
;