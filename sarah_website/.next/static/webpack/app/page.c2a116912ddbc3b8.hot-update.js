"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\page",{

/***/ "./components/Carrousel/Carrousel.tsx":
/*!********************************************!*\
  !*** ./components/Carrousel/Carrousel.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carrousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slideshow-image */ \"./node_modules/react-slideshow-image/dist/react-slideshow-image.esm.js\");\n/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slideshow-image/dist/styles.css */ \"./node_modules/react-slideshow-image/dist/styles.css\");\n/* harmony import */ var _Carrousel_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carrousel.style */ \"./components/Carrousel/Carrousel.style.tsx\");\n\n\n\n\nfunction Carrousel() {\n    const slideImages = [\n        {\n            url: \"https://images.pexels.com/photos/1553959/pexels-photo-1553959.jpeg?auto=compress&cs=tinysrgb&w=1600\",\n            caption: \"Slide 1\"\n        },\n        {\n            url: \"images/slide_3.jpg\",\n            caption: \"Slide 2\"\n        },\n        {\n            url: \"images/slide_4.jpg\",\n            caption: \"Slide 3\"\n        }\n    ];\n    const Slideshow = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"slide-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slideshow_image__WEBPACK_IMPORTED_MODULE_1__.Slide, {\n                children: slideImages.map((slideImage, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"each-slide\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                backgroundImage: \"url(\".concat(slideImage.url, \")\")\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: slideImage.caption\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carrousel_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carrousel_style__WEBPACK_IMPORTED_MODULE_3__.Images, {\n            \"data-carrousel\": true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carrousel_style__WEBPACK_IMPORTED_MODULE_3__.ButtonPrev, {\n                    className: \"carrousel-button\",\n                    \"data-carrousel-button\": \"prev\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        \"stroke-width\": \"1.5\",\n                        stroke: \"currentColor\",\n                        className: \"SVG\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\",\n                            d: \"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carrousel_style__WEBPACK_IMPORTED_MODULE_3__.ButtonNext, {\n                    className: \"carrousel-button\",\n                    \"data-carrousel-button\": \"next\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        \"stroke-width\": \"1.5\",\n                        stroke: \"currentColor\",\n                        className: \"SVG\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\",\n                            d: \"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slideshow, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carrousel_style__WEBPACK_IMPORTED_MODULE_3__.RotationImage, {\n                    \"data-slides\": true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carrousel_style__WEBPACK_IMPORTED_MODULE_3__.Slides, {\n                            className: \"slide\",\n                            \"data-active\": true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://images.pexels.com/photos/1553959/pexels-photo-1553959.jpeg?auto=compress&cs=tinysrgb&w=1600\",\n                                alt: \"image1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carrousel_style__WEBPACK_IMPORTED_MODULE_3__.Slides, {\n                            className: \"slide\",\n                            \"data-active\": true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60\",\n                                alt: \"image2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carrousel_style__WEBPACK_IMPORTED_MODULE_3__.Slides, {\n                            className: \"slide\",\n                            \"data-active\": true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://images.pexels.com/photos/1556796/pexels-photo-1556796.jpeg?auto=compress&cs=tinysrgb&w=1600\",\n                                alt: \"image3\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\farix\\\\OneDrive\\\\Documents\\\\Work\\\\SarahWebsite\\\\sarah_website\\\\components\\\\Carrousel\\\\Carrousel.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = Carrousel;\nvar _c;\n$RefreshReg$(_c, \"Carrousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnJvdXNlbC9DYXJyb3VzZWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDOEM7QUFDQztBQVFwQjtBQUVaLFNBQVNPLFlBQVk7SUFDbEMsTUFBTUMsY0FBYztRQUNsQjtZQUNFQyxLQUFLO1lBQ0xDLFNBQVM7UUFDWDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsU0FBUztRQUNYO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxTQUFTO1FBQ1g7S0FDRDtJQUVELE1BQU1DLFlBQVksSUFBTTtRQUN0QixxQkFDRSw4REFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ2Isd0RBQUtBOzBCQUNIUSxZQUFZTSxHQUFHLENBQUMsQ0FBQ0MsWUFBWUMsc0JBQzVCLDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlLLE9BQU87Z0NBQUVDLGlCQUFpQixPQUFzQixPQUFmSCxXQUFXTixHQUFHLEVBQUM7NEJBQUc7c0NBQ3RELDRFQUFDVTswQ0FBTUosV0FBV0wsT0FBTzs7Ozs7Ozs7Ozs7dUJBRklNOzs7Ozs7Ozs7Ozs7Ozs7SUFTM0M7SUFDQSxxQkFDRSw4REFBQ2Ysd0RBQWNBO2tCQUNiLDRFQUFDRyxvREFBTUE7WUFBQ2dCLGdCQUFjOzs4QkFDcEIsOERBQUNmLHdEQUFVQTtvQkFBQ1EsV0FBVTtvQkFBbUJRLHlCQUFzQjs4QkFDN0QsNEVBQUNDO3dCQUNDQyxPQUFNO3dCQUNOQyxNQUFLO3dCQUNMQyxTQUFRO3dCQUNSQyxnQkFBYTt3QkFDYkMsUUFBTzt3QkFDUGQsV0FBVTtrQ0FFViw0RUFBQ2U7NEJBQ0NDLGtCQUFlOzRCQUNmQyxtQkFBZ0I7NEJBQ2hCQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUlSLDhEQUFDekIsd0RBQVVBO29CQUFDTyxXQUFVO29CQUFtQlEseUJBQXNCOzhCQUM3RCw0RUFBQ0M7d0JBQ0NDLE9BQU07d0JBQ05DLE1BQUs7d0JBQ0xDLFNBQVE7d0JBQ1JDLGdCQUFhO3dCQUNiQyxRQUFPO3dCQUNQZCxXQUFVO2tDQUVWLDRFQUFDZTs0QkFDQ0Msa0JBQWU7NEJBQ2ZDLG1CQUFnQjs0QkFDaEJDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSVIsOERBQUNwQjs7Ozs7OEJBQ0QsOERBQUNULDJEQUFhQTtvQkFBQzhCLGFBQVc7O3NDQUN4Qiw4REFBQzdCLG9EQUFNQTs0QkFBQ1UsV0FBVTs0QkFBUW9CLGFBQVc7c0NBQ25DLDRFQUFDQztnQ0FDQ0MsS0FBSTtnQ0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7c0NBR1IsOERBQUNqQyxvREFBTUE7NEJBQUNVLFdBQVU7NEJBQVFvQixhQUFXO3NDQUNuQyw0RUFBQ0M7Z0NBQ0NDLEtBQUk7Z0NBQ0pDLEtBQUk7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDakMsb0RBQU1BOzRCQUFDVSxXQUFVOzRCQUFRb0IsYUFBVztzQ0FDbkMsNEVBQUNDO2dDQUNDQyxLQUFJO2dDQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xCLENBQUM7S0ExRnVCN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJyb3VzZWwvQ2Fycm91c2VsLnRzeD81ODVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBTbGlkZSB9IGZyb20gXCJyZWFjdC1zbGlkZXNob3ctaW1hZ2VcIjtcclxuaW1wb3J0IFwicmVhY3Qtc2xpZGVzaG93LWltYWdlL2Rpc3Qvc3R5bGVzLmNzc1wiO1xyXG5cclxuaW1wb3J0IFdyYXBwZXJDb250ZW50LCB7XHJcbiAgUm90YXRpb25JbWFnZSxcclxuICBTbGlkZXMsXHJcbiAgSW1hZ2VzLFxyXG4gIEJ1dHRvblByZXYsXHJcbiAgQnV0dG9uTmV4dCxcclxufSBmcm9tIFwiLi9DYXJyb3VzZWwuc3R5bGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnJvdXNlbCgpIHtcclxuICBjb25zdCBzbGlkZUltYWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE1NTM5NTkvcGV4ZWxzLXBob3RvLTE1NTM5NTkuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTYwMFwiLFxyXG4gICAgICBjYXB0aW9uOiBcIlNsaWRlIDFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogXCJpbWFnZXMvc2xpZGVfMy5qcGdcIixcclxuICAgICAgY2FwdGlvbjogXCJTbGlkZSAyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6IFwiaW1hZ2VzL3NsaWRlXzQuanBnXCIsXHJcbiAgICAgIGNhcHRpb246IFwiU2xpZGUgM1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBTbGlkZXNob3cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxTbGlkZT5cclxuICAgICAgICAgIHtzbGlkZUltYWdlcy5tYXAoKHNsaWRlSW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWFjaC1zbGlkZVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2xpZGVJbWFnZS51cmx9KWAgfX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c2xpZGVJbWFnZS5jYXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NsaWRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJDb250ZW50PlxyXG4gICAgICA8SW1hZ2VzIGRhdGEtY2Fycm91c2VsPlxyXG4gICAgICAgIDxCdXR0b25QcmV2IGNsYXNzTmFtZT1cImNhcnJvdXNlbC1idXR0b25cIiBkYXRhLWNhcnJvdXNlbC1idXR0b249XCJwcmV2XCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJTVkdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBkPVwiTTEwLjUgMTkuNUwzIDEybTAgMGw3LjUtNy41TTMgMTJoMThcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9CdXR0b25QcmV2PlxyXG4gICAgICAgIDxCdXR0b25OZXh0IGNsYXNzTmFtZT1cImNhcnJvdXNlbC1idXR0b25cIiBkYXRhLWNhcnJvdXNlbC1idXR0b249XCJuZXh0XCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJTVkdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBkPVwiTTEzLjUgNC41TDIxIDEybTAgMGwtNy41IDcuNU0yMSAxMkgzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvQnV0dG9uTmV4dD5cclxuICAgICAgICA8U2xpZGVzaG93IC8+XHJcbiAgICAgICAgPFJvdGF0aW9uSW1hZ2UgZGF0YS1zbGlkZXM+XHJcbiAgICAgICAgICA8U2xpZGVzIGNsYXNzTmFtZT1cInNsaWRlXCIgZGF0YS1hY3RpdmU+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNTUzOTU5L3BleGVscy1waG90by0xNTUzOTU5LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTE2MDBcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImltYWdlMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NsaWRlcz5cclxuICAgICAgICAgIDxTbGlkZXMgY2xhc3NOYW1lPVwic2xpZGVcIiBkYXRhLWFjdGl2ZT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAyNjgwMzkwNDY5LWJlNzVjODZiNjM2Zj9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1ueDhjM1Z5Wm54bGJud3dmSHd3Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImltYWdlMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NsaWRlcz5cclxuICAgICAgICAgIDxTbGlkZXMgY2xhc3NOYW1lPVwic2xpZGVcIiBkYXRhLWFjdGl2ZT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE1NTY3OTYvcGV4ZWxzLXBob3RvLTE1NTY3OTYuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTYwMFwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiaW1hZ2UzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2xpZGVzPlxyXG4gICAgICAgIDwvUm90YXRpb25JbWFnZT5cclxuICAgICAgPC9JbWFnZXM+XHJcbiAgICA8L1dyYXBwZXJDb250ZW50PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNsaWRlIiwiV3JhcHBlckNvbnRlbnQiLCJSb3RhdGlvbkltYWdlIiwiU2xpZGVzIiwiSW1hZ2VzIiwiQnV0dG9uUHJldiIsIkJ1dHRvbk5leHQiLCJDYXJyb3VzZWwiLCJzbGlkZUltYWdlcyIsInVybCIsImNhcHRpb24iLCJTbGlkZXNob3ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzbGlkZUltYWdlIiwiaW5kZXgiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInNwYW4iLCJkYXRhLWNhcnJvdXNlbCIsImRhdGEtY2Fycm91c2VsLWJ1dHRvbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2Utd2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJkIiwiZGF0YS1zbGlkZXMiLCJkYXRhLWFjdGl2ZSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carrousel/Carrousel.tsx\n"));

/***/ })

});