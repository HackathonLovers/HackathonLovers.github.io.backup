webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ \"./src/components/footer/footer.data.js\");\nvar _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/components/footer/footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\nfunction Footer() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"footer\", {\n    sx: styles.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.footer.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.footer.footerTopArea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (_ref, i) {\n    var header = _ref.header,\n        items = _ref.items;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.footer.menus,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      sx: styles.footer.heading,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 15\n      }\n    }, header), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"nav\", {\n      sx: styles.footer.nav,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 15\n      }\n    }, items.map(function (_ref2, i) {\n      var path = _ref2.path,\n          label = _ref2.label;\n      return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        path: path,\n        key: i,\n        label: label,\n        sx: styles.footer.link,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 19\n        }\n      });\n    })));\n  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    sx: styles.footer.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"Estamos usando como plantilla el\", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    path: \"https://startuplanding.redq.io/\",\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"proyecto App Modern de RedQ, Inc\"), \" que usa React con Next.js.\"));\n}\n_c = Footer;\nvar styles = {\n  footer: {\n    container: {\n      width: '100%',\n      alignItems: 'stretch'\n    },\n    footerTopArea: {\n      borderTop: '1px solid',\n      borderTopColor: 'border_color',\n      display: 'flex',\n      flexWrap: 'wrap',\n      pt: [7, null, 8],\n      pb: ['10px', null, null, '20px'],\n      px: [0, null, null, null, 4]\n    },\n    menus: {\n      // width: ['50%', null, null, '25%'],\n      width: ['100%', null, null, null],\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      flexDirection: 'column',\n      mb: ['40px', null, null, '60px']\n    },\n    heading: {\n      fontSize: [3, null, null, 4],\n      color: 'text_secondary',\n      fontWeight: '500',\n      mb: [3, 4, 5, null, 6],\n      lineHeight: '1.35'\n    },\n    nav: {\n      display: 'flex',\n      justifyContent: 'space-evenly',\n      alignItems: 'center'\n    },\n    link: {\n      fontSize: ['14px', null, 1],\n      color: 'text',\n      fontWeight: 'body',\n      mb: 2,\n      cursor: 'pointer',\n      transition: 'all 0.35s',\n      display: 'block',\n      textDecoration: 'none',\n      lineHeight: [1.5, null, null, 1.6, 1.8],\n      ':hover': {\n        color: 'primary'\n      },\n      ':last-child': {\n        mb: '0px'\n      }\n    },\n    copyright: {\n      fontSize: ['14px', null, 1],\n      width: '100%',\n      textAlign: 'center',\n      p: ['20px 20px'],\n      backgroundColor: '#FCFDFE',\n      color: 'text',\n      a: {\n        textDecoration: 'none',\n        color: '#25CB9E',\n        pl: 1,\n        transition: 'all 0.25s',\n        '&:hover': {\n          color: 'primary'\n        }\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcz83YzhiIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImNvbnRhaW5lciIsImZvb3RlclRvcEFyZWEiLCJtZW51SXRlbXMiLCJtYXAiLCJpIiwiaGVhZGVyIiwiaXRlbXMiLCJtZW51cyIsImhlYWRpbmciLCJuYXYiLCJwYXRoIiwibGFiZWwiLCJsaW5rIiwiY29weXJpZ2h0Iiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJwdCIsInBiIiwicHgiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJtYiIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsInAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhIiwicGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRixNQUFNLENBQUNDLE1BQVAsQ0FBY0UsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxvREFBUyxDQUFDQyxHQUFWLENBQWMsZ0JBQW9CQyxDQUFwQjtBQUFBLFFBQUdDLE1BQUgsUUFBR0Es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QUFFSEssb0JBQWMsRUFBRSxjQUZiO0FBR0hSLGdCQUFVLEVBQUU7QUFIVCxLQWhDQztBQXNDTkgsUUFBSSxFQUFFO0FBQ0pjLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsQ0FBZixDQUROO0FBRUpDLFdBQUssRUFBRSxNQUZIO0FBR0pDLGdCQUFVLEVBQUUsTUFIUjtBQUlKSCxRQUFFLEVBQUUsQ0FKQTtBQUtKSyxZQUFNLEVBQUUsU0FMSjtBQU1KQyxnQkFBVSxFQUFFLFdBTlI7QUFPSmIsYUFBTyxFQUFFLE9BUEw7QUFRSmMsb0JBQWMsRUFBRSxNQVJaO0FBU0pILGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0FUUjtBQVVKLGdCQUFVO0FBQ1JGLGFBQUssRUFBRTtBQURDLE9BVk47QUFhSixxQkFBZTtBQUNiRixVQUFFLEVBQUU7QUFEUztBQWJYLEtBdENBO0FBdUROWixhQUFTLEVBQUU7QUFDVGEsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxDQUFmLENBREQ7QUFFVFosV0FBSyxFQUFFLE1BRkU7QUFHVG1CLGVBQVMsRUFBRSxRQUhGO0FBSVRDLE9BQUMsRUFBRSxDQUFDLFdBQUQsQ0FKTTtBQUtUQyxxQkFBZSxFQUFFLFNBTFI7QUFNVFIsV0FBSyxFQUFFLE1BTkU7QUFPVFMsT0FBQyxFQUFFO0FBQ0RKLHNCQUFjLEVBQUUsTUFEZjtBQUVETCxhQUFLLEVBQUUsU0FGTjtBQUdEVSxVQUFFLEVBQUUsQ0FISDtBQUlETixrQkFBVSxFQUFFLFdBSlg7QUFLRCxtQkFBVztBQUNUSixlQUFLLEVBQUU7QUFERTtBQUxWO0FBUE07QUF2REw7QUFESyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBIZWFkaW5nLCBCb3gsIENvbnRhaW5lciwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2Zvb3Rlci5kYXRhJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5mb290ZXIuY29udGFpbmVyfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJUb3BBcmVhfT5cbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBoZWFkZXIsIGl0ZW1zIH0sIGkpID0+IChcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIubWVudXN9IGtleT17aX0+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMuZm9vdGVyLmhlYWRpbmd9PntoZWFkZXJ9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8bmF2IHN4PXtzdHlsZXMuZm9vdGVyLm5hdn0+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxuICAgICAgICBFc3RhbW9zIHVzYW5kbyBjb21vIHBsYW50aWxsYSBlbFxuICAgICAgICA8TGluayBwYXRoPVwiaHR0cHM6Ly9zdGFydHVwbGFuZGluZy5yZWRxLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIHByb3llY3RvIEFwcCBNb2Rlcm4gZGUgUmVkUSwgSW5jXG4gICAgICAgIDwvTGluaz4gcXVlIHVzYSBSZWFjdCBjb24gTmV4dC5qcy5cbiAgICAgIDwvVGV4dD5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXI6IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgfSxcbiAgICBmb290ZXJUb3BBcmVhOiB7XG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyVG9wQ29sb3I6ICdib3JkZXJfY29sb3InLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXG4gICAgICBwYjogWycxMHB4JywgbnVsbCwgbnVsbCwgJzIwcHgnXSxcbiAgICAgIHB4OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXG4gICAgfSxcbiAgICBtZW51czoge1xuICAgICAgLy8gd2lkdGg6IFsnNTAlJywgbnVsbCwgbnVsbCwgJzI1JSddLFxuICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGxdLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxuICAgIH0sXG5cbiAgICBoZWFkaW5nOiB7XG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgY29sb3I6ICd0ZXh0X3NlY29uZGFyeScsXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIG1iOiBbMywgNCwgNSwgbnVsbCwgNl0sXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4zNScsXG4gICAgfSxcblxuICAgIG5hdjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgbGluazoge1xuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIDFdLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIG1iOiAyLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMzVzJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgbnVsbCwgMS42LCAxLjhdLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgIG1iOiAnMHB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCAxXSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcDogWycyMHB4IDIwcHgnXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGQ0ZERkUnLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGE6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgY29sb3I6ICcjMjVDQjlFJyxcbiAgICAgICAgcGw6IDEsXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/footer/footer.js\n");

/***/ })

})