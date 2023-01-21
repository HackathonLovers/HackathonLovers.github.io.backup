webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ \"./src/components/footer/footer.data.js\");\nvar _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/components/footer/footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\nfunction Footer() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"footer\", {\n    sx: styles.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.footer.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.footer.footerTopArea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (_ref, i) {\n    var header = _ref.header,\n        items = _ref.items;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.footer.menus,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      sx: styles.footer.heading,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 15\n      }\n    }, header), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"nav\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 15\n      }\n    }, items.map(function (_ref2, i) {\n      var path = _ref2.path,\n          label = _ref2.label;\n      return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        path: path,\n        key: i,\n        label: label,\n        sx: styles.footer.link,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 19\n        }\n      });\n    })));\n  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    sx: styles.footer.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"Estamos usando como plantilla el\", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    path: \"https://startuplanding.redq.io/\",\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"proyecto App Modern de RedQ, Inc\"), \" que usa React con Next.js.\"));\n}\n_c = Footer;\nvar styles = {\n  footer: {\n    container: {\n      width: '100%',\n      alignItems: 'stretch'\n    },\n    footerTopArea: {\n      borderTop: '1px solid',\n      borderTopColor: 'border_color',\n      display: 'flex',\n      flexWrap: 'wrap',\n      pt: [7, null, 8],\n      pb: ['10px', null, null, '20px'],\n      px: [0, null, null, null, 4]\n    },\n    menus: {\n      width: ['50%', null, null, null],\n      display: 'flex',\n      // flexDirection: 'column',\n      mb: ['40px', null, null, '60px']\n    },\n    heading: {\n      fontSize: [3, null, null, 4],\n      color: 'text_secondary',\n      fontWeight: '500',\n      mb: [3, 4, 5, null, 6],\n      lineHeight: '1.35'\n    },\n    link: {\n      fontSize: ['14px', null, 1],\n      color: 'text',\n      fontWeight: 'body',\n      mb: 2,\n      cursor: 'pointer',\n      transition: 'all 0.35s',\n      display: 'block',\n      textDecoration: 'none',\n      lineHeight: [1.5, null, null, 1.6, 1.8],\n      ':hover': {\n        color: 'primary'\n      },\n      ':last-child': {\n        mb: '0px'\n      }\n    },\n    copyright: {\n      fontSize: ['14px', null, 1],\n      width: '100%',\n      textAlign: 'center',\n      p: ['20px 20px'],\n      backgroundColor: '#FCFDFE',\n      color: 'text',\n      a: {\n        textDecoration: 'none',\n        color: '#25CB9E',\n        pl: 1,\n        transition: 'all 0.25s',\n        '&:hover': {\n          color: 'primary'\n        }\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcz83YzhiIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImNvbnRhaW5lciIsImZvb3RlclRvcEFyZWEiLCJtZW51SXRlbXMiLCJtYXAiLCJpIiwiaGVhZGVyIiwiaXRlbXMiLCJtZW51cyIsImhlYWRpbmciLCJwYXRoIiwibGFiZWwiLCJsaW5rIiwiY29weXJpZ2h0Iiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJwdCIsInBiIiwicHgiLCJtYiIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsInAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhIiwicGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRixNQUFNLENBQUNDLE1BQVAsQ0FBY0UsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxvREFBUyxDQUFDQyxHQUFWLENBQWMsZ0JBQW9CQyxDQUFwQjtBQUFBLFFBQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFFBQVdDLEtBQVgsUUFBV0EsS0FBWDtBQUFBLFdB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T0FQTDtBQVFKWSxvQkFBYyxFQUFFLE1BUlo7QUFTSkgsZ0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixFQUFrQixHQUFsQixFQUF1QixHQUF2QixDQVRSO0FBVUosZ0JBQVU7QUFDUkYsYUFBSyxFQUFFO0FBREMsT0FWTjtBQWFKLHFCQUFlO0FBQ2JGLFVBQUUsRUFBRTtBQURTO0FBYlgsS0E3QkE7QUE4Q05WLGFBQVMsRUFBRTtBQUNUVyxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLENBQWYsQ0FERDtBQUVUVixXQUFLLEVBQUUsTUFGRTtBQUdUaUIsZUFBUyxFQUFFLFFBSEY7QUFJVEMsT0FBQyxFQUFFLENBQUMsV0FBRCxDQUpNO0FBS1RDLHFCQUFlLEVBQUUsU0FMUjtBQU1UUixXQUFLLEVBQUUsTUFORTtBQU9UUyxPQUFDLEVBQUU7QUFDREosc0JBQWMsRUFBRSxNQURmO0FBRURMLGFBQUssRUFBRSxTQUZOO0FBR0RVLFVBQUUsRUFBRSxDQUhIO0FBSUROLGtCQUFVLEVBQUUsV0FKWDtBQUtELG1CQUFXO0FBQ1RKLGVBQUssRUFBRTtBQURFO0FBTFY7QUFQTTtBQTlDTDtBQURLLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEhlYWRpbmcsIEJveCwgQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmZvb3Rlci5jb250YWluZXJ9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlclRvcEFyZWF9PlxuICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IGhlYWRlciwgaXRlbXMgfSwgaSkgPT4gKFxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30ga2V5PXtpfT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy5mb290ZXIuaGVhZGluZ30+e2hlYWRlcn08L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxuICAgICAgICBFc3RhbW9zIHVzYW5kbyBjb21vIHBsYW50aWxsYSBlbFxuICAgICAgICA8TGluayBwYXRoPVwiaHR0cHM6Ly9zdGFydHVwbGFuZGluZy5yZWRxLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIHByb3llY3RvIEFwcCBNb2Rlcm4gZGUgUmVkUSwgSW5jXG4gICAgICAgIDwvTGluaz4gcXVlIHVzYSBSZWFjdCBjb24gTmV4dC5qcy5cbiAgICAgIDwvVGV4dD5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXI6IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgfSxcbiAgICBmb290ZXJUb3BBcmVhOiB7XG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyVG9wQ29sb3I6ICdib3JkZXJfY29sb3InLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXG4gICAgICBwYjogWycxMHB4JywgbnVsbCwgbnVsbCwgJzIwcHgnXSxcbiAgICAgIHB4OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXG4gICAgfSxcbiAgICBtZW51czoge1xuICAgICAgd2lkdGg6IFsnNTAlJywgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxuICAgIH0sXG5cbiAgICBoZWFkaW5nOiB7XG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIG1iOiBbMywgNCwgNSwgbnVsbCwgNl0sXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4zNScsXG4gICAgfSxcblxuICAgIGxpbms6IHtcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCAxXSxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBtYjogMixcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIG51bGwsIDEuNiwgMS44XSxcbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtYjogJzBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29weXJpZ2h0OiB7XG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgMV0sXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHA6IFsnMjBweCAyMHB4J10sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkNGREZFJyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBhOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgIGNvbG9yOiAnIzI1Q0I5RScsXG4gICAgICAgIHBsOiAxLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/footer/footer.js\n");

/***/ })

})