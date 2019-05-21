webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_bert_lime_grouped_pretty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/bert_lime_grouped_pretty */ "./data/bert_lime_grouped_pretty.js");
/* harmony import */ var _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/sample_movie_info.js */ "./data/sample_movie_info.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/index.js";







var class_labels = ['negative', 'positive'];
var red = chroma_js__WEBPACK_IMPORTED_MODULE_11__('red').luminance(0.35);
var blue = chroma_js__WEBPACK_IMPORTED_MODULE_11__('blue').luminance(0.35);
var scaleRed = chroma_js__WEBPACK_IMPORTED_MODULE_11__["scale"](['white', red]).mode('lch');
var scaleBlue = chroma_js__WEBPACK_IMPORTED_MODULE_11__["scale"](['white', blue]).mode('lch');

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {// let boxed = data.reduce((dict, current) => {
      //   let slice = Object.assign({}, dict)
      //   if (slice[current.url] === undefined) {
      //     slice[current.url] = 'exists'
      //   }
      //   return slice
      // }, {})
      // let movie_keys = Object.keys(boxed)
      // var promises = movie_keys.map((k, i) => {
      //   return fetch(`http://www.omdbapi.com/?apikey=af4abd65&i=${k}`)
      //     .then(r => r.json())
      //     .then(json => {
      //       let og_id = k
      //       if (json.Title === '#DUPE#') {
      //         return fetch(
      //           `http://www.omdbapi.com/?apikey=af4abd65&i=${json.imdbID}`
      //         )
      //           .then(r => r.json())
      //           .then(json => {
      //             let json_mod = Object.assign({}, json)
      //             json_mod.og_id = og_id
      //             return json_mod
      //           })
      //       } else {
      //         let json_mod = Object.assign({}, json)
      //         json_mod.og_id = og_id
      //         return json_mod
      //       }
      //     })
      // })
      // Promise.all(promises).then(function(results) {
      //   console.log(JSON.stringify(results))
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var sorted = _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_8__["info"].map(function (o) {
        return {
          title: o.Title,
          id: o.og_id,
          children: []
        };
      });
      var ids = sorted.map(function (o) {
        return o.id;
      });

      for (var i = 0; i < 200; i++) {
        var o = _data_bert_lime_grouped_pretty__WEBPACK_IMPORTED_MODULE_7__["data"][i];
        var id = o.url;
        var index = ids.indexOf(id);

        if (index === -1) {
          console.log('miss');
        } else {
          sorted[index].children.push(o);
        }
      }

      sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
        return o.children.length;
      }]);
      console.log(sorted);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1078375095",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEUyQixBQUdtQyxBQUliLEFBV0UsU0FSbUIsYUFOUCx1QkFDekIsOEJBY0Esb0ZBUmUsYUFDRyxnQkFDbUIsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vZGF0YS9iZXJ0X2xpbWVfZ3JvdXBlZF9wcmV0dHknXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi4vZGF0YS9zYW1wbGVfbW92aWVfaW5mby5qcydcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJ1xuXG5sZXQgY2xhc3NfbGFiZWxzID0gWyduZWdhdGl2ZScsICdwb3NpdGl2ZSddXG5sZXQgcmVkID0gY2hyb21hKCdyZWQnKS5sdW1pbmFuY2UoMC4zNSlcbmxldCBibHVlID0gY2hyb21hKCdibHVlJykubHVtaW5hbmNlKDAuMzUpXG5sZXQgc2NhbGVSZWQgPSBjaHJvbWEuc2NhbGUoWyd3aGl0ZScsIHJlZF0pLm1vZGUoJ2xjaCcpXG5sZXQgc2NhbGVCbHVlID0gY2hyb21hLnNjYWxlKFsnd2hpdGUnLCBibHVlXSkubW9kZSgnbGNoJylcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBsZXQgYm94ZWQgPSBkYXRhLnJlZHVjZSgoZGljdCwgY3VycmVudCkgPT4ge1xuICAgIC8vICAgbGV0IHNsaWNlID0gT2JqZWN0LmFzc2lnbih7fSwgZGljdClcbiAgICAvLyAgIGlmIChzbGljZVtjdXJyZW50LnVybF0gPT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICBzbGljZVtjdXJyZW50LnVybF0gPSAnZXhpc3RzJ1xuICAgIC8vICAgfVxuICAgIC8vICAgcmV0dXJuIHNsaWNlXG4gICAgLy8gfSwge30pXG4gICAgLy8gbGV0IG1vdmllX2tleXMgPSBPYmplY3Qua2V5cyhib3hlZClcbiAgICAvLyB2YXIgcHJvbWlzZXMgPSBtb3ZpZV9rZXlzLm1hcCgoaywgaSkgPT4ge1xuICAgIC8vICAgcmV0dXJuIGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9YWY0YWJkNjUmaT0ke2t9YClcbiAgICAvLyAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAvLyAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgLy8gICAgICAgbGV0IG9nX2lkID0ga1xuICAgIC8vICAgICAgIGlmIChqc29uLlRpdGxlID09PSAnI0RVUEUjJykge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZldGNoKFxuICAgIC8vICAgICAgICAgICBgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWFmNGFiZDY1Jmk9JHtqc29uLmltZGJJRH1gXG4gICAgLy8gICAgICAgICApXG4gICAgLy8gICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLy8gICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgIC8vICAgICAgICAgICAgIGxldCBqc29uX21vZCA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24pXG4gICAgLy8gICAgICAgICAgICAganNvbl9tb2Qub2dfaWQgPSBvZ19pZFxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBqc29uX21vZFxuICAgIC8vICAgICAgICAgICB9KVxuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBsZXQganNvbl9tb2QgPSBPYmplY3QuYXNzaWduKHt9LCBqc29uKVxuICAgIC8vICAgICAgICAganNvbl9tb2Qub2dfaWQgPSBvZ19pZFxuICAgIC8vICAgICAgICAgcmV0dXJuIGpzb25fbW9kXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vIH0pXG4gICAgLy8gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xuICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXG4gICAgLy8gfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc29ydGVkID0gaW5mby5tYXAobyA9PiB7XG4gICAgICByZXR1cm4geyB0aXRsZTogby5UaXRsZSwgaWQ6IG8ub2dfaWQsIGNoaWxkcmVuOiBbXSB9XG4gICAgfSlcbiAgICBsZXQgaWRzID0gc29ydGVkLm1hcChvID0+IG8uaWQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDA7IGkrKykge1xuICAgICAgbGV0IG8gPSBkYXRhW2ldXG4gICAgICBsZXQgaWQgPSBvLnVybFxuICAgICAgbGV0IGluZGV4ID0gaWRzLmluZGV4T2YoaWQpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtaXNzJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvcnRlZFtpbmRleF0uY2hpbGRyZW4ucHVzaChvKVxuICAgICAgfVxuICAgIH1cbiAgICBzb3J0ZWQgPSBfLnNvcnRCeShzb3J0ZWQsIFtcbiAgICAgIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgcmV0dXJuIG8uY2hpbGRyZW4ubGVuZ3RoXG4gICAgICB9LFxuICAgIF0pXG4gICAgY29uc29sZS5sb2coc29ydGVkKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXG4gICAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXG4gICAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICAgICAgbW9ub3NwYWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCB3aWR0aDogMjAgKiAyMCwgbWFyZ2luOiBgMjBweCBhdXRvIDQwcHhgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIHtzY2FsZVJlZFxuICAgICAgICAgICAgICAuY29sb3JzKDEwKVxuICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgIC5tYXAoYyA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAsIGJhY2tncm91bmQ6IGMgfX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICB7c2NhbGVCbHVlLmNvbG9ycygxMCkubWFwKGMgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCwgYmFja2dyb3VuZDogYyB9fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c29ydGVkLm1hcChvID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXhXaWR0aDogNjYwLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBgMTBweCAyMHB4YCxcbiAgICAgICAgICAgICAgbWFyZ2luOiBgMCBhdXRvIDIwcHhgLFxuICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3Ryb25nPntvLnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7by5jaGlsZHJlbi5tYXAociA9PiB7XG4gICAgICAgICAgICAgIGxldCB3aW5uZXJfbmFtZSA9IHIuY2xhc3NcbiAgICAgICAgICAgICAgbGV0IHdpbm5lcl9pbmRleCwgc2NhbGVXaW5uZXIsIHNjYWxlTG9zZXJcbiAgICAgICAgICAgICAgaWYgKHIuY2xhc3NfcHJvYmFiaWxpdGllc1sxXSA+IHIuY2xhc3NfcHJvYmFiaWxpdGllc1swXSkge1xuICAgICAgICAgICAgICAgIHdpbm5lcl9pbmRleCA9IDFcbiAgICAgICAgICAgICAgICBzY2FsZVdpbm5lciA9IHNjYWxlQmx1ZVxuICAgICAgICAgICAgICAgIHNjYWxlTG9zZXIgPSBzY2FsZVJlZFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbm5lcl9pbmRleCA9IDBcbiAgICAgICAgICAgICAgICBzY2FsZVdpbm5lciA9IHNjYWxlUmVkXG4gICAgICAgICAgICAgICAgc2NhbGVMb3NlciA9IHNjYWxlQmx1ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IG1heCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKF8ubWluKHIubGltZV9zY29yZXMpKSxcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhfLm1heChyLmxpbWVfc2NvcmVzKSlcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIHNjYWxlU2NvcmUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVSZWQoTWF0aC5hYnModmFsdWUpIC8gbWF4KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVCbHVlKE1hdGguYWJzKHZhbHVlKSAvIG1heClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS8ke3IudXJsfWB9XG4gICAgICAgICAgICAgICAgICAgID57YGh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlLyR7ci51cmx9YH08L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogYDEwcHggMCAxMHB4IDBgIH19PlxuICAgICAgICAgICAgICAgICAgICB7ci5saW1lX3Rva2Vucy5tYXAoKHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSByLmxpbWVfc2NvcmVzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2FsZVNjb3JlKHNjb3JlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9ICh7ci5saW1lX3Njb3Jlc1tpXX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDIsIDFmciknLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NhbGVXaW5uZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHIuY2xhc3NfcHJvYmFiaWxpdGllc1t3aW5uZXJfaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2xhc3NfbGFiZWxzW3dpbm5lcl9pbmRleF19OnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoci5jbGFzc19wcm9iYWJpbGl0aWVzW3dpbm5lcl9pbmRleF0gKiAxMDApfSVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgICByLmxhYmVsID09PSAncG9zJyA/IHNjYWxlQmx1ZSgxKSA6IHNjYWxlUmVkKDEpLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge3IubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'none',
          width: 20 * 20,
          margin: "20px auto 40px"
        },
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, scaleRed.colors(10).reverse().map(function (c) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            height: 20,
            width: 20,
            background: c
          },
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, scaleBlue.colors(10).map(function (c) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            height: 20,
            width: 20,
            background: c
          },
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        });
      }))), sorted.map(function (o) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            maxWidth: 660,
            padding: "10px 20px",
            margin: "0 auto 20px",
            border: 'solid 1px black'
          },
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, o.title)), o.children.map(function (r) {
          var winner_name = r.class;
          var winner_index, scaleWinner, scaleLoser;

          if (r.class_probabilities[1] > r.class_probabilities[0]) {
            winner_index = 1;
            scaleWinner = scaleBlue;
            scaleLoser = scaleRed;
          } else {
            winner_index = 0;
            scaleWinner = scaleRed;
            scaleLoser = scaleBlue;
          }

          var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_9__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_9__["max"](r.lime_scores)));

          function scaleScore(value) {
            if (value < 0) {
              return scaleRed(Math.abs(value) / max);
            } else {
              return scaleBlue(Math.abs(value) / max);
            }
          }

          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {},
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              display: 'none'
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            href: "https://www.imdb.com/title/".concat(r.url),
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, "https://www.imdb.com/title/".concat(r.url))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              padding: "10px 0 10px 0"
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, r.lime_tokens.map(function (t, i) {
            var score = r.lime_scores[i];
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              className: "jsx-1078375095",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              style: {
                background: scaleScore(score)
              },
              className: "jsx-1078375095",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 162
              },
              __self: this
            }, t, " (", r.lime_scores[i], ")"), ' ');
          })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              marginBottom: 20,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)'
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              padding: 10,
              background: scaleWinner(r.class_probabilities[winner_index])
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }, class_labels[winner_index], ":", ' ', Math.round(r.class_probabilities[winner_index] * 100), "%"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              padding: 10,
              background: r.label === 'pos' ? scaleBlue(1) : scaleRed(1)
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }, "label: ", r.label)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }));
        }));
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6d9047c8db0556e8f313.hot-update.js.map