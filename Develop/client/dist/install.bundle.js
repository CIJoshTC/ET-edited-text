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

eval("const butInstall = document.getElementById('buttonInstall');\n\n// Logic for installing the PWA\n// TODO: Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', (event) => {\n    event.preventDefault();\n    const deferredPrompt = event;\n\n    butInstall.style.display = 'block'\n    butInstall.addEvetListener('click', ()=> {\n        deferredPrompt.prompt();\n        deferredPrompt.userChoice.then((choiceResult) => {\n            if (choiceResult.outcome === 'accepted') {\n                console.log('User accepted the A2HS prompt');\n              } else {\n                console.log('User dismissed the A2HS prompt');\n              }\n              deferredPrompt = null;\n            });\n          });\n        });\n\n// TODO: Implement a click event handler on the `butInstall` element\nbutInstall.addEventListener('click', async () => {\n // Check if the deferredPrompt is available\n if (deferredPrompt) {\n    // Show a confirmation dialog to the user\n    const choice = await deferredPrompt.prompt();\n\n    // Handle the user's choice\n    if (choice.outcome === 'accepted') {\n      console.log('User accepted the install prompt');\n    } else {\n      console.log('User dismissed the install prompt');\n    }\n\n    // Clear the deferredPrompt after prompt is shown\n    deferredPrompt = null;\n  }\n});\n\n\n// TODO: Add an handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', (event) => {\n    console.log('App was installed.');\n});\n\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

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