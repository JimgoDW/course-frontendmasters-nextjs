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
    return __jsx("ul", {
      key: i
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: i + Math.random(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIk5vdGUiLCJub3RlcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImUiLCJpIiwiaWQiLCJ0aXRsZSIsIm5vdGUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixFQUNYQyxJQURXLENBQ04sQ0FETSxFQUVYQyxHQUZXLENBRVAsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVztBQUFFQyxRQUFFLEVBQUVELENBQU47QUFBU0UsV0FBSyxrQkFBV0YsQ0FBWDtBQUFkLEtBQVg7QUFBQSxHQUZPLENBQWQ7QUFJQSxTQUNFLG1CQUNFLDBCQURGLEVBR0dMLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNLLElBQUQsRUFBT0gsQ0FBUDtBQUFBLFdBQ1Q7QUFBSSxTQUFHLEVBQUVBO0FBQVQsT0FDRSxrQkFDRSxNQUFDLGdEQUFEO0FBQ0UsU0FBRyxFQUFFQSxDQUFDLEdBQUdJLElBQUksQ0FBQ0MsTUFBTCxFQURYO0FBRUUsVUFBSSxFQUFDLGFBRlA7QUFHRSxRQUFFLG1CQUFZRixJQUFJLENBQUNGLEVBQWpCO0FBSEosT0FLRSxpQkFDRSxzQkFBU0UsSUFBSSxDQUFDRCxLQUFkLENBREYsQ0FMRixDQURGLENBREYsQ0FEUztBQUFBLEdBQVYsQ0FISCxDQURGO0FBcUJELENBMUJEOztLQUFNUixJO0FBNEJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ub3Rlcy41YzEzZThkNGVmZWFhZTk0OTJjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE5vdGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgbm90ZXMgPSBuZXcgQXJyYXkoMTUpXHJcbiAgICAuZmlsbCgxKVxyXG4gICAgLm1hcCgoZSwgaSkgPT4gKHsgaWQ6IGksIHRpdGxlOiBgTm90ZTogJHtpfWAgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPk5vdGVzPC9oMT5cclxuXHJcbiAgICAgIHtub3Rlcy5tYXAoKG5vdGUsIGkpID0+IChcclxuICAgICAgICA8dWwga2V5PXtpfT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBrZXk9e2kgKyBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgIGhyZWY9Jy9ub3Rlcy9baWRdJ1xyXG4gICAgICAgICAgICAgIGFzPXtgL25vdGVzLyR7bm90ZS5pZH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntub3RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9