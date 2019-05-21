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

      for (var i = 0; i < _data_bert_lime_grouped_pretty__WEBPACK_IMPORTED_MODULE_7__["data"].length; i++) {
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
      sorted = sorted.slice().reverse();
      console.log(sorted);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1078375095",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkUyQixBQUdtQyxBQUliLEFBV0UsU0FSbUIsYUFOUCx1QkFDekIsOEJBY0Esb0ZBUmUsYUFDRyxnQkFDbUIsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vZGF0YS9iZXJ0X2xpbWVfZ3JvdXBlZF9wcmV0dHknXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi4vZGF0YS9zYW1wbGVfbW92aWVfaW5mby5qcydcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJ1xuXG5sZXQgY2xhc3NfbGFiZWxzID0gWyduZWdhdGl2ZScsICdwb3NpdGl2ZSddXG5sZXQgcmVkID0gY2hyb21hKCdyZWQnKS5sdW1pbmFuY2UoMC4zNSlcbmxldCBibHVlID0gY2hyb21hKCdibHVlJykubHVtaW5hbmNlKDAuMzUpXG5sZXQgc2NhbGVSZWQgPSBjaHJvbWEuc2NhbGUoWyd3aGl0ZScsIHJlZF0pLm1vZGUoJ2xjaCcpXG5sZXQgc2NhbGVCbHVlID0gY2hyb21hLnNjYWxlKFsnd2hpdGUnLCBibHVlXSkubW9kZSgnbGNoJylcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBsZXQgYm94ZWQgPSBkYXRhLnJlZHVjZSgoZGljdCwgY3VycmVudCkgPT4ge1xuICAgIC8vICAgbGV0IHNsaWNlID0gT2JqZWN0LmFzc2lnbih7fSwgZGljdClcbiAgICAvLyAgIGlmIChzbGljZVtjdXJyZW50LnVybF0gPT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICBzbGljZVtjdXJyZW50LnVybF0gPSAnZXhpc3RzJ1xuICAgIC8vICAgfVxuICAgIC8vICAgcmV0dXJuIHNsaWNlXG4gICAgLy8gfSwge30pXG4gICAgLy8gbGV0IG1vdmllX2tleXMgPSBPYmplY3Qua2V5cyhib3hlZClcbiAgICAvLyB2YXIgcHJvbWlzZXMgPSBtb3ZpZV9rZXlzLm1hcCgoaywgaSkgPT4ge1xuICAgIC8vICAgcmV0dXJuIGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9YWY0YWJkNjUmaT0ke2t9YClcbiAgICAvLyAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAvLyAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgLy8gICAgICAgbGV0IG9nX2lkID0ga1xuICAgIC8vICAgICAgIGlmIChqc29uLlRpdGxlID09PSAnI0RVUEUjJykge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZldGNoKFxuICAgIC8vICAgICAgICAgICBgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWFmNGFiZDY1Jmk9JHtqc29uLmltZGJJRH1gXG4gICAgLy8gICAgICAgICApXG4gICAgLy8gICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLy8gICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgIC8vICAgICAgICAgICAgIGxldCBqc29uX21vZCA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24pXG4gICAgLy8gICAgICAgICAgICAganNvbl9tb2Qub2dfaWQgPSBvZ19pZFxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBqc29uX21vZFxuICAgIC8vICAgICAgICAgICB9KVxuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBsZXQganNvbl9tb2QgPSBPYmplY3QuYXNzaWduKHt9LCBqc29uKVxuICAgIC8vICAgICAgICAganNvbl9tb2Qub2dfaWQgPSBvZ19pZFxuICAgIC8vICAgICAgICAgcmV0dXJuIGpzb25fbW9kXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vIH0pXG4gICAgLy8gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xuICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXG4gICAgLy8gfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc29ydGVkID0gaW5mby5tYXAobyA9PiB7XG4gICAgICByZXR1cm4geyB0aXRsZTogby5UaXRsZSwgaWQ6IG8ub2dfaWQsIGNoaWxkcmVuOiBbXSB9XG4gICAgfSlcbiAgICBsZXQgaWRzID0gc29ydGVkLm1hcChvID0+IG8uaWQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbyA9IGRhdGFbaV1cbiAgICAgIGxldCBpZCA9IG8udXJsXG4gICAgICBsZXQgaW5kZXggPSBpZHMuaW5kZXhPZihpZClcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21pc3MnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc29ydGVkW2luZGV4XS5jaGlsZHJlbi5wdXNoKG8pXG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRlZCA9IF8uc29ydEJ5KHNvcnRlZCwgW1xuICAgICAgZnVuY3Rpb24obykge1xuICAgICAgICByZXR1cm4gby5jaGlsZHJlbi5sZW5ndGhcbiAgICAgIH0sXG4gICAgXSlcbiAgICBzb3J0ZWQgPSBzb3J0ZWQuc2xpY2UoKS5yZXZlcnNlKClcbiAgICBjb25zb2xlLmxvZyhzb3J0ZWQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJyxcbiAgICAgICAgICAgICAgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJyxcbiAgICAgICAgICAgICAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxuICAgICAgICAgICAgICBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIHdpZHRoOiAyMCAqIDIwLCBtYXJnaW46IGAyMHB4IGF1dG8gNDBweGAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAge3NjYWxlUmVkXG4gICAgICAgICAgICAgIC5jb2xvcnMoMTApXG4gICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgLm1hcChjID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCwgYmFja2dyb3VuZDogYyB9fSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIHtzY2FsZUJsdWUuY29sb3JzKDEwKS5tYXAoYyA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwLCBiYWNrZ3JvdW5kOiBjIH19IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzb3J0ZWQubWFwKG8gPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1heFdpZHRoOiA2NjAsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IGAxMHB4IDIwcHhgLFxuICAgICAgICAgICAgICBtYXJnaW46IGAwIGF1dG8gMjBweGAsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntvLnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57by5jaGlsZHJlbi5sZW5ndGh9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtvLmNoaWxkcmVuLm1hcChyID0+IHtcbiAgICAgICAgICAgICAgbGV0IHdpbm5lcl9uYW1lID0gci5jbGFzc1xuICAgICAgICAgICAgICBsZXQgd2lubmVyX2luZGV4LCBzY2FsZVdpbm5lciwgc2NhbGVMb3NlclxuICAgICAgICAgICAgICBpZiAoci5jbGFzc19wcm9iYWJpbGl0aWVzWzFdID4gci5jbGFzc19wcm9iYWJpbGl0aWVzWzBdKSB7XG4gICAgICAgICAgICAgICAgd2lubmVyX2luZGV4ID0gMVxuICAgICAgICAgICAgICAgIHNjYWxlV2lubmVyID0gc2NhbGVCbHVlXG4gICAgICAgICAgICAgICAgc2NhbGVMb3NlciA9IHNjYWxlUmVkXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lubmVyX2luZGV4ID0gMFxuICAgICAgICAgICAgICAgIHNjYWxlV2lubmVyID0gc2NhbGVSZWRcbiAgICAgICAgICAgICAgICBzY2FsZUxvc2VyID0gc2NhbGVCbHVlXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgbWF4ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoXy5taW4oci5saW1lX3Njb3JlcykpLFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKF8ubWF4KHIubGltZV9zY29yZXMpKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gc2NhbGVTY29yZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZVJlZChNYXRoLmFicyh2YWx1ZSkgLyBtYXgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZUJsdWUoTWF0aC5hYnModmFsdWUpIC8gbWF4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlLyR7ci51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgPntgaHR0cHM6Ly93d3cuaW1kYi5jb20vdGl0bGUvJHtyLnVybH1gfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBgMTBweCAwIDEwcHggMGAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtyLmxpbWVfdG9rZW5zLm1hcCgodCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHIubGltZV9zY29yZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjYWxlU2NvcmUoc2NvcmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dH0gKHtyLmxpbWVfc2NvcmVzW2ldfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgMWZyKScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2FsZVdpbm5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgci5jbGFzc19wcm9iYWJpbGl0aWVzW3dpbm5lcl9pbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtjbGFzc19sYWJlbHNbd2lubmVyX2luZGV4XX06eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChyLmNsYXNzX3Byb2JhYmlsaXRpZXNbd2lubmVyX2luZGV4XSAqIDEwMCl9JVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHIubGFiZWwgPT09ICdwb3MnID8gc2NhbGVCbHVlKDEpIDogc2NhbGVSZWQoMSksXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7ci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'none',
          width: 20 * 20,
          margin: "20px auto 40px"
        },
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
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
            lineNumber: 104
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
          lineNumber: 107
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
            lineNumber: 109
          },
          __self: this
        });
      }))), sorted.map(function (o) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            maxWidth: 660,
            padding: "10px 20px",
            margin: "0 auto 20px",
            border: 'solid 1px black',
            height: 300,
            overflow: 'auto'
          },
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between'
          },
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, o.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, o.children.length)), o.children.map(function (r) {
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
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              display: 'none'
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            href: "https://www.imdb.com/title/".concat(r.url),
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, "https://www.imdb.com/title/".concat(r.url))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              padding: "10px 0 10px 0"
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, r.lime_tokens.map(function (t, i) {
            var score = r.lime_scores[i];
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              className: "jsx-1078375095",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              style: {
                background: scaleScore(score)
              },
              className: "jsx-1078375095",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
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
              lineNumber: 179
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
              lineNumber: 186
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
              lineNumber: 197
            },
            __self: this
          }, "label: ", r.label)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
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
//# sourceMappingURL=index.js.0e0aab3680c3efba0f99.hot-update.js.map