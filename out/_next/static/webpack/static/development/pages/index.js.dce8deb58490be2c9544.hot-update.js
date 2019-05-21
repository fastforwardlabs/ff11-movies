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

      sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [{
        function: function _function(o) {
          return o.children.length;
        }
      }]);
      console.log(sorted);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1078375095",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEUyQixBQUdtQyxBQUliLEFBV0UsU0FSbUIsYUFOUCx1QkFDekIsOEJBY0Esb0ZBUmUsYUFDRyxnQkFDbUIsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vZGF0YS9iZXJ0X2xpbWVfZ3JvdXBlZF9wcmV0dHknXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi4vZGF0YS9zYW1wbGVfbW92aWVfaW5mby5qcydcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJ1xuXG5sZXQgY2xhc3NfbGFiZWxzID0gWyduZWdhdGl2ZScsICdwb3NpdGl2ZSddXG5sZXQgcmVkID0gY2hyb21hKCdyZWQnKS5sdW1pbmFuY2UoMC4zNSlcbmxldCBibHVlID0gY2hyb21hKCdibHVlJykubHVtaW5hbmNlKDAuMzUpXG5sZXQgc2NhbGVSZWQgPSBjaHJvbWEuc2NhbGUoWyd3aGl0ZScsIHJlZF0pLm1vZGUoJ2xjaCcpXG5sZXQgc2NhbGVCbHVlID0gY2hyb21hLnNjYWxlKFsnd2hpdGUnLCBibHVlXSkubW9kZSgnbGNoJylcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBsZXQgYm94ZWQgPSBkYXRhLnJlZHVjZSgoZGljdCwgY3VycmVudCkgPT4ge1xuICAgIC8vICAgbGV0IHNsaWNlID0gT2JqZWN0LmFzc2lnbih7fSwgZGljdClcbiAgICAvLyAgIGlmIChzbGljZVtjdXJyZW50LnVybF0gPT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICBzbGljZVtjdXJyZW50LnVybF0gPSAnZXhpc3RzJ1xuICAgIC8vICAgfVxuICAgIC8vICAgcmV0dXJuIHNsaWNlXG4gICAgLy8gfSwge30pXG4gICAgLy8gbGV0IG1vdmllX2tleXMgPSBPYmplY3Qua2V5cyhib3hlZClcbiAgICAvLyB2YXIgcHJvbWlzZXMgPSBtb3ZpZV9rZXlzLm1hcCgoaywgaSkgPT4ge1xuICAgIC8vICAgcmV0dXJuIGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9YWY0YWJkNjUmaT0ke2t9YClcbiAgICAvLyAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAvLyAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgLy8gICAgICAgbGV0IG9nX2lkID0ga1xuICAgIC8vICAgICAgIGlmIChqc29uLlRpdGxlID09PSAnI0RVUEUjJykge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZldGNoKFxuICAgIC8vICAgICAgICAgICBgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWFmNGFiZDY1Jmk9JHtqc29uLmltZGJJRH1gXG4gICAgLy8gICAgICAgICApXG4gICAgLy8gICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLy8gICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgIC8vICAgICAgICAgICAgIGxldCBqc29uX21vZCA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24pXG4gICAgLy8gICAgICAgICAgICAganNvbl9tb2Qub2dfaWQgPSBvZ19pZFxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBqc29uX21vZFxuICAgIC8vICAgICAgICAgICB9KVxuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBsZXQganNvbl9tb2QgPSBPYmplY3QuYXNzaWduKHt9LCBqc29uKVxuICAgIC8vICAgICAgICAganNvbl9tb2Qub2dfaWQgPSBvZ19pZFxuICAgIC8vICAgICAgICAgcmV0dXJuIGpzb25fbW9kXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vIH0pXG4gICAgLy8gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xuICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXG4gICAgLy8gfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc29ydGVkID0gaW5mby5tYXAobyA9PiB7XG4gICAgICByZXR1cm4geyB0aXRsZTogby5UaXRsZSwgaWQ6IG8ub2dfaWQsIGNoaWxkcmVuOiBbXSB9XG4gICAgfSlcbiAgICBsZXQgaWRzID0gc29ydGVkLm1hcChvID0+IG8uaWQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDA7IGkrKykge1xuICAgICAgbGV0IG8gPSBkYXRhW2ldXG4gICAgICBsZXQgaWQgPSBvLnVybFxuICAgICAgbGV0IGluZGV4ID0gaWRzLmluZGV4T2YoaWQpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtaXNzJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvcnRlZFtpbmRleF0uY2hpbGRyZW4ucHVzaChvKVxuICAgICAgfVxuICAgIH1cbiAgICBzb3J0ZWQgPSBfLnNvcnRCeShzb3J0ZWQsIFtcbiAgICAgIHtcbiAgICAgICAgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKVxuICAgIGNvbnNvbGUubG9nKHNvcnRlZClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLFxuICAgICAgICAgICAgICAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLFxuICAgICAgICAgICAgICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgd2lkdGg6IDIwICogMjAsIG1hcmdpbjogYDIwcHggYXV0byA0MHB4YCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICB7c2NhbGVSZWRcbiAgICAgICAgICAgICAgLmNvbG9ycygxMClcbiAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwLCBiYWNrZ3JvdW5kOiBjIH19IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAge3NjYWxlQmx1ZS5jb2xvcnMoMTApLm1hcChjID0+IChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAsIGJhY2tncm91bmQ6IGMgfX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NvcnRlZC5tYXAobyA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDY2MCxcbiAgICAgICAgICAgICAgcGFkZGluZzogYDEwcHggMjBweGAsXG4gICAgICAgICAgICAgIG1hcmdpbjogYDAgYXV0byAyMHB4YCxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHN0cm9uZz57by50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge28uY2hpbGRyZW4ubWFwKHIgPT4ge1xuICAgICAgICAgICAgICBsZXQgd2lubmVyX25hbWUgPSByLmNsYXNzXG4gICAgICAgICAgICAgIGxldCB3aW5uZXJfaW5kZXgsIHNjYWxlV2lubmVyLCBzY2FsZUxvc2VyXG4gICAgICAgICAgICAgIGlmIChyLmNsYXNzX3Byb2JhYmlsaXRpZXNbMV0gPiByLmNsYXNzX3Byb2JhYmlsaXRpZXNbMF0pIHtcbiAgICAgICAgICAgICAgICB3aW5uZXJfaW5kZXggPSAxXG4gICAgICAgICAgICAgICAgc2NhbGVXaW5uZXIgPSBzY2FsZUJsdWVcbiAgICAgICAgICAgICAgICBzY2FsZUxvc2VyID0gc2NhbGVSZWRcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5uZXJfaW5kZXggPSAwXG4gICAgICAgICAgICAgICAgc2NhbGVXaW5uZXIgPSBzY2FsZVJlZFxuICAgICAgICAgICAgICAgIHNjYWxlTG9zZXIgPSBzY2FsZUJsdWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBtYXggPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhfLm1pbihyLmxpbWVfc2NvcmVzKSksXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoXy5tYXgoci5saW1lX3Njb3JlcykpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICBmdW5jdGlvbiBzY2FsZVNjb3JlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlUmVkKE1hdGguYWJzKHZhbHVlKSAvIG1heClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlQmx1ZShNYXRoLmFicyh2YWx1ZSkgLyBtYXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cuaW1kYi5jb20vdGl0bGUvJHtyLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICA+e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS8ke3IudXJsfWB9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGAxMHB4IDAgMTBweCAwYCB9fT5cbiAgICAgICAgICAgICAgICAgICAge3IubGltZV90b2tlbnMubWFwKCh0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gci5saW1lX3Njb3Jlc1tpXVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NhbGVTY29yZShzY29yZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fSAoe3IubGltZV9zY29yZXNbaV19KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjYWxlV2lubmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICByLmNsYXNzX3Byb2JhYmlsaXRpZXNbd2lubmVyX2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2NsYXNzX2xhYmVsc1t3aW5uZXJfaW5kZXhdfTp7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKHIuY2xhc3NfcHJvYmFiaWxpdGllc1t3aW5uZXJfaW5kZXhdICogMTAwKX0lXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgci5sYWJlbCA9PT0gJ3BvcycgPyBzY2FsZUJsdWUoMSkgOiBzY2FsZVJlZCgxKSxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtyLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'none',
          width: 20 * 20,
          margin: "20px auto 40px"
        },
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-1078375095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
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
            lineNumber: 105
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
          lineNumber: 108
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
            lineNumber: 110
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
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          className: "jsx-1078375095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
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
              lineNumber: 153
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              display: 'none'
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            href: "https://www.imdb.com/title/".concat(r.url),
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, "https://www.imdb.com/title/".concat(r.url))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              padding: "10px 0 10px 0"
            },
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, r.lime_tokens.map(function (t, i) {
            var score = r.lime_scores[i];
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              className: "jsx-1078375095",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              style: {
                background: scaleScore(score)
              },
              className: "jsx-1078375095",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
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
              lineNumber: 175
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
              lineNumber: 182
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
              lineNumber: 193
            },
            __self: this
          }, "label: ", r.label)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
            className: "jsx-1078375095",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
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
//# sourceMappingURL=index.js.dce8deb58490be2c9544.hot-update.js.map