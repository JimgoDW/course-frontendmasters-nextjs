webpackHotUpdate_N_E("pages/notes",{

/***/ "./pages/notes/index.jsx":
/*!*******************************!*\
  !*** ./pages/notes/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\cijgr\\Documents\\web-development\\jimgo\\repos\\learning\\course-frontendmasters-nextjs\\pages\\notes\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Note = function Note() {
  var notes = new Array(15).fill(1).map(function (e, i) {
    return {
      id: i,
      title: "Note: ".concat(i)
    };
  });
  return __jsx("div", null, __jsx("h1", null, "Notes"), notes.map(function (note, i) {
    return __jsx("ul", null, __jsx("li", {
      key: i + Math.random()
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/notes/[id]",
      as: "/notes/".concat(note.id)
    }, __jsx("a", null, __jsx("strong", null, note.title)))));
  }));
};

_c = Note;
/* harmony default export */ __webpack_exports__["default"] = (Note);

var _c;

$RefreshReg$(_c, "Note");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIk5vdGUiLCJub3RlcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImUiLCJpIiwiaWQiLCJ0aXRsZSIsIm5vdGUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixFQUNYQyxJQURXLENBQ04sQ0FETSxFQUVYQyxHQUZXLENBRVAsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVztBQUFFQyxRQUFFLEVBQUVELENBQU47QUFBU0UsV0FBSyxrQkFBV0YsQ0FBWDtBQUFkLEtBQVg7QUFBQSxHQUZPLENBQWQ7QUFJQSxTQUNFLG1CQUNFLDBCQURGLEVBR0dMLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNLLElBQUQsRUFBT0gsQ0FBUDtBQUFBLFdBQ1Qsa0JBQ0U7QUFBSSxTQUFHLEVBQUVBLENBQUMsR0FBR0ksSUFBSSxDQUFDQyxNQUFMO0FBQWIsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsUUFBRSxtQkFBWUYsSUFBSSxDQUFDRixFQUFqQjtBQUEzQixPQUNFLGlCQUNFLHNCQUFTRSxJQUFJLENBQUNELEtBQWQsQ0FERixDQURGLENBREYsQ0FERixDQURTO0FBQUEsR0FBVixDQUhILENBREY7QUFpQkQsQ0F0QkQ7O0tBQU1SLEk7QUF3QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25vdGVzLjk1NjNkMmYxYjM4MzcyNGFjMjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTm90ZSA9ICgpID0+IHtcclxuICBjb25zdCBub3RlcyA9IG5ldyBBcnJheSgxNSlcclxuICAgIC5maWxsKDEpXHJcbiAgICAubWFwKChlLCBpKSA9PiAoeyBpZDogaSwgdGl0bGU6IGBOb3RlOiAke2l9YCB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+Tm90ZXM8L2gxPlxyXG5cclxuICAgICAge25vdGVzLm1hcCgobm90ZSwgaSkgPT4gKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaSBrZXk9e2kgKyBNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL25vdGVzL1tpZF0nIGFzPXtgL25vdGVzLyR7bm90ZS5pZH1gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e25vdGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=