"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profil",{

/***/ "./src/pages/profil/index.js":
/*!***********************************!*\
  !*** ./src/pages/profil/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TitlePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TitlePage */ \"./src/components/TitlePage.js\");\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ \"./src/services/user.service.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _HOC_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../HOC/withAuth */ \"./src/HOC/withAuth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _services_user_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMe(localStorage.getItem('token')).then(function(data) {\n            console.log(data, \"DATA\");\n            setUser(data);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TitlePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Profil\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, _this));\n};\n_s(Index, \"0CvbIMnmVVVZNv9aoeUk9mZKRjk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (wi);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNHO0FBQ047QUFDUjtBQUNFOzs7QUFDekMsR0FBSyxDQUFDTyxLQUFLLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ2pCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUN4QixHQUFLLENBQW1CRixHQUFVLEdBQVZBLCtDQUFRLElBQXpCTSxJQUFJLEdBQWFOLEdBQVUsS0FBckJPLE9BQU8sR0FBSVAsR0FBVTtJQUVsQ0MsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNYSCxvRUFBaUIsQ0FBQ1csWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTyxTQUM3Q0MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7WUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksRUFBQyxDQUFNO1lBQ3ZCTCxPQUFPLENBQUNLLElBQUk7UUFDZCxDQUFDLEVBQ0FHLEtBQUssQ0FBQyxRQUFRLENBQVBDLEdBQUc7WUFBS0gsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsR0FBRzs7SUFDbkMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUdQLE1BQU0sNkVBQ0RDLENBQUc7O3dGQUNDcEIsNkRBQVM7Z0JBQUNxQixLQUFLLEVBQUMsQ0FBUTs7Ozs7O3dGQUN4QkMsQ0FBQzs7Ozs7Ozs7Ozs7QUFHZCxDQUFDO0dBcEJLZixLQUFLOztRQUNRRixrREFBUzs7O0tBRHRCRSxLQUFLO0FBc0JYLCtEQUFlZ0IsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWwvaW5kZXguanM/YTg5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGl0bGVQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGl0bGVQYWdlJztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vSE9DL3dpdGhBdXRoJztcclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIHVzZXJTZXJ2aWNlLmdldE1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSxcIkRBVEFcIik7XHJcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpOyAgICAgIFxyXG4gICAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRpdGxlUGFnZSB0aXRsZT1cIlByb2ZpbFwiIC8+XHJcbiAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpO1xyXG4iXSwibmFtZXMiOlsiVGl0bGVQYWdlIiwidXNlclNlcnZpY2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwid2l0aEF1dGgiLCJJbmRleCIsInJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwiZ2V0TWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJ0aXRsZSIsInAiLCJ3aSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profil/index.js\n");

/***/ })

});