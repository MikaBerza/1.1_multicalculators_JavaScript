/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation sync recursive \\.png$/":
/*!***************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/ sync \.png$/ ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./1.17viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.17viking.png\",\n\t\"./1.18viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.18viking.png\",\n\t\"./1.19viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.19viking.png\",\n\t\"./1.20viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.20viking.png\",\n\t\"./1.21viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.21viking.png\",\n\t\"./1.22viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.22viking.png\",\n\t\"./1.23viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.23viking.png\",\n\t\"./1.24viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.24viking.png\",\n\t\"./1.25viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.25viking.png\",\n\t\"./1.26viking.png\": \"./src/6_0_mainPage/imgMain/3_section/viking_animation/1.26viking.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/6_0_mainPage/imgMain/3_section/viking_animation sync recursive \\\\.png$/\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/_sync_\\.png$/?");

/***/ }),

/***/ "./src/6_0_mainPage/mainAnimationSection.js":
/*!**************************************************!*\
  !*** ./src/6_0_mainPage/mainAnimationSection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _6_0_mainPage_imgMain_3_section_button_animation_1_27iconsStart_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../6_0_mainPage/imgMain/3_section/button_animation/1.27iconsStart.png */ \"./src/6_0_mainPage/imgMain/3_section/button_animation/1.27iconsStart.png\");\n/* harmony import */ var _6_0_mainPage_imgMain_3_section_button_animation_1_28iconsStop_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../6_0_mainPage/imgMain/3_section/button_animation/1.28iconsStop.png */ \"./src/6_0_mainPage/imgMain/3_section/button_animation/1.28iconsStop.png\");\n/*активация строго режима*/\r\n\r\n// импортируем картинки (3_section)\r\n\r\n\r\n\r\n/*<!-----SectionThree--------------------------------------------------------------------------->*/\r\n/*---------Анимация из картинок----------------------------------------------------*/\r\n// Получаем доступ к нужному нам элементу\r\nconst elemImg = document.getElementById('imgSectionThree');\r\nconst elemBtnStart = document.getElementById('btnSectionThreeStart');\r\nconst elemBtnStop = document.getElementById('btnSectionThreeStop');\r\n\r\n// Формируем массив ссылок на картинки (для анимации)\r\nconst imgArr = [];\r\n\r\nfunction importAll(r) {\r\n  r.keys().forEach((key) => imgArr.push(r(key)));\r\n}\r\nimportAll(\r\n  __webpack_require__(\"./src/6_0_mainPage/imgMain/3_section/viking_animation sync recursive \\\\.png$/\")\r\n);\r\n\r\n/* \r\nИнициализируем переменную (timer) как глобальную\r\nчтобы в ней между запусками функции (start, stop)\r\nхранилось значение\r\n*/\r\nlet timer;\r\n// инициализируем счетчик который будет отвечать за картинки\r\nlet counterImg = 0;\r\n\r\n// Функция для запуска анимации\r\nfunction startAnimation() {\r\n  timer = setInterval(function () {\r\n    // Прибавляем к счетчику +1\r\n    ++counterImg;\r\n    // по очереди из массива добавляем картинки\r\n    elemImg.setAttribute('src', imgArr[counterImg]);\r\n    if (counterImg > 0 && counterImg < 10) {\r\n      // Ставим блок формы (кнопки)\r\n      elemBtnStart.disabled = true;\r\n    } else if (counterImg === 10) {\r\n      // Проверяю что counterImg === 10\r\n      console.log('Десять');\r\n      // Выстовляю стартовую картинку\r\n      elemImg.setAttribute('src', imgArr[0]);\r\n      // Останавливаю таймер\r\n      clearInterval(timer);\r\n      // Сбрасываю счетчик на 0\r\n      counterImg = 0;\r\n      // Удаляю блок формы (кнопки)\r\n      elemBtnStart.removeAttribute('disabled');\r\n    }\r\n  }, 300);\r\n}\r\n\r\n// Функция для остановки анимации\r\nfunction stopAnimation() {\r\n  // clearInterval останавливаем таймер\r\n  clearInterval(timer);\r\n  // Удаляю блок формы (кнопки)\r\n  elemBtnStart.removeAttribute('disabled');\r\n}\r\n\r\n/*\r\nМетод addEventListener - добавляет обработчик события к указанному элементу и \r\nзапустить выполнение программы при совершении заданного действия\r\n*/\r\nelemBtnStart.addEventListener('dblclick', startAnimation);\r\nelemBtnStop.addEventListener('click', stopAnimation);\r\n\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/mainAnimationSection.js?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/button_animation/1.27iconsStart.png":
/*!********************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/button_animation/1.27iconsStart.png ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.27iconsStart.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/button_animation/1.27iconsStart.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/button_animation/1.28iconsStop.png":
/*!*******************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/button_animation/1.28iconsStop.png ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.28iconsStop.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/button_animation/1.28iconsStop.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.17viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.17viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.17viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.17viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.18viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.18viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.18viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.18viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.19viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.19viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.19viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.19viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.20viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.20viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.20viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.20viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.21viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.21viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.21viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.21viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.22viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.22viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.22viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.22viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.23viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.23viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.23viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.23viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.24viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.24viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.24viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.24viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.25viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.25viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.25viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.25viking.png?");

/***/ }),

/***/ "./src/6_0_mainPage/imgMain/3_section/viking_animation/1.26viking.png":
/*!****************************************************************************!*\
  !*** ./src/6_0_mainPage/imgMain/3_section/viking_animation/1.26viking.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.26viking.png\";\n\n//# sourceURL=webpack://1.1_multicalculators_javascript/./src/6_0_mainPage/imgMain/3_section/viking_animation/1.26viking.png?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/6_0_mainPage/mainAnimationSection.js");
/******/ 	
/******/ })()
;