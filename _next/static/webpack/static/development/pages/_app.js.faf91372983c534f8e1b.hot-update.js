webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/sample_movie_info.js */ "./data/sample_movie_info.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_19__);











var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/_app.js";







var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_15___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;



var algnames = ['NBSVM', 'BERT'];
var algfiles = ['nbsvm_lime_grouped_pretty.json', 'bert_lime_grouped_pretty.json', 'nbsvm_lime_grouped_pretty_word.json'];

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(MyApp, _App);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp).call(this, props));
    _this.state = {
      analyze: false,
      data: null,
      data_select: 1,
      show_accuracy: false,
      sort: 'reviews',
      review_sort: 'date'
    };
    _this.setAnalyze = _this.setAnalyze.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setReviewSort = _this.setReviewSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setAccuracy = _this.setAccuracy.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setSort = _this.setSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setAlgo = _this.setAlgo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch(linkPrefix + '/static/data/' + algfiles[this.state.data_select]).then(function (r) {
        return r.json();
      }).then(function (r) {
        var reviews = r.map(function (r, i) {
          var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, r, index);

          return new_r;
        });

        _this2.setState({
          data: reviews
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (this.state.data_select !== prevState.data_select) {
        fetch(linkPrefix + '/static/data/' + algfiles[this.state.data_select]).then(function (r) {
          return r.json();
        }).then(function (r) {
          _this3.setState({
            data: r
          });
        });
      }
    }
  }, {
    key: "setAnalyze",
    value: function setAnalyze(value) {
      this.setState({
        analyze: value
      });
    }
  }, {
    key: "setReviewSort",
    value: function setReviewSort(value) {
      this.setState({
        review_sort: value
      });
    }
  }, {
    key: "setSort",
    value: function setSort(value) {
      this.setState({
        sort: value
      });
    }
  }, {
    key: "setAlgo",
    value: function setAlgo(index) {
      this.setState({
        data_select: index
      });
    }
  }, {
    key: "setAccuracy",
    value: function setAccuracy(value) {
      this.setState({
        show_accuracy: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          analyze = _this$state.analyze,
          data = _this$state.data,
          sort = _this$state.sort,
          review_sort = _this$state.review_sort,
          show_accuracy = _this$state.show_accuracy;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var font_size = 16;
      var line_height = 1.5;
      var grem = font_size * line_height;
      var pathname = this.props.router.pathname;
      var is_topic = pathname.startsWith('/topic');
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "1027509355",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}html{background:#222;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;line-height:1.5;background:white;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}a,button{color:inherit;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover,button:hover{opacity:0.75;}a.no-opacity-hover:hover,button.no-opacity-hover:hover{opacity:1;}a.no-underline{-webkit-text-decoration:none;text-decoration:none;}.opacity-inner-hover{-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover .opacity-inner-hover,button:hover .opacity-inner-hover{opacity:0.75;}button{font:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;background:transparent;cursor:pointer;}button:focus{outline:none;}.hover-block-container .hover-block{display:block;pointer-events:none;opacity:0;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}.hover-block-container:hover .hover-block{display:block;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRzJCLEFBR21DLEFBSU4sQUFHUCxBQWFFLEFBSUcsQUFLRCxBQUlILEFBR1csQUFHVSxBQUlsQixBQUdBLEFBVUEsQUFHQyxBQU1BLFNBdkRnQixDQXdCaEMsR0FKQSxBQWNBLEFBR29CLEFBVXBCLENBaENpQyxBQW1DWCxBQU1WLEVBN0RaLE1BSnlCLEVBa0V6QixPQW5Cc0IsR0FhVixVQUNxQixDQTVEakMsS0FtQ0EsQ0FZYyxZQUNGLE9BVlosR0FXVyxFQTlCWCxPQStCeUIsRUExQnpCLHFCQTJCaUIsU0FVakIsTUFUQSx1Q0EzQ2lCLGVBQ0MsZ0JBQ0MsaUJBQ0Msa0JBQ2lCLG1DQUNELGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL25leHQtbW92aWVzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4uL2RhdGEvc2FtcGxlX21vdmllX2luZm8uanMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQtc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IHJlZCwgYmx1ZSB9IGZyb20gJy4uL3BhcnRzL1N0YXRpYydcbmxldCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5sZXQgbGlua1ByZWZpeCA9IHB1YmxpY1J1bnRpbWVDb25maWcubGlua1ByZWZpeFxuaW1wb3J0IExpbmsgZnJvbSAnLi4vcGFydHMvUHJlZml4ZWRMaW5rJ1xuaW1wb3J0IEJhciBmcm9tICcuLi9wYXJ0cy9CYXInXG5pbXBvcnQgKiBhcyBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJ1xuXG5sZXQgYWxnbmFtZXMgPSBbJ05CU1ZNJywgJ0JFUlQnXVxubGV0IGFsZ2ZpbGVzID0gW1xuICAnbmJzdm1fbGltZV9ncm91cGVkX3ByZXR0eS5qc29uJyxcbiAgJ2JlcnRfbGltZV9ncm91cGVkX3ByZXR0eS5qc29uJyxcbiAgJ25ic3ZtX2xpbWVfZ3JvdXBlZF9wcmV0dHlfd29yZC5qc29uJyxcbl1cblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fVxuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIH1cblxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbmFseXplOiBmYWxzZSxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBkYXRhX3NlbGVjdDogMSxcbiAgICAgIHNob3dfYWNjdXJhY3k6IGZhbHNlLFxuICAgICAgc29ydDogJ3Jldmlld3MnLFxuICAgICAgcmV2aWV3X3NvcnQ6ICdkYXRlJyxcbiAgICB9XG4gICAgdGhpcy5zZXRBbmFseXplID0gdGhpcy5zZXRBbmFseXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFJldmlld1NvcnQgPSB0aGlzLnNldFJldmlld1NvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWNjdXJhY3kgPSB0aGlzLnNldEFjY3VyYWN5LmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNvcnQgPSB0aGlzLnNldFNvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWxnbyA9IHRoaXMuc2V0QWxnby5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbdGhpcy5zdGF0ZS5kYXRhX3NlbGVjdF0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIGxldCByZXZpZXdzID0gci5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICBsZXQgbmV3X3IgPSBPYmplY3QuYXNzaWduKHt9LCByLCBpbmRleClcbiAgICAgICAgICByZXR1cm4gbmV3X3JcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJldmlld3MgfSlcbiAgICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhX3NlbGVjdCAhPT0gcHJldlN0YXRlLmRhdGFfc2VsZWN0KSB7XG4gICAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbdGhpcy5zdGF0ZS5kYXRhX3NlbGVjdF0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2V0QW5hbHl6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmFseXplOiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0UmV2aWV3U29ydCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdfc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldFNvcnQodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldEFsZ28oaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZWxlY3Q6IGluZGV4IH0pXG4gIH1cblxuICBzZXRBY2N1cmFjeSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2FjY3VyYWN5OiB2YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGFuYWx5emUsIGRhdGEsIHNvcnQsIHJldmlld19zb3J0LCBzaG93X2FjY3VyYWN5IH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgZm9udF9zaXplID0gMTZcbiAgICBsZXQgbGluZV9oZWlnaHQgPSAxLjVcbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuXG4gICAgbGV0IGlzX3RvcGljID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3RvcGljJylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXG4gICAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXG4gICAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSxcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIsXG4gICAgICAgICAgYnV0dG9uLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby11bmRlcmxpbmUge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIC5vcGFjaXR5LWlubmVyLWhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrLWNvbnRhaW5lciAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2stY29udGFpbmVyOmhvdmVyIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjIyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNfdG9waWMgPyAnJyA6ICduby1vcGFjaXR5LWhvdmVyJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogaXNfdG9waWMgPyAncG9pbnRlcicgOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBncmVtLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBncmVtLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYW5hbHl6ZSA/IGJsdWUgOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGFuYWx5emUgPyByZWQgOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNob3dfYWNjdXJhY3kgPyAnI2RkZCcgOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgVGV4dCBGbGlja3NcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSW5mb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiB0aGlzLnN0YXRlLnNob3dfYWNjdXJhY3kgPyBncmVtICogNC41IDogZ3JlbSAqIDQsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhID8gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgICAgICAgICAgZm9udF9zaXplPXtmb250X3NpemV9XG4gICAgICAgICAgICAgICAgbGluZV9oZWlnaHQ9e2xpbmVfaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgICAgYW5hbHl6ZT17YW5hbHl6ZX1cbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIGluZm89e2luZm99XG4gICAgICAgICAgICAgICAgc29ydD17c29ydH1cbiAgICAgICAgICAgICAgICByZXZpZXdfc29ydD17cmV2aWV3X3NvcnR9XG4gICAgICAgICAgICAgICAgc2V0QW5hbHl6ZT17dGhpcy5zZXRBbmFseXplfVxuICAgICAgICAgICAgICAgIHNldFNvcnQ9e3RoaXMuc2V0U29ydH1cbiAgICAgICAgICAgICAgICBzZXRSZXZpZXdTb3J0PXt0aGlzLnNldFJldmlld1NvcnR9XG4gICAgICAgICAgICAgICAgc2V0QWxnbz17dGhpcy5zZXRBbGdvfVxuICAgICAgICAgICAgICAgIGFsZ25hbWVzPXthbGduYW1lc31cbiAgICAgICAgICAgICAgICBkYXRhX3NlbGVjdD17dGhpcy5zdGF0ZS5kYXRhX3NlbGVjdH1cbiAgICAgICAgICAgICAgICBzaG93X2FjY3VyYWN5PXt0aGlzLnN0YXRlLnNob3dfYWNjdXJhY3l9XG4gICAgICAgICAgICAgICAgc2V0QWNjdXJhY3k9e3RoaXMuc2V0QWNjdXJhY3l9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBncmVtIC8gMiB9fT5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          borderBottom: 'solid 1px black',
          background: '#222',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between'
        },
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_17__["default"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
          padding: grem / 2,
          display: 'block',
          cursor: is_topic ? 'pointer' : 'default',
          textDecoration: 'none',
          fontWeight: 700
        }, "display", 'flex'),
        className: "jsx-1027509355" + " " + ((is_topic ? '' : 'no-opacity-hover') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          width: grem,
          height: grem,
          marginRight: grem / 2,
          position: 'relative'
        },
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          width: grem / 2,
          height: grem / 2,
          background: analyze ? _parts_Static__WEBPACK_IMPORTED_MODULE_16__["blue"] : 'white'
        },
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: grem / 2,
          top: 0,
          width: grem / 2,
          height: grem / 2,
          background: analyze ? _parts_Static__WEBPACK_IMPORTED_MODULE_16__["red"] : 'white'
        },
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: grem / 2,
          width: grem / 2,
          height: grem / 2,
          background: show_accuracy ? '#ddd' : 'white'
        },
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })), "Text Flicks")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        style: {
          padding: grem / 2,
          textDecoration: 'underline'
        },
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          paddingBottom: this.state.show_accuracy ? grem * 4.5 : grem * 4
        },
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, data ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        font_size: font_size,
        line_height: line_height,
        grem: grem,
        analyze: analyze,
        data: data,
        info: _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_14__["info"],
        sort: sort,
        review_sort: review_sort,
        setAnalyze: this.setAnalyze,
        setSort: this.setSort,
        setReviewSort: this.setReviewSort,
        setAlgo: this.setAlgo,
        algnames: algnames,
        data_select: this.state.data_select,
        show_accuracy: this.state.show_accuracy,
        setAccuracy: this.setAccuracy,
        className: "jsx-1027509355" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: "jsx-1027509355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Loading...")));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_13___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.faf91372983c534f8e1b.hot-update.js.map