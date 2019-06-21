webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./parts/Static.js":
/*!*************************!*\
  !*** ./parts/Static.js ***!
  \*************************/
/*! exports provided: red, blue, scaleRed, scaleBlue, textred, textblue, scaleTextRed, scaleTextBlue, colorExtend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleRed", function() { return scaleRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBlue", function() { return scaleBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textred", function() { return textred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textblue", function() { return textblue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTextRed", function() { return scaleTextRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTextBlue", function() { return scaleTextBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorExtend", function() { return colorExtend; });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);

var red = chroma_js__WEBPACK_IMPORTED_MODULE_0__('red').luminance(0.4);
var blue = chroma_js__WEBPACK_IMPORTED_MODULE_0__('blue').luminance(0.4);
var scaleRed = chroma_js__WEBPACK_IMPORTED_MODULE_0__["scale"](['white', red]).mode('lch');
var scaleBlue = chroma_js__WEBPACK_IMPORTED_MODULE_0__["scale"](['white', blue]).mode('lch');
var textred = chroma_js__WEBPACK_IMPORTED_MODULE_0__('red').luminance(0.1);
var textblue = chroma_js__WEBPACK_IMPORTED_MODULE_0__('blue').luminance(0.1);
var scaleTextRed = chroma_js__WEBPACK_IMPORTED_MODULE_0__["scale"](['white', textred]).mode('lch');
var scaleTextBlue = chroma_js__WEBPACK_IMPORTED_MODULE_0__["scale"](['white', textblue]).mode('lch');
function colorExtend(color, x0, x1, y0, y1) {
  return "-".concat(x0, "px -").concat(y0, "px 0 ").concat(color, ", ").concat(x1, "px -").concat(y0, "px 0 ").concat(color, ", ").concat(x1, "px ").concat(y1, "px 0 ").concat(color, ", -").concat(x0, "px ").concat(y1, "px 0 ").concat(color);
}

/***/ })

})
//# sourceMappingURL=_app.js.b591fc4b572a9d084e40.hot-update.js.map