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

/***/ "./src/services/user.service.js":
/*!**************************************!*\
  !*** ./src/services/user.service.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"./node_modules/next/dist/shared/lib/utils.js\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar apiUrl = \"http://localhost:1337/api\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    register: function register(payload) {\n        console.log(payload, \"payload\");\n        return fetch(\"\".concat(apiUrl, \"/auth/local/register\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"Application/json\"\n            },\n            body: JSON.stringify(payload)\n        }).then(function(res) {\n            return res.json();\n        });\n    },\n    login: function login(payload) {\n        return fetch(\"\".concat(apiUrl, \"/auth/local/\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"Application/json\"\n            },\n            body: JSON.stringify(payload)\n        }).then(function(res) {\n            return res.json();\n        });\n    },\n    getMe: function getMe(jwt) {\n        return fetch(\"\".concat(apiUrl, \"/users/me\"), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"Application/json\",\n                \"Authorization\": \"Bearer \".concat(json)\n            }\n        }).then(function(res) {\n            return res.json();\n        });\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZ0U7QUFFaEUsR0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBMkI7QUFDMUMsK0RBQWUsQ0FBQztJQUNaQyxRQUFRLEVBQVJBLFFBQVEsQ0FBUkEsUUFBUSxDQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxFQUFDLENBQVM7UUFDN0IsTUFBTSxDQUFDRyxLQUFLLENBQUUsR0FBUyxNQUFvQixDQUEzQkwsTUFBTSxFQUFDLENBQW9CLHdCQUFHLENBQUM7WUFDM0NNLE1BQU0sRUFBRSxDQUFNO1lBQ2RDLE9BQU8sRUFBRSxDQUFDO2dCQUNOLENBQWMsZUFBQyxDQUFrQjtZQUNyQyxDQUFDO1lBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLE9BQU87UUFDaEMsQ0FBQyxFQUNBUyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO1lBQUtBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDQyxJQUFJOztJQUMzQixDQUFDO0lBQ0RDLEtBQUssRUFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNaLE9BQU8sRUFBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDRyxLQUFLLENBQUUsR0FBUyxNQUFZLENBQW5CTCxNQUFNLEVBQUMsQ0FBWSxnQkFBRyxDQUFDO1lBQ25DTSxNQUFNLEVBQUUsQ0FBTTtZQUNkQyxPQUFPLEVBQUUsQ0FBQztnQkFDTixDQUFjLGVBQUMsQ0FBa0I7WUFDckMsQ0FBQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixPQUFPO1FBQ2hDLENBQUMsRUFDQVMsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTs7SUFDM0IsQ0FBQztJQUNERSxLQUFLLEVBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxHQUFHLEVBQUMsQ0FBQztRQUNQLE1BQU0sQ0FBQ1gsS0FBSyxDQUFFLEdBQVMsTUFBUyxDQUFoQkwsTUFBTSxFQUFDLENBQVMsYUFBRyxDQUFDO1lBQ2hDTSxNQUFNLEVBQUUsQ0FBSztZQUNiQyxPQUFPLEVBQUUsQ0FBQztnQkFDTixDQUFjLGVBQUMsQ0FBa0I7Z0JBQ2pDLENBQWUsZ0JBQUcsQ0FBTyxTQUFPLE9BQUxNLElBQUk7WUFDbkMsQ0FBQztRQUNMLENBQUMsRUFDQUYsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTs7SUFDM0IsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS5qcz84MDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHNcIjtcclxuXHJcbmNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaVwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICByZWdpc3RlcihwYXlsb2FkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZCxcInBheWxvYWRcIik7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVybH0vYXV0aC9sb2NhbC9yZWdpc3RlcmAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjpcIkFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIH0sXHJcbiAgICBsb2dpbihwYXlsb2FkKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVXJsfS9hdXRoL2xvY2FsL2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjpcIkFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIH0sXHJcbiAgICBnZXRNZShqd3Qpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVcmx9L3VzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJBcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2pzb259YFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJsb2FkR2V0SW5pdGlhbFByb3BzIiwiYXBpVXJsIiwicmVnaXN0ZXIiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJsb2dpbiIsImdldE1lIiwiand0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/user.service.js\n");

/***/ })

});