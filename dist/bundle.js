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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n\n\n(0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _headerElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerElements */ \"./src/modules/headerElements.js\");\n/* harmony import */ var _consoleElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consoleElements */ \"./src/modules/consoleElements.js\");\n/* harmony import */ var _footerElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerElements */ \"./src/modules/footerElements.js\");\n \n\n\n\nfunction createApp(){\n    const body = document.querySelector('body');\n\n    body.appendChild((0,_headerElements__WEBPACK_IMPORTED_MODULE_0__.default)());\n    body.appendChild((0,_consoleElements__WEBPACK_IMPORTED_MODULE_1__.default)());\n    body.appendChild((0,_footerElements__WEBPACK_IMPORTED_MODULE_2__.default)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createApp);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/consoleElements.js":
/*!****************************************!*\
  !*** ./src/modules/consoleElements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/modules/todoList.js\");\n\n\nfunction createConsole() {\n    const console = document.createElement('div');\n    console.classList.add('console');\n\n    console.appendChild(createInputConsole());\n    console.appendChild(createOutputConsole());\n\n    return console;\n}\n\nfunction createInputConsole() {\n    const inputConsole = document.createElement('div');\n    inputConsole.classList.add('input-console');\n\n    const inputTextConsole = document.createElement('div');\n    inputTextConsole.classList.add('input-area');\n\n    inputConsole.appendChild(createParagraph(\"> wake up, user\"));\n    inputTextConsole.appendChild(createParagraph(\"user@todolist:~$ \"));\n    inputTextConsole.appendChild(createTextArea());\n    inputConsole.append(inputTextConsole);\n\n    return inputConsole;\n}\n\nfunction createTextArea() {\n    const textArea = document.createElement('textarea');\n    textArea.cols = 30;\n    textArea.rows = 1;\n    textArea.wrap = 'off';\n\n    textArea.addEventListener('keypress', (e) => {\n        if (e.key == \"Enter\") {\n            const list = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoListController.addTodo(textArea);\n            const outputConsole = document.querySelector('.output-console');\n            outputConsole.appendChild(list);\n        }\n    });\n\n    return textArea;\n}\n\nfunction createParagraph(text) {\n    const p = document.createElement('p');\n    p.textContent = text;\n\n    return p;\n}\n\nfunction createOutputConsole() {\n    const outputConsole = document.createElement('div');\n    const ul = document.createElement('ul');\n    ul.classList.add('todo-list');\n    outputConsole.classList.add('output-console');\n    outputConsole.appendChild(ul);\n    \n\n    return outputConsole;\n}\n\nfunction loadConsoleElements() {\n    return createConsole();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadConsoleElements);\n\n//# sourceURL=webpack://todo-list/./src/modules/consoleElements.js?");

/***/ }),

/***/ "./src/modules/footerElements.js":
/*!***************************************!*\
  !*** ./src/modules/footerElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n\n    footer.appendChild(createParagraph());\n    return footer;\n}\n\nfunction createParagraph() {\n    const p = document.createElement('p');\n    p.textContent = \"Developed by dticed\";\n    \n    return p;\n}\n\nfunction loadFooterElements() {\n    return createFooter();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFooterElements);\n\n//# sourceURL=webpack://todo-list/./src/modules/footerElements.js?");

/***/ }),

/***/ "./src/modules/headerElements.js":
/*!***************************************!*\
  !*** ./src/modules/headerElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    header.appendChild(createLogo());\n    header.appendChild(createNav());\n    \n    return header;\n}\n\nfunction createNav() {\n    const nav = document.createElement('nav');\n\n    nav.appendChild(createNavList('Todo List'));\n    return nav;\n}\n\nfunction createLogo() {\n    const img = document.createElement('img');\n    img.src = \"./image/logo.png\";\n    img.alt = \"logo\"\n\n    return img;\n}\n\nfunction createNavList(text) {\n    const ul = document.createElement('ul');\n    const li = document.createElement('li');\n    \n    li.textContent = text;\n    ul.appendChild(li);\n\n    return ul;\n}\n\nfunction loadHeaderElements() {\n    return createHeader();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeaderElements);\n\n//# sourceURL=webpack://todo-list/./src/modules/headerElements.js?");

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoListController\": () => (/* binding */ todoListController)\n/* harmony export */ });\nconst todoList = (() => {\n    const commands = [\"create\", \"delete\"];\n    const list = [\"sfdasdfsadf\"];\n\n    const getCommands = () => {\n        commands.forEach(command => {\n            return command;\n        })\n    }\n\n    const getList = () => {\n        return list;\n    }\n\n    const addItem = (item) => {\n        list.push(item);\n    }\n\n    return {\n        getCommands,\n        getList,\n        addItem\n    }\n})();\n\nconst todoListController = (() => {\n\n    function renderTodoList() {\n        const ul = document.querySelector('.todo-list');\n        todoList.getList().forEach(element => {\n            const li = document.createElement('li');\n            li.innerHTML = element;\n            ul.appendChild(li);\n        })\n        return ul;\n    }\n\n    const addTodo = (element) => {\n        todoList.addItem(element.value);\n        element.value = \"\";\n        return renderTodoList();\n    }\n\n    return {\n        addTodo, renderTodoList\n    }\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todoList.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;