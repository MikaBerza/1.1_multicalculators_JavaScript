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

/***/ "./src/6_12_informationIpPage/informationIp.css":
/*!******************************************************!*\
  !*** ./src/6_12_informationIpPage/informationIp.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_12_informationIpPage/informationIp.css?");

/***/ }),

/***/ "./src/6_13_globalFiles/headerAndFooterCustomStyle.css":
/*!*************************************************************!*\
  !*** ./src/6_13_globalFiles/headerAndFooterCustomStyle.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_13_globalFiles/headerAndFooterCustomStyle.css?");

/***/ }),

/***/ "./src/6_12_informationIpPage/informationIp.js":
/*!*****************************************************!*\
  !*** ./src/6_12_informationIpPage/informationIp.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_13_globalFiles_headerAndFooterCustomStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_13_globalFiles/headerAndFooterCustomStyle.css */ \"./src/6_13_globalFiles/headerAndFooterCustomStyle.css\");\n/* harmony import */ var _informationIp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informationIp.css */ \"./src/6_12_informationIpPage/informationIp.css\");\n\r\n// импортируем стили css\r\n\r\n\r\n\r\nconst inpCurrent = document.querySelector('.input-currentID');\r\nconst btnCurrent = document.querySelector('.btn-currentID');\r\n\r\nconst inpData = document.querySelector('.input-dataID');\r\nconst btnData = document.querySelector('.btn-dataID');\r\n\r\nconst arrTableName = document.querySelectorAll('.content__table-name');\r\nconst arrTableMeaning = document.querySelectorAll('.content__table-meaning');\r\n\r\nconst arrTableNameError = document.querySelectorAll(\r\n  '.content__table-name-error'\r\n);\r\nconst arrTableMeaningError = document.querySelectorAll(\r\n  '.content__table-meaning-error'\r\n);\r\n\r\n// API для получения своего IP\r\nconst url_IP = 'https://api.ipify.org?format=json';\r\n// API для получения информации об IP (вместо-(161.185.160.93) подставить свой/чужой IP)\r\nconst url_data_IP = `http://ip-api.com/json/161.185.160.93`;\r\n\r\n/*Глобальный fetch()метод запускает процесс извлечения ресурса из сети, \r\nвозвращая обещание (promise), которое выполняется, как только ответ \r\nстановится доступным. */\r\n\r\n/*async - У этого слова один простой смысл: эта функция всегда возвращает промис. \r\nЗначения других типов оборачиваются в завершившийся успешно \r\nпромис автоматически.*/\r\n\r\n/*await - ключевое слово  заставит интерпретатор JavaScript ждать до тех пор, пока \r\nпромис справа от await не выполнится. После чего оно вернёт его результат, \r\nи выполнение кода продолжится. */\r\n\r\n// async await - асинхронное ожидание\r\n\r\n// Функция для получения текущего IP адреса\r\nasync function getCurrentIPAddress(urlIP) {\r\n  try {\r\n    // метод fetch возвращая обещание (promise)\r\n    // ответ от сервера c текущим IP адресом\r\n    const responseWithTheCurrentIP = await fetch(urlIP);\r\n    // response.json() – декодирует ответ в формате JSON\r\n    // тело ответа от сервера c текущим IP адресом\r\n    const responseBodyCurrentIP = await responseWithTheCurrentIP.json();\r\n    return responseBodyCurrentIP;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\n// Функция для получения данных IP-адреса\r\nasync function getDataIP(ip) {\r\n  try {\r\n    // метод fetch возвращая обещание (promise)\r\n    // ответ от сервера c текущими данными по IP-адресу\r\n    const responseWithCurrentIPData = await fetch(\r\n      `http://ip-api.com/json/${ip}`\r\n    );\r\n    // response.json() – декодирует ответ в формате JSON\r\n    // тело ответа от сервера c текущими данными по IP-адресу\r\n    const responseBodyCurrentIPData = responseWithCurrentIPData.json();\r\n    // console.log(responseBodyCurrentIPData);\r\n    return responseBodyCurrentIPData;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\n// Функция проверяет код ответа\r\nfunction checkTheResponseCode(status) {\r\n  let responseCode;\r\n  if (status >= 100 && status <= 103) {\r\n    responseCode = `код ответа ${status} - (информационный)`;\r\n    // console.log(`код ответа ${status} - (информационный)`);\r\n  }\r\n  if (status >= 200 && status <= 226) {\r\n    responseCode = `код ответа ${status} - (успешно)`;\r\n    // console.log(`код ответа ${status} - (успешно)`);\r\n  }\r\n  if (status >= 400 && status <= 499) {\r\n    responseCode = `код ответа ${status} - (ошибка клиента)`;\r\n    console.log(`код ответа ${status} - (ошибка клиента)`);\r\n  }\r\n  if (status >= 500 && status <= 526) {\r\n    responseCode = `код ответа ${status} - (ошибка сервера)`;\r\n    // console.log(`код ответа ${status} - (ошибка сервера)`);\r\n  }\r\n  return responseCode;\r\n}\r\n\r\n// Функция заполняет пустыми ячейками таблицу\r\nfunction fillTheTableWithEmptyCells(arrOfCells1, arrOfCells2) {\r\n  for (let i = 0; i < arrOfCells1.length; i++) {\r\n    arrOfCells1[i].textContent = '';\r\n    arrOfCells2[i].textContent = '';\r\n  }\r\n}\r\n\r\n// Функция выводит ответ от сервера в таблицу (таблица БЕЗ ОШИБОК)\r\nfunction outputTheTableWithoutErrors(arrKeys, arrValues) {\r\n  if (arrKeys.length === arrValues.length && arrKeys.length !== 2) {\r\n    // Очищаем ячейки (таблица С ОШИБКАМИ)\r\n    fillTheTableWithEmptyCells(arrTableNameError, arrTableMeaningError);\r\n    // Заполняем таблицу (таблица БЕЗ ОШИБОК)\r\n    for (let i = 0; i < arrKeys.length; i++) {\r\n      arrTableName[i].textContent = `${arrKeys[i]}:`;\r\n      // console.log(arrTableName[i]);\r\n      arrTableMeaning[i].textContent = arrValues[i];\r\n    }\r\n  }\r\n}\r\n\r\n// Функция выводит ответ от сервера в таблицу (таблица С ОШИБКАМИ)\r\nfunction outputTheTableWithAnError(arrKeys, arrValues) {\r\n  if (arrKeys.length === 2) {\r\n    // Очищаем ячейки (таблица БЕЗ ОШИБОК)\r\n    fillTheTableWithEmptyCells(arrTableName, arrTableMeaning);\r\n    // Заполняем таблицу (таблица С ОШИБКАМИ)\r\n    arrTableNameError[0].textContent = `${arrKeys[0]} : `;\r\n    arrTableNameError[1].textContent = `${arrKeys[1]} : `;\r\n\r\n    arrTableMeaningError[0].textContent = checkTheResponseCode(arrValues[0]);\r\n    let textError = `${arrValues[1].title}. ${arrValues[1].message}.`;\r\n    arrTableMeaningError[1].textContent = textError;\r\n  }\r\n}\r\n\r\ngetCurrentIPAddress(url_IP).then(function (ipAddress) {\r\n  console.log(ipAddress.ip);\r\n  // по клику вывожу в инпут текущий IP-адрес\r\n  btnCurrent.addEventListener('click', function () {\r\n    inpCurrent.value = ipAddress.ip;\r\n  });\r\n});\r\n\r\nbtnData.addEventListener('click', function () {\r\n  getDataIP(inpData.value).then(function (ipData) {\r\n    // массив с ключами объекта\r\n    let arrKeysIpData = Object.keys(ipData);\r\n    // массив с значениями объекта\r\n    let arrValueIpData = Object.values(ipData);\r\n\r\n    // Функция выводит ответ от сервера в таблицу (таблица БЕЗ ОШИБОК)\r\n    outputTheTableWithoutErrors(arrKeysIpData, arrValueIpData);\r\n    // Функция выводит ответ от сервера в таблицу (таблица С ОШИБКАМИ)\r\n    outputTheTableWithAnError(arrKeysIpData, arrValueIpData);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_12_informationIpPage/informationIp.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_12_informationIpPage/informationIp.js");
/******/ 	
/******/ })()
;