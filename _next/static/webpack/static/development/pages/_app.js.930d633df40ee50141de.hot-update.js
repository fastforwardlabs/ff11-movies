webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./parts/Static.js":
/*!*************************!*\
  !*** ./parts/Static.js ***!
  \*************************/
/*! exports provided: red, blue, scaleRed, scaleBlue, scaleTextRed, scaleTextBlue, colorExtend, readableSentiment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleRed", function() { return scaleRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBlue", function() { return scaleBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTextRed", function() { return scaleTextRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTextBlue", function() { return scaleTextBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorExtend", function() { return colorExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readableSentiment", function() { return readableSentiment; });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);

var red = chroma_js__WEBPACK_IMPORTED_MODULE_0__('#ffbb3a').luminance(0.4);
var blue = chroma_js__WEBPACK_IMPORTED_MODULE_0__('#3affbb').luminance(0.4);
var scaleRed = chroma_js__WEBPACK_IMPORTED_MODULE_0__["scale"](['#ddd', red]).mode('lch');
var scaleBlue = chroma_js__WEBPACK_IMPORTED_MODULE_0__["scale"](['#ddd', blue]).mode('lch');
var scaleTextRed = chroma_js__WEBPACK_IMPORTED_MODULE_0__["scale"](['white', red]).mode('lch');
var scaleTextBlue = chroma_js__WEBPACK_IMPORTED_MODULE_0__["scale"](['white', blue]).mode('lch');
function colorExtend(color, x0, x1, y0, y1) {
  return "-".concat(x0, "px -").concat(y0, "px 0 ").concat(color, ", ").concat(x1, "px -").concat(y0, "px 0 ").concat(color, ", ").concat(x1, "px ").concat(y1, "px 0 ").concat(color, ", -").concat(x0, "px ").concat(y1, "px 0 ").concat(color);
}
function readableSentiment(value) {
  if (value === 0) {
    return 'all negative';
  } else if (value < 0.1) {
    return 'very negative';
  } else if (value < 0.25) {
    return 'mostly negative';
  } else if (value < 0.5) {
    return 'somewhat negative';
  } else if (value === 0.5) {
    return 'split';
  } else if (value < 0.75) {
    return 'somewhat positive';
  } else if (value < 0.9) {
    return 'mostly positive';
  } else if (value < 1) {
    return 'very positive';
  } else if (value === 1) {
    return 'all positive';
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.930d633df40ee50141de.hot-update.js.map