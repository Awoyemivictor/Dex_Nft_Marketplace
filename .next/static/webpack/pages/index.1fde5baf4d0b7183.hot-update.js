"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TopCollections/index.jsx":
/*!*********************************************!*\
  !*** ./components/TopCollections/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TopCollectionsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TopCollectionsItem */ \"./components/TopCollectionsItem/index.jsx\");\n/* harmony import */ var _InfoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InfoComponent */ \"./components/InfoComponent/index.jsx\");\n/* harmony import */ var _data_data_components_data_TopCollections_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/data-components/data-TopCollections.js */ \"./data/data-components/data-TopCollections.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n//import TopCollectionsData from './data.json'\nfunction TopCollectionsContainer() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: \"section-padding-100 clearfix\",\n        __source: {\n            fileName: \"/Users/user/Movies/Dex_Nft_Marketplace/components/TopCollections/index.jsx\",\n            lineNumber: 11\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"/Users/user/Movies/Dex_Nft_Marketplace/components/TopCollections/index.jsx\",\n                lineNumber: 12\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfoComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    titleSm: \"Our Top Collections\",\n                    titleLg: \"Popular Collections\",\n                    text: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.\",\n                    __source: {\n                        fileName: \"/Users/user/Movies/Dex_Nft_Marketplace/components/TopCollections/index.jsx\",\n                        lineNumber: 13\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row\",\n                    __source: {\n                        fileName: \"/Users/user/Movies/Dex_Nft_Marketplace/components/TopCollections/index.jsx\",\n                        lineNumber: 18\n                    },\n                    __self: this,\n                    children: _data_data_components_data_TopCollections_js__WEBPACK_IMPORTED_MODULE_3__.TopCollectionsData && _data_data_components_data_TopCollections_js__WEBPACK_IMPORTED_MODULE_3__.TopCollectionsData.map(function(item, i) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TopCollectionsItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            img: item.img.src,\n                            title: item.title,\n                            text: item.text,\n                            Delay: item.Delay,\n                            __source: {\n                                fileName: \"/Users/user/Movies/Dex_Nft_Marketplace/components/TopCollections/index.jsx\",\n                                lineNumber: 20\n                            },\n                            __self: _this\n                        }, i);\n                    })\n                })\n            ]\n        })\n    }));\n}\n_c = TopCollectionsContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopCollectionsContainer);\nvar _c;\n$RefreshReg$(_c, \"TopCollectionsContainer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcENvbGxlY3Rpb25zL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVzRDtBQUNWO0FBQ3dDO0FBQ3BGLEVBQThDO1NBRXJDRyx1QkFBdUIsR0FBRSxDQUFDOztJQUVqQyxNQUFNLHNFQUNIQyxDQUFPO1FBQUNDLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7O3dGQUM1Q0MsQ0FBRztZQUFDRCxTQUFTLEVBQUMsQ0FBVzs7Ozs7OztxRkFDckJKLHNEQUFhO29CQUNaTSxPQUFPLEVBQUMsQ0FBcUI7b0JBQzdCQyxPQUFPLEVBQUMsQ0FBcUI7b0JBQzdCQyxJQUFJLEVBQUMsQ0FBNEg7Ozs7Ozs7cUZBRWxJSCxDQUFHO29CQUFDRCxTQUFTLEVBQUMsQ0FBSzs7Ozs7OzhCQUNqQkgsNEZBQWtCLElBQUlBLGdHQUFzQixDQUFDLFFBQVFTLENBQVBDLElBQUksRUFBR0QsQ0FBQztzQ0FDckQsTUFBTSx3REFBTFgsMkRBQWtCOzRCQUVqQmEsR0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRzs0QkFDakJDLEtBQUssRUFBRUgsSUFBSSxDQUFDRyxLQUFLOzRCQUNqQk4sSUFBSSxFQUFFRyxJQUFJLENBQUNILElBQUk7NEJBQ2ZPLEtBQUssRUFBRUosSUFBSSxDQUFDSSxLQUFLOzs7Ozs7MkJBSlpMLENBQUM7Ozs7OztBQVd4QixDQUFDO0tBeEJRUix1QkFBdUI7QUEwQmhDLCtEQUFlQSx1QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3BDb2xsZWN0aW9ucy9pbmRleC5qc3g/MTUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFRvcENvbGxlY3Rpb25zSXRlbSBmcm9tICcuLi9Ub3BDb2xsZWN0aW9uc0l0ZW0nXG5pbXBvcnQgSW5mb0NvbXBvbmVudCBmcm9tICcuLi9JbmZvQ29tcG9uZW50J1xuaW1wb3J0IHtUb3BDb2xsZWN0aW9uc0RhdGF9IGZyb20gJy4uLy4uL2RhdGEvZGF0YS1jb21wb25lbnRzL2RhdGEtVG9wQ29sbGVjdGlvbnMuanMnXG4vL2ltcG9ydCBUb3BDb2xsZWN0aW9uc0RhdGEgZnJvbSAnLi9kYXRhLmpzb24nXG5cbmZ1bmN0aW9uIFRvcENvbGxlY3Rpb25zQ29udGFpbmVyKCl7XG5cbiAgcmV0dXJuKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tcGFkZGluZy0xMDAgY2xlYXJmaXhcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SW5mb0NvbXBvbmVudFxuICAgICAgICAgICAgICB0aXRsZVNtPSdPdXIgVG9wIENvbGxlY3Rpb25zJ1xuICAgICAgICAgICAgICB0aXRsZUxnPSdQb3B1bGFyIENvbGxlY3Rpb25zJ1xuICAgICAgICAgICAgICB0ZXh0PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgcXVpcyBhY2N1bXNhbiBuaXNpIFV0IHV0IGZlbGlzIGNvbmd1ZSBuaXNsIGhlbmRyZXJpdCBjb21tb2RvLidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICB7VG9wQ29sbGVjdGlvbnNEYXRhICYmIFRvcENvbGxlY3Rpb25zRGF0YS5tYXAoKGl0ZW0gLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRvcENvbGxlY3Rpb25zSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgaW1nPXtpdGVtLmltZy5zcmN9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgIERlbGF5PXtpdGVtLkRlbGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BDb2xsZWN0aW9uc0NvbnRhaW5lciJdLCJuYW1lcyI6WyJUb3BDb2xsZWN0aW9uc0l0ZW0iLCJJbmZvQ29tcG9uZW50IiwiVG9wQ29sbGVjdGlvbnNEYXRhIiwiVG9wQ29sbGVjdGlvbnNDb250YWluZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwidGl0bGVTbSIsInRpdGxlTGciLCJ0ZXh0IiwibWFwIiwiaSIsIml0ZW0iLCJpbWciLCJzcmMiLCJ0aXRsZSIsIkRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopCollections/index.jsx\n");

/***/ })

});