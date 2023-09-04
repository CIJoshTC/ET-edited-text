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

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("function _readOnlyError(name) { throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\"); }\nvar butInstall = document.getElementById('buttonInstall');\nwindow.addEventListener('beforeinstallprompt', function (event) {\n  event.preventDefault();\n  var deferredPrompt = event;\n  butInstall.style.display = 'block';\n  butInstall.addEventListener('click', function () {\n    if (deferredPrompt) {\n      deferredPrompt.prompt();\n      deferredPrompt.userChoice.then(function (choiceResult) {\n        if (choiceResult.outcome === 'accepted') {\n          console.log('User accepted the install prompt');\n        } else {\n          console.log('User dismissed the install prompt');\n        }\n        null, _readOnlyError(\"deferredPrompt\");\n      });\n    }\n  });\n});\nwindow.addEventListener('appinstalled', function (event) {\n  console.log('App was installed.');\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;