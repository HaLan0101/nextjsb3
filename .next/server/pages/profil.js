"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/profil";
exports.ids = ["pages/profil"];
exports.modules = {

/***/ "./src/HOC/withAuth.js":
/*!*****************************!*\
  !*** ./src/HOC/withAuth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst withAuth = (WrappedComponent)=>{\n    return (props)=>{\n        const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        const { 0: authVerified , 1: setAuthVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            const token = localStorage.getItem('token');\n            if (!token) {\n                Router.push('/login');\n            } else {\n                setAuthVerified(true);\n            }\n        }, [\n            Router\n        ]);\n        if (authVerified) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, {\n                ...props\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\HOC\\\\withAuth.js\",\n                lineNumber: 17,\n                columnNumber: 20\n            }, undefined));\n        } else {\n            return null;\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSE9DL3dpdGhBdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1A7QUFDdkMsS0FBSyxDQUFDSSxRQUFRLElBQUVDLGdCQUFnQixHQUFJLENBQUM7SUFDakMsTUFBTSxFQUFDQyxLQUFLLEdBQUssQ0FBQztRQUNkLEtBQUssQ0FBQ0MsTUFBTSxHQUFDSixzREFBUztRQUN0QixLQUFLLE1BQUVLLFlBQVksTUFBRUMsZUFBZSxNQUFFUCwrQ0FBUSxDQUFDLEtBQUs7UUFDcERELGdEQUFTLEtBQU8sQ0FBQztZQUNiLEtBQUssQ0FBQ1MsS0FBSyxHQUFFQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPO1lBQ3pDLEVBQUUsR0FBRUYsS0FBSyxFQUFDLENBQUM7Z0JBQ1BILE1BQU0sQ0FBQ00sSUFBSSxDQUFDLENBQVE7WUFDeEIsQ0FBQyxNQUNHLENBQUM7Z0JBQ0RKLGVBQWUsQ0FBQyxJQUFJO1lBQ3hCLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQ0Y7WUFBQUEsTUFBTTtRQUFBLENBQUM7UUFDVixFQUFFLEVBQUNDLFlBQVksRUFBQyxDQUFDO1lBQ2IsTUFBTSw2RUFBRUgsZ0JBQWdCO21CQUFLQyxLQUFLOzs7Ozs7UUFDdEMsQ0FBQyxNQUNHLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSTtRQUNmLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUNELGlFQUFlRixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGIzLy4vc3JjL0hPQy93aXRoQXV0aC5qcz8yMTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHdpdGhBdXRoPShXcmFwcGVkQ29tcG9uZW50KSA9PntcclxuICAgIHJldHVybihwcm9wcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgICAgICBjb25zdCBbYXV0aFZlcmlmaWVkLCBzZXRBdXRoVmVyaWZpZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbj0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgO1xyXG4gICAgICAgICAgICBpZighdG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEF1dGhWZXJpZmllZCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxbUm91dGVyXSk7XHJcbiAgICAgICAgaWYoYXV0aFZlcmlmaWVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30vPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aDsiXSwibmFtZXMiOlsicmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIndpdGhBdXRoIiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiUm91dGVyIiwiYXV0aFZlcmlmaWVkIiwic2V0QXV0aFZlcmlmaWVkIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/HOC/withAuth.js\n");

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Button = (props)=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: props.type,\n        className: props.classes,\n        onClick: props.function,\n        children: props.title\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\components\\\\Button.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEtBQUssQ0FBQ0EsTUFBTSxJQUFJQyxLQUFLLEdBQUssQ0FBQztJQUN2QixNQUFNLDZFQUNEQyxDQUFNO1FBQUNDLElBQUksRUFBRUYsS0FBSyxDQUFDRSxJQUFJO1FBQUVDLFNBQVMsRUFBRUgsS0FBSyxDQUFDSSxPQUFPO1FBQUVDLE9BQU8sRUFBRUwsS0FBSyxDQUFDTSxRQUFRO2tCQUNyRU4sS0FBSyxDQUFDTyxLQUFLOzs7Ozs7QUFHekIsQ0FBQztBQUVELGlFQUFlUixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGIzLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzPzUwYTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT17cHJvcHMudHlwZX0gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzfSBvbkNsaWNrPXtwcm9wcy5mdW5jdGlvbn0+XHJcbiAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwib25DbGljayIsImZ1bmN0aW9uIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Button.js\n");

/***/ }),

/***/ "./src/components/TitlePage/TitlePage.js":
/*!***********************************************!*\
  !*** ./src/components/TitlePage/TitlePage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n//import styles from \"./TitlePage.module.scss\";\nconst TitlePage = (props)=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"styles.title__page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: props.title\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\components\\\\TitlePage\\\\TitlePage.js\",\n            lineNumber: 5,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\components\\\\TitlePage\\\\TitlePage.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitlePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaXRsZVBhZ2UvVGl0bGVQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxFQUErQztBQUMvQyxLQUFLLENBQUNBLFNBQVMsSUFBSUMsS0FBSyxHQUFLLENBQUM7SUFDMUIsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBb0I7OEZBQzlCQyxDQUFFO3NCQUNFSCxLQUFLLENBQUNJLEtBQUs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7QUFFRCxpRUFBZUwsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmRiMy8uL3NyYy9jb21wb25lbnRzL1RpdGxlUGFnZS9UaXRsZVBhZ2UuanM/NDUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGl0bGVQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmNvbnN0IFRpdGxlUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0eWxlcy50aXRsZV9fcGFnZVwiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJUaXRsZVBhZ2UiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TitlePage/TitlePage.js\n");

/***/ }),

/***/ "./src/pages/profil/index.js":
/*!***********************************!*\
  !*** ./src/pages/profil/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TitlePage_TitlePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TitlePage/TitlePage */ \"./src/components/TitlePage/TitlePage.js\");\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ \"./src/services/user.service.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _HOC_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../HOC/withAuth */ \"./src/HOC/withAuth.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Button */ \"./src/components/Button.js\");\n\n\n\n\n\n\n\nconst Index = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        _services_user_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMe(localStorage.getItem('token')).then((data)=>{\n            console.log(data, \"DATA\");\n            setUser(data);\n        }).catch((err)=>console.log(err)\n        );\n    }, []);\n    const logout = ()=>{\n        localStorage.removeItem('token');\n        router.push(\"/\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TitlePage_TitlePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Profil\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hello \",\n                    user && user.username\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Email: \",\n                    user && user.email\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"FirstName: \",\n                    user && user.firstName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Lastname: \",\n                    user && user.lastName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                title: \"Logout\",\n                classes: \"btn btn_color-black\",\n                function: (e)=>logout(e)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dnhal\\\\Desktop\\\\Ynov\\\\Frontend\\\\nextjsb3\\\\src\\\\pages\\\\profil\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_HOC_withAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Index));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNQO0FBQ047QUFDUjtBQUNFO0FBQ0c7QUFDNUMsS0FBSyxDQUFDUSxLQUFLLE9BQVMsQ0FBQztJQUNqQixLQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsS0FBSyxNQUFFSyxJQUFJLE1BQUVDLE9BQU8sTUFBSVIsK0NBQVE7SUFFaENDLGdEQUFTLEtBQU8sQ0FBQztRQUNYSCxvRUFBaUIsQ0FBQ1ksWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTyxTQUM3Q0MsSUFBSSxFQUFFQyxJQUFJLEdBQUssQ0FBQztZQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxFQUFDLENBQU07WUFDdkJMLE9BQU8sQ0FBQ0ssSUFBSTtRQUNkLENBQUMsRUFDQUcsS0FBSyxFQUFFQyxHQUFHLEdBQUtILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHOztJQUNuQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRVAsS0FBSyxDQUFDQyxNQUFNLE9BQU0sQ0FBQztRQUNmUixZQUFZLENBQUNTLFVBQVUsQ0FBQyxDQUFPO1FBQy9CYixNQUFNLENBQUNjLElBQUksQ0FBQyxDQUFHO0lBQ25CLENBQUM7SUFDRCxNQUFNLDZFQUNEQyxDQUFHOzt3RkFDQ3hCLHVFQUFTO2dCQUFDeUIsS0FBSyxFQUFDLENBQVE7Ozs7Ozt3RkFDeEJDLENBQUM7O29CQUFDLENBQU07b0JBQUNoQixJQUFJLElBQUlBLElBQUksQ0FBQ2lCLFFBQVE7Ozs7Ozs7d0ZBQzlCRCxDQUFDOztvQkFBQyxDQUFPO29CQUFDaEIsSUFBSSxJQUFJQSxJQUFJLENBQUNrQixLQUFLOzs7Ozs7O3dGQUM1QkYsQ0FBQzs7b0JBQUMsQ0FBVztvQkFBQ2hCLElBQUksSUFBSUEsSUFBSSxDQUFDbUIsU0FBUzs7Ozs7Ozt3RkFDcENILENBQUM7O29CQUFDLENBQVU7b0JBQUNoQixJQUFJLElBQUlBLElBQUksQ0FBQ29CLFFBQVE7Ozs7Ozs7d0ZBQ2xDdkIsMERBQU07Z0JBQUNrQixLQUFLLEVBQUMsQ0FBUTtnQkFBQ00sT0FBTyxFQUFDLENBQXFCO2dCQUFDQyxRQUFRLEdBQUdDLENBQUMsR0FBSVosTUFBTSxDQUFDWSxDQUFDOzs7Ozs7Ozs7Ozs7QUFHekYsQ0FBQztBQUVELGlFQUFlM0IseURBQVEsQ0FBQ0UsS0FBSyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGIzLy4vc3JjL3BhZ2VzL3Byb2ZpbC9pbmRleC5qcz9hODk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZVBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UaXRsZVBhZ2UvVGl0bGVQYWdlJztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vSE9DL3dpdGhBdXRoJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICB1c2VyU2VydmljZS5nZXRNZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsXCJEQVRBXCIpO1xyXG4gICAgICAgICAgICBzZXRVc2VyKGRhdGEpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTsgICAgICBcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGxvZ291dD0oKSA9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUaXRsZVBhZ2UgdGl0bGU9XCJQcm9maWxcIiAvPlxyXG4gICAgICAgICAgICA8cD5IZWxsbyB7dXNlciAmJiB1c2VyLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyICYmIHVzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8cD5GaXJzdE5hbWU6IHt1c2VyICYmIHVzZXIuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+TGFzdG5hbWU6IHt1c2VyICYmIHVzZXIubGFzdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiTG9nb3V0XCIgY2xhc3Nlcz1cImJ0biBidG5fY29sb3ItYmxhY2tcIiBmdW5jdGlvbj17KGUpPT4gbG9nb3V0KGUpfT48L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEluZGV4KTtcclxuIl0sIm5hbWVzIjpbIlRpdGxlUGFnZSIsInVzZXJTZXJ2aWNlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIndpdGhBdXRoIiwiQnV0dG9uIiwiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImdldE1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsInB1c2giLCJkaXYiLCJ0aXRsZSIsInAiLCJ1c2VybmFtZSIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjbGFzc2VzIiwiZnVuY3Rpb24iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/profil/index.js\n");

/***/ }),

/***/ "./src/services/user.service.js":
/*!**************************************!*\
  !*** ./src/services/user.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiUrl = \"http://localhost:1337/api\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    register (payload) {\n        console.log(payload, \"payload\");\n        return fetch(`${apiUrl}/auth/local/register`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"Application/json\"\n            },\n            body: JSON.stringify(payload)\n        }).then((res)=>res.json()\n        );\n    },\n    login (payload) {\n        return fetch(`${apiUrl}/auth/local/`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"Application/json\"\n            },\n            body: JSON.stringify(payload)\n        }).then((res)=>res.json()\n        );\n    },\n    getMe (jwt) {\n        return fetch(`${apiUrl}/users/me`, {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"Application/json\",\n                \"Authorization\": `Bearer ${jwt}`\n            }\n        }).then((res)=>res.json()\n        );\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLE1BQU0sR0FBRyxDQUEyQjtBQUMxQyxpRUFBZSxDQUFDO0lBQ1pDLFFBQVEsRUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sRUFBQyxDQUFTO1FBQzdCLE1BQU0sQ0FBQ0csS0FBSyxJQUFJTCxNQUFNLENBQUMsb0JBQW9CLEdBQUcsQ0FBQztZQUMzQ00sTUFBTSxFQUFFLENBQU07WUFDZEMsT0FBTyxFQUFFLENBQUM7Z0JBQ04sQ0FBYyxlQUFDLENBQWtCO1lBQ3JDLENBQUM7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsT0FBTztRQUNoQyxDQUFDLEVBQ0FTLElBQUksRUFBRUMsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUk7O0lBQzNCLENBQUM7SUFDREMsS0FBSyxFQUFDWixPQUFPLEVBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQ0csS0FBSyxJQUFJTCxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUM7WUFDbkNNLE1BQU0sRUFBRSxDQUFNO1lBQ2RDLE9BQU8sRUFBRSxDQUFDO2dCQUNOLENBQWMsZUFBQyxDQUFrQjtZQUNyQyxDQUFDO1lBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLE9BQU87UUFDaEMsQ0FBQyxFQUNBUyxJQUFJLEVBQUVDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJOztJQUMzQixDQUFDO0lBQ0RFLEtBQUssRUFBQ0MsR0FBRyxFQUFDLENBQUM7UUFDUCxNQUFNLENBQUNYLEtBQUssSUFBSUwsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDO1lBQ2hDTSxNQUFNLEVBQUUsQ0FBSztZQUNiQyxPQUFPLEVBQUUsQ0FBQztnQkFDTixDQUFjLGVBQUMsQ0FBa0I7Z0JBQ2pDLENBQWUsaUJBQUcsT0FBTyxFQUFFUyxHQUFHO1lBQ2xDLENBQUM7UUFDTCxDQUFDLEVBQ0FMLElBQUksRUFBRUMsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUk7O0lBQzNCLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmRiMy8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanM/ODAyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGlcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcmVnaXN0ZXIocGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQsXCJwYXlsb2FkXCIpO1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVcmx9L2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJBcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICB9LFxyXG4gICAgbG9naW4ocGF5bG9hZCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVybH0vYXV0aC9sb2NhbC9gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJBcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICB9LFxyXG4gICAgZ2V0TWUoand0KXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOlwiQXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtqd3R9YFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJhcGlVcmwiLCJyZWdpc3RlciIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImxvZ2luIiwiZ2V0TWUiLCJqd3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/user.service.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/profil/index.js"));
module.exports = __webpack_exports__;

})();