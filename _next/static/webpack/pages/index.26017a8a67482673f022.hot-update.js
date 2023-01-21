webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/info.js":
/*!******************************!*\
  !*** ./src/sections/info.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Banner; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/background-sections/bg-red-circles.png */ \"./src/assets/background-sections/bg-red-circles.png\");\n/* harmony import */ var assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var assets_sponsor_dropbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/sponsor/dropbox.svg */ \"./src/assets/sponsor/dropbox.svg\");\n/* harmony import */ var assets_sponsor_dropbox_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_sponsor_dropbox_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var assets_sponsor_google_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/sponsor/google.svg */ \"./src/assets/sponsor/google.svg\");\n/* harmony import */ var assets_sponsor_google_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_sponsor_google_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_sponsor_paypal_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/sponsor/paypal.svg */ \"./src/assets/sponsor/paypal.svg\");\n/* harmony import */ var assets_sponsor_paypal_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_sponsor_paypal_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/sections/info.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n// import BannerBG from 'assets/bannerBg.png';\n// import BannerBG from 'assets/mac-bg.png';\n\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  path: \"#\",\n  image: assets_sponsor_paypal_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  title: \"paypal\"\n}, {\n  id: 2,\n  path: \"#\",\n  image: assets_sponsor_google_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n  title: \"google\"\n}, {\n  id: 3,\n  path: \"#\",\n  image: assets_sponsor_dropbox_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n  title: \"dropbox\"\n}];\nfunction Banner() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      videoOpen = _useState[0],\n      setVideoOpen = _useState[1];\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    setVideoOpen(true);\n  };\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"section\", {\n    sx: styles.banner,\n    id: \"inicio\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    sx: styles.banner.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n    sx: styles.banner.contentBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Heading\"], {\n    as: \"h1\",\n    variant: \"heroPrimary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, \"Participa en el Hackathon de Hackathon Lovers\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    as: \"p\",\n    variant: \"heroSecondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"Este es el hackathon que siempre quisimos montar y que nunca pudimos hacer. Pero esta es nuestra oportunidad y no la vamos a desaprovechar.\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n    variant: \"whiteButton\",\n    \"aria-label\": \"Reg\\xEDstrate ya\",\n    as: components_link__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n    path: \"https://www.eventbrite.es/e/499679263127/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Ver evento en Eventbrite\")))));\n}\n\n_s(Banner, \"fjrTXSMqqo5cVpzR03nEXJYpFAo=\");\n\n_c = Banner;\nvar styles = {\n  banner: {\n    overflow: [\"hidden\", \"initial\", null, \"hidden\"],\n    backgroundImage: \"url(\".concat(assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1___default.a, \")\"),\n    backgroundRepeat: \"no-repeat\",\n    backgroundPosition: \"top left\",\n    backgroundSize: \"cover\",\n    borderBottomRightRadius: [100, 150, null, null, null, 250],\n    pt: [\"150px\", null, null, null, null, null, \"140px\", \"130px\"],\n    pb: [\"100px\", null, null, \"110px\", null, 10, \"150px\"],\n    backgroundColor: \"primary\",\n    container: {\n      display: \"flex\"\n    },\n    contentBox: {\n      // width: [\"100%\", null, \"85%\", \"55%\", \"50%\", \"55%\"],\n      width: \"100%\",\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\",\n      flexShrink: 0,\n      pt: [0, null, null, null, null, null, 5, 7],\n      // Añadidos\n      textAlign: \"center\"\n    },\n    imageBox: {\n      display: [\"none\", null, null, \"block\"],\n      justifyContent: \"center\",\n      ml: [0, null, null, \"-110px\", \"-115px\", \"-150px\", \"-210px\", \"-270px\"],\n      // mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],\n      mt: [0, null, null, \"40px\", 4, 7, 0],\n      mb: [0, null, null, null, \"-45px\", \"-70px\", null, \"-115px\"],\n      overflow: \"hidden\",\n      textAlign: \"right\",\n      width: \"100%\"\n    }\n  },\n  sponsorTitle: {\n    color: \"white\",\n    fontSize: [1, 2],\n    opacity: 0.6,\n    pr: 20,\n    flexShrink: 0,\n    pb: [2, null, 0]\n  },\n  sponsorBox: {\n    pt: [\"35px\", null, null, null, null, \"45px\"],\n    flexDirection: [\"column\", null, \"row\"],\n    sponsor: {\n      display: \"flex\",\n      alignItems: \"center\",\n      \"> a\": {\n        mr: [5, null, null, 4, 6],\n        display: \"flex\",\n        \"&:last-of-type\": {\n          mr: 0\n        }\n      }\n    }\n  },\n  register: {\n    textDecoration: 'none',\n    color: \"#FF0F0F\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2luZm8uanM/YTVkMyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJwYXRoIiwiaW1hZ2UiLCJjbGllbnQxIiwidGl0bGUiLCJjbGllbnQyIiwiY2xpZW50MyIsIkJhbm5lciIsInVzZVN0YXRlIiwidmlkZW9PcGVuIiwic2V0VmlkZW9PcGVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJiYW5uZXIiLCJjb250YWluZXIiLCJjb250ZW50Qm94IiwiTGluayIsIm92ZXJmbG93IiwiYmFja2dyb3VuZEltYWdlIiwiQmFubmVyQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsInB0IiwicGIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5Iiwid2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJpbWFnZUJveCIsImp1c3RpZnlDb250ZW50IiwibWwiLCJtdCIsIm1iIiwic3BvbnNvclRpdGxlIiwiY29sb3IiLCJmb250U2l6ZSIsIm9wYWNpdHkiLCJwciIsInNwb25zb3JCb3giLCJzcG9uc29yIiwibXIiLCJyZWdpc3RlciIsInRleHREZWNvcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLEdBRlI7QUFHRUMsT0FBSyxFQUFFQyxnRUFIVDtBQUlFQyxPQUFLLEVBQUU7QUFKVCxDQURXLEVBT1g7QUFDRUosSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLEdBRlI7QUFHRUMs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QTJCLElBQTNCLEVBQWlDLE1BQWpDLENBRE07QUFFVkssaUJBQWEsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLEtBQWpCLENBRkw7QUFHVmUsV0FBTyxFQUFFO0FBQ1BqQixhQUFPLEVBQUUsTUFERjtBQUVQRyxnQkFBVSxFQUFFLFFBRkw7QUFHUCxhQUFPO0FBQ0xlLFVBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQURDO0FBRUxsQixlQUFPLEVBQUUsTUFGSjtBQUdMLDBCQUFrQjtBQUNoQmtCLFlBQUUsRUFBRTtBQURZO0FBSGI7QUFIQTtBQUhDLEdBN0NDO0FBNERiQyxVQUFRLEVBQUU7QUFDUkMsa0JBQWMsRUFBRSxNQURSO0FBRVJSLFNBQUssRUFBRTtBQUZDO0FBNURHLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvaW5mby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuLy8gaW1wb3J0IEJhbm5lckJHIGZyb20gJ2Fzc2V0cy9iYW5uZXJCZy5wbmcnO1xuLy8gaW1wb3J0IEJhbm5lckJHIGZyb20gJ2Fzc2V0cy9tYWMtYmcucG5nJztcbmltcG9ydCBCYW5uZXJCRyBmcm9tIFwiYXNzZXRzL2JhY2tncm91bmQtc2VjdGlvbnMvYmctcmVkLWNpcmNsZXMucG5nXCI7XG5pbXBvcnQgY2xpZW50MyBmcm9tIFwiYXNzZXRzL3Nwb25zb3IvZHJvcGJveC5zdmdcIjtcbmltcG9ydCBjbGllbnQyIGZyb20gXCJhc3NldHMvc3BvbnNvci9nb29nbGUuc3ZnXCI7XG5pbXBvcnQgY2xpZW50MSBmcm9tIFwiYXNzZXRzL3Nwb25zb3IvcGF5cGFsLnN2Z1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENvbnRhaW5lciwgRmxleCwgSGVhZGluZywgVGV4dCwganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBwYXRoOiBcIiNcIixcbiAgICBpbWFnZTogY2xpZW50MSxcbiAgICB0aXRsZTogXCJwYXlwYWxcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHBhdGg6IFwiI1wiLFxuICAgIGltYWdlOiBjbGllbnQyLFxuICAgIHRpdGxlOiBcImdvb2dsZVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgcGF0aDogXCIjXCIsXG4gICAgaW1hZ2U6IGNsaWVudDMsXG4gICAgdGl0bGU6IFwiZHJvcGJveFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xuICBjb25zdCBbdmlkZW9PcGVuLCBzZXRWaWRlb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFZpZGVvT3Blbih0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmJhbm5lcn0gaWQ9XCJpbmljaW9cIj5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5iYW5uZXIuY29udGFpbmVyfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XG4gICAgICAgICAgICBQYXJ0aWNpcGEgZW4gZWwgSGFja2F0aG9uIGRlIEhhY2thdGhvbiBMb3ZlcnNcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIEVzdGUgZXMgZWwgaGFja2F0aG9uIHF1ZSBzaWVtcHJlIHF1aXNpbW9zIG1vbnRhciB5IHF1ZSBudW5jYSBwdWRpbW9zIGhhY2VyLiBQZXJvIGVzdGEgZXMgbnVlc3RyYSBvcG9ydHVuaWRhZCB5IG5vIGxhIHZhbW9zIGEgZGVzYXByb3ZlY2hhci5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZUJ1dHRvblwiIGFyaWEtbGFiZWw9XCJSZWfDrXN0cmF0ZSB5YVwiXG4gICAgICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgICAgICBwYXRoPVwiaHR0cHM6Ly93d3cuZXZlbnRicml0ZS5lcy9lLzQ5OTY3OTI2MzEyNy9cIj5cbiAgICAgICAgICAgICAgVmVyIGV2ZW50byBlbiBFdmVudGJyaXRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIHsvKiA8PlxuICAgICAgICAgICAgICA8TW9kYWxWaWRlb1xuICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcbiAgICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cbiAgICAgICAgICAgICAgICB2aWRlb0lkPVwiWk5BOXJtRHNZVkVcIlxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIldhdGNoIFZpZGVvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYVBsYXlDaXJjbGUgLz4gV2F0Y2ggVmlkZW9cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz4gKi99XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIHsvKiA8RmxleCBzeD17c3R5bGVzLnNwb25zb3JCb3h9PlxuICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5zcG9uc29yVGl0bGV9PlNwb25zb3JlZCBieTo8L1RleHQ+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc3BvbnNvckJveC5zcG9uc29yfT5cbiAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9e2l0ZW0ucGF0aH0ga2V5PXtgY2xpZW50LWtleSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmxleD4gKi99XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJUaHVtYn0gYWx0PVwiYmFubmVyXCIgd2lkdGg9XCI2MDBcIiAvPlxuICAgICAgICA8L0JveD4gKi99XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYmFubmVyOiB7XG4gICAgb3ZlcmZsb3c6IFtcImhpZGRlblwiLCBcImluaXRpYWxcIiwgbnVsbCwgXCJoaWRkZW5cIl0sXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QmFubmVyQkd9KWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcInRvcCBsZWZ0XCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogWzEwMCwgMTUwLCBudWxsLCBudWxsLCBudWxsLCAyNTBdLFxuICAgIHB0OiBbXCIxNTBweFwiLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBcIjE0MHB4XCIsIFwiMTMwcHhcIl0sXG4gICAgcGI6IFtcIjEwMHB4XCIsIG51bGwsIG51bGwsIFwiMTEwcHhcIiwgbnVsbCwgMTAsIFwiMTUwcHhcIl0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInByaW1hcnlcIixcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIH0sXG4gICAgY29udGVudEJveDoge1xuICAgICAgLy8gd2lkdGg6IFtcIjEwMCVcIiwgbnVsbCwgXCI4NSVcIiwgXCI1NSVcIiwgXCI1MCVcIiwgXCI1NSVcIl0sXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNSwgN10sXG4gICAgICAvLyBBw7FhZGlkb3NcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIGltYWdlQm94OiB7XG4gICAgICBkaXNwbGF5OiBbXCJub25lXCIsIG51bGwsIG51bGwsIFwiYmxvY2tcIl0sXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgXCItMTEwcHhcIiwgXCItMTE1cHhcIiwgXCItMTUwcHhcIiwgXCItMjEwcHhcIiwgXCItMjcwcHhcIl0sXG4gICAgICAvLyBtcjogWzAsIG51bGwsIG51bGwsICctMTQ1cHgnLCAnLTE2MHB4JywgJy0xODBweCcsICctMjIwcHgnLCAnLTI5MHB4J10sXG4gICAgICBtdDogWzAsIG51bGwsIG51bGwsIFwiNDBweFwiLCA0LCA3LCAwXSxcbiAgICAgIG1iOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgXCItNDVweFwiLCBcIi03MHB4XCIsIG51bGwsIFwiLTExNXB4XCJdLFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICB9LFxuICBzcG9uc29yVGl0bGU6IHtcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgb3BhY2l0eTogMC42LFxuICAgIHByOiAyMCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHBiOiBbMiwgbnVsbCwgMF0sXG4gIH0sXG4gIHNwb25zb3JCb3g6IHtcbiAgICBwdDogW1wiMzVweFwiLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBcIjQ1cHhcIl0sXG4gICAgZmxleERpcmVjdGlvbjogW1wiY29sdW1uXCIsIG51bGwsIFwicm93XCJdLFxuICAgIHNwb25zb3I6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIFwiPiBhXCI6IHtcbiAgICAgICAgbXI6IFs1LCBudWxsLCBudWxsLCA0LCA2XSxcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIFwiJjpsYXN0LW9mLXR5cGVcIjoge1xuICAgICAgICAgIG1yOiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZWdpc3Rlcjoge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IFwiI0ZGMEYwRlwiXG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/info.js\n");

/***/ })

})