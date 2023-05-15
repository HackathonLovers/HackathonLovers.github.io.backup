webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/faq.js":
/*!*****************************!*\
  !*** ./src/sections/faq.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Faq; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/accordion/accordion */ \"./src/components/accordion/accordion.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/sections/faq.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\nvar faqs = [\n  /*\n  {\n  title: \"¿Qué se va a evaluar de los proyectos?\",\n  contents: <div>Se va a evaluar...</div>,\n  }*/\n{\n  title: \"¿Puedo participar si no tengo equipo?\",\n  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"Claro que si. Apuntate ya que aquellos que vayais sin un equipo vais a formarlo al inicio del hackathon.\")\n},, {\n  title: \"¿Necesito llevar mi propio equipo?\",\n  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \"Si, necesitais llevar aquello (portatil, tablet...) con los que vayais a desarrollar vuestros proyectos. No necesitais llevar regletas...\")\n}, {\n  title: \"Tengo más dudas, ¿con quién puedo contactar?\",\n  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"Puedes contactar con nosotros en info@hackathonlovers.net\")\n}];\nfunction Faq() {\n  /* DESCOMENTAR ESTO PARA AÑADIR EL FORMULARIO DE EVENTBRITE\n  useEffect(() => {\n    const script1 = document.createElement('script');\n    script1.src = 'https://www.eventbrite.es/static/widgets/eb_widgets.js'\n    document.body.appendChild(script1);\n     return () => {\n      document.body.removeChild(script1);\n    }\n  })\n  useEffect(() => {\n    import('../scripts/eventbrite.js')\n  })\n  */\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"section\", {\n    sx: {\n      variant: \"section.faq\"\n    },\n    id: \"faq\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Preguntas frecuentes\",\n    slogan: \"\\xBFTienes alguna duda?\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: {\n      display: \"flex\",\n      width: [\"100%\", null, null, \"650px\", \"745px\"],\n      flexDirection: \"column\",\n      mx: \"auto\",\n      my: -4\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    items: faqs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = Faq;\n\nvar _c;\n\n$RefreshReg$(_c, \"Faq\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZhcS5qcz9lYjk2Il0sIm5hbWVzIjpbImZhcXMiLCJ0aXRsZSIsImNvbnRlbnRzIiwiRmFxIiwidmFyaWFudCIsImRpc3BsYXkiLCJ3aWR0aCIsImZsZXhEaXJlY3Rpb24iLCJteCIsIm15Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFTVDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBWkU7QUFDRUMsT0FBSyxFQUFFLHVDQURUO0FBRUVDLFVBQVEsRUFDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEosQ0FEVyxHQWNYO0FBQ0VELE9BQUssRUFBRSxvQ0FEVDtBQUVFQyxVQUFRLEVBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKLENBZFcsRUF1Qlg7QUFDRUQsT0FBSyxFQUFFLDhDQURUO0FBRUVDLFVBQVEsRUFDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEosQ0F2QlcsQ0FBYjtBQThCZSxTQUFTQyxHQUFULEdBQWU7QUFDNUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHRSxTQUNFO0FBQVMsTUFBRSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWI7QUFBeUMsTUFBRSxFQUFDLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsaUVBQUQ7QUFDRSxTQUFLLEVBQUMsc0JBRFI7QUFFRSxVQUFNLEVBQUMseUJBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UscURBQUMsNENBQUQ7QUFDRSxNQUFFLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRkMsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLE9BQXJCLEVBQThCLE9BQTlCLENBRkw7QUFHRkMsbUJBQWEsRUFBRSxRQUhiO0FBSUZDLFFBQUUsRUFBRSxNQUpGO0FBS0ZDLFFBQUUsRUFBRSxDQUFDO0FBTEgsS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UscURBQUMsc0VBQUQ7QUFBVyxTQUFLLEVBQUVULElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQUxGLENBREYsQ0FERjtBQXFCRDtLQXJDdUJHLEciLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvZmFxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcImNvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvblwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuY29uc3QgZmFxcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIsK/UHVlZG8gcGFydGljaXBhciBzaSBubyB0ZW5nbyBlcXVpcG8/XCIsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIENsYXJvIHF1ZSBzaS4gQXB1bnRhdGUgeWEgcXVlIGFxdWVsbG9zIHF1ZSB2YXlhaXMgc2luIHVuIGVxdWlwbyB2YWlzIGFcbiAgICAgICAgZm9ybWFybG8gYWwgaW5pY2lvIGRlbCBoYWNrYXRob24uXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LC8qXG4gIHtcbiAgICB0aXRsZTogXCLCv1F1w6kgc2UgdmEgYSBldmFsdWFyIGRlIGxvcyBwcm95ZWN0b3M/XCIsXG4gICAgY29udGVudHM6IDxkaXY+U2UgdmEgYSBldmFsdWFyLi4uPC9kaXY+LFxuICB9Ki8sXG4gIHtcbiAgICB0aXRsZTogXCLCv05lY2VzaXRvIGxsZXZhciBtaSBwcm9waW8gZXF1aXBvP1wiLFxuICAgIGNvbnRlbnRzOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBTaSwgbmVjZXNpdGFpcyBsbGV2YXIgYXF1ZWxsbyAocG9ydGF0aWwsIHRhYmxldC4uLikgY29uIGxvcyBxdWUgdmF5YWlzIGFcbiAgICAgICAgZGVzYXJyb2xsYXIgdnVlc3Ryb3MgcHJveWVjdG9zLiBObyBuZWNlc2l0YWlzIGxsZXZhciByZWdsZXRhcy4uLlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRlbmdvIG3DoXMgZHVkYXMsIMK/Y29uIHF1acOpbiBwdWVkbyBjb250YWN0YXI/XCIsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+UHVlZGVzIGNvbnRhY3RhciBjb24gbm9zb3Ryb3MgZW4gaW5mb0BoYWNrYXRob25sb3ZlcnMubmV0PC9kaXY+XG4gICAgKSxcbiAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXEoKSB7XG4gIC8qIERFU0NPTUVOVEFSIEVTVE8gUEFSQSBBw5FBRElSIEVMIEZPUk1VTEFSSU8gREUgRVZFTlRCUklURVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQxLnNyYyA9ICdodHRwczovL3d3dy5ldmVudGJyaXRlLmVzL3N0YXRpYy93aWRnZXRzL2ViX3dpZGdldHMuanMnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQxKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcmlwdDEpO1xuICAgIH1cbiAgfSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbXBvcnQoJy4uL3NjcmlwdHMvZXZlbnRicml0ZS5qcycpXG4gIH0pXG4gICovXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiBcInNlY3Rpb24uZmFxXCIgfX0gaWQ9XCJmYXFcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgdGl0bGU9XCJQcmVndW50YXMgZnJlY3VlbnRlc1wiXG4gICAgICAgICAgc2xvZ2FuPVwiwr9UaWVuZXMgYWxndW5hIGR1ZGE/XCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIG51bGwsIG51bGwsIFwiNjUwcHhcIiwgXCI3NDVweFwiXSxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICBteTogLTQsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2ZhcXN9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/faq.js\n");

/***/ })

})