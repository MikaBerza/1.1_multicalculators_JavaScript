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

/***/ "./src/6_0_0_authentication/index.css":
/*!********************************************!*\
  !*** ./src/6_0_0_authentication/index.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_0_authentication/index.css?");

/***/ }),

/***/ "./src/6_0_0_authentication/index.js":
/*!*******************************************!*\
  !*** ./src/6_0_0_authentication/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/6_0_0_authentication/index.css\");\n/* harmony import */ var _6_0_0_authentication_imgAuthentication_logo_calculator_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../6_0_0_authentication/imgAuthentication/logo-calculator.png */ \"./src/6_0_0_authentication/imgAuthentication/logo-calculator.png\");\n/*\r\nДанные для входа на сайт\r\n  Почта:\r\n  Address@mail.ru\r\n  Пароль:\r\n  Adr78*#\r\n  Чекбокас \"Я не робот\":\r\n  true\r\n*/\r\n/*активация строго режима*/\r\n\r\n// импортируем стили css\r\n\r\n// импортируем логотип\r\n\r\n\r\n// Электронная почта\r\nconst inpAddress = document.getElementById('inputEmail1');\r\n// Пароль\r\nconst inpPassword = document.getElementById('inputPassword1');\r\n// Чекбокас \"Я не робот\"\r\nconst inpCheckbox = document.getElementById('inputCheck1');\r\n// Кнопка войти\r\nconst entButton = document.getElementById('entryButton');\r\n// Вот такое длинное условие перехода на главную страницу\r\n// попробовать оптимизировать это условие!!!\r\nentButton.addEventListener('click', function () {\r\n  if (\r\n    inpAddress.value === 'Address@mail.ru' &&\r\n    inpPassword.value === 'Adr78*#' &&\r\n    inpCheckbox.checked === true\r\n  ) {\r\n    inpAddress.classList.remove('bordTwo');\r\n    inpPassword.classList.remove('bordTwo');\r\n    inpCheckbox.classList.remove('bordTwo');\r\n    // console.log('Данные правильные');\r\n    // console.log('Происходит переход!');\r\n    // Переход на главную страницу (Домашнего калькулятора)\r\n    onclick = document.location.href = './main.html';\r\n  } else if (\r\n    inpAddress.value !== 'Address@mail.ru' &&\r\n    inpPassword.value !== 'Adr78*#' &&\r\n    inpCheckbox.checked !== true\r\n  ) {\r\n    inpAddress.classList.add('bordTwo');\r\n    inpPassword.classList.add('bordTwo');\r\n    inpCheckbox.classList.add('bordTwo');\r\n  } else if (\r\n    inpAddress.value !== 'Address@mail.ru' &&\r\n    inpPassword.value !== 'Adr78*#' &&\r\n    inpCheckbox.checked === true\r\n  ) {\r\n    inpAddress.classList.add('bordTwo');\r\n    inpPassword.classList.add('bordTwo');\r\n    inpCheckbox.classList.remove('bordTwo');\r\n  } else if (\r\n    inpAddress.value === 'Address@mail.ru' &&\r\n    inpPassword.value === 'Adr78*#' &&\r\n    inpCheckbox.checked !== true\r\n  ) {\r\n    inpAddress.classList.remove('bordTwo');\r\n    inpPassword.classList.remove('bordTwo');\r\n    inpCheckbox.classList.add('bordTwo');\r\n  } else if (\r\n    inpAddress.value === 'Address@mail.ru' &&\r\n    inpPassword.value !== 'Adr78*#' &&\r\n    inpCheckbox.checked === true\r\n  ) {\r\n    inpAddress.classList.remove('bordTwo');\r\n    inpPassword.classList.add('bordTwo');\r\n    inpCheckbox.classList.remove('bordTwo');\r\n  } else if (\r\n    inpAddress.value !== 'Address@mail.ru' &&\r\n    inpPassword.value === 'Adr78*#' &&\r\n    inpCheckbox.checked === true\r\n  ) {\r\n    inpAddress.classList.add('bordTwo');\r\n    inpPassword.classList.remove('bordTwo');\r\n    inpCheckbox.classList.remove('bordTwo');\r\n  } else if (\r\n    inpAddress.value === 'Address@mail.ru' &&\r\n    inpPassword.value !== 'Adr78*#' &&\r\n    inpCheckbox.checked !== true\r\n  ) {\r\n    inpAddress.classList.remove('bordTwo');\r\n    inpPassword.classList.add('bordTwo');\r\n    inpCheckbox.classList.add('bordTwo');\r\n  } else if (\r\n    inpAddress.value !== 'Address@mail.ru' &&\r\n    inpPassword.value === 'Adr78*#' &&\r\n    inpCheckbox.checked !== true\r\n  ) {\r\n    inpAddress.classList.add('bordTwo');\r\n    inpPassword.classList.remove('bordTwo');\r\n    inpCheckbox.classList.add('bordTwo');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_0_authentication/index.js?");

/***/ }),

/***/ "./src/6_0_0_authentication/imgAuthentication/logo-calculator.png":
/*!************************************************************************!*\
  !*** ./src/6_0_0_authentication/imgAuthentication/logo-calculator.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/logo-calculator.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_0_authentication/imgAuthentication/logo-calculator.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_0_0_authentication/index.js");
/******/ 	
/******/ })()
;