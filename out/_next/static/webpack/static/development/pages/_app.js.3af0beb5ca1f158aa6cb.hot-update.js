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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/sample_movie_info.js */ "./data/sample_movie_info.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_16__);









var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/_app.js";






var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_13___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;



var algnames = ['BERT', 'NBSVM'];
var algfiles = ['bert_lime_grouped_pretty.json', 'nbsvm_lime_grouped_pretty.json', 'nbsvm_lime_grouped_pretty_word.json'];

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp).call(this, props));
    _this.state = {
      analyze: true,
      data: null,
      data_select: 0,
      sort: 'reviews',
      review_sort: 'date'
    };
    _this.setAnalyze = _this.setAnalyze.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setReviewSort = _this.setReviewSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setSort = _this.setSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setAlgo = _this.setAlgo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch(linkPrefix + '/static/data/' + algfiles[this.state.data_select]).then(function (r) {
        return r.json();
      }).then(function (r) {
        _this2.setState({
          data: r
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
    key: "render",
    value: function render() {
      var _this$state = this.state,
          analyze = _this$state.analyze,
          data = _this$state.data,
          sort = _this$state.sort,
          review_sort = _this$state.review_sort;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var font_size = 16;
      var line_height = 1.5;
      var grem = font_size * line_height;
      var pathname = this.props.router.pathname;
      var is_topic = pathname.startsWith('/topic');
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3626091583",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3626091583",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;line-height:1.5;background:white;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}a{color:black;}a:hover,button:hover{opacity:0.75;}a.no-opacity-hover:hover,button.no-opacity-hover:hover{opacity:1;}a.no-underline{-webkit-text-decoration:none;text-decoration:none;}a:hover .opacity-inner-hover,button:hover .opacity-inner-hover{opacity:0.75;}button{font:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;background:transparent;cursor:pointer;}button:focus{outline:none;}.hover-block-container .hover-block{display:none;}.hover-block-container:hover .hover-block{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRjJCLEFBR21DLEFBTWIsQUFhRSxBQUdDLEFBSUMsQUFJSCxBQUdXLEFBSVIsQUFHQSxBQVVBLEFBR0EsQUFHQyxTQS9DZ0IsQ0FzQmhDLEVBUkEsQ0FJQSxBQVdBLEFBR29CLEFBVXBCLEFBR0EsQ0FHQSxRQXhEeUIsU0F5Q0gsY0F4Q3RCLEtBZ0NBLENBU2MsWUFDRixVQUNELEVBekJYLE9BMEJ5Qix1QkFDUixlQUNqQix1Q0F0Q2lCLGVBQ0MsZ0JBQ0MsaUJBQ0Msa0JBQ2lCLG1DQUNELGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL25leHQtbW92aWVzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4uL2RhdGEvc2FtcGxlX21vdmllX2luZm8uanMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQtc2VydmVyL2NvbmZpZydcbmxldCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5sZXQgbGlua1ByZWZpeCA9IHB1YmxpY1J1bnRpbWVDb25maWcubGlua1ByZWZpeFxuaW1wb3J0IExpbmsgZnJvbSAnLi4vcGFydHMvUHJlZml4ZWRMaW5rJ1xuaW1wb3J0IEJhciBmcm9tICcuLi9wYXJ0cy9CYXInXG5pbXBvcnQgKiBhcyBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJ1xuXG5sZXQgYWxnbmFtZXMgPSBbJ0JFUlQnLCAnTkJTVk0nXVxubGV0IGFsZ2ZpbGVzID0gW1xuICAnYmVydF9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLFxuICAnbmJzdm1fbGltZV9ncm91cGVkX3ByZXR0eS5qc29uJyxcbiAgJ25ic3ZtX2xpbWVfZ3JvdXBlZF9wcmV0dHlfd29yZC5qc29uJyxcbl1cblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fVxuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIH1cblxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbmFseXplOiB0cnVlLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGRhdGFfc2VsZWN0OiAwLFxuICAgICAgc29ydDogJ3Jldmlld3MnLFxuICAgICAgcmV2aWV3X3NvcnQ6ICdkYXRlJyxcbiAgICB9XG4gICAgdGhpcy5zZXRBbmFseXplID0gdGhpcy5zZXRBbmFseXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFJldmlld1NvcnQgPSB0aGlzLnNldFJldmlld1NvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U29ydCA9IHRoaXMuc2V0U29ydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRBbGdvID0gdGhpcy5zZXRBbGdvLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhLycgKyBhbGdmaWxlc1t0aGlzLnN0YXRlLmRhdGFfc2VsZWN0XSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHIgfSlcbiAgICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhX3NlbGVjdCAhPT0gcHJldlN0YXRlLmRhdGFfc2VsZWN0KSB7XG4gICAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbdGhpcy5zdGF0ZS5kYXRhX3NlbGVjdF0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2V0QW5hbHl6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmFseXplOiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0UmV2aWV3U29ydCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdfc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldFNvcnQodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldEFsZ28oaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZWxlY3Q6IGluZGV4IH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgYW5hbHl6ZSwgZGF0YSwgc29ydCwgcmV2aWV3X3NvcnQgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBmb250X3NpemUgPSAxNlxuICAgIGxldCBsaW5lX2hlaWdodCA9IDEuNVxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG5cbiAgICBsZXQgaXNfdG9waWMgPSBwYXRobmFtZS5zdGFydHNXaXRoKCcvdG9waWMnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLFxuICAgICAgICAgICAgICAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLFxuICAgICAgICAgICAgICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxuICAgICAgICAgICAgICBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIsXG4gICAgICAgICAgYnV0dG9uLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby11bmRlcmxpbmUge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIC5vcGFjaXR5LWlubmVyLWhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrLWNvbnRhaW5lciAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrLWNvbnRhaW5lcjpob3ZlciAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNfdG9waWMgPyAnJyA6ICduby1vcGFjaXR5LWhvdmVyJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBpc190b3BpYyA/ICd1bmRlcmxpbmUnIDogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUZXh0ZmxpeFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtkYXRhID8gKFxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgICAgICAgIGZvbnRfc2l6ZT17Zm9udF9zaXplfVxuICAgICAgICAgICAgICBsaW5lX2hlaWdodD17bGluZV9oZWlnaHR9XG4gICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIGluZm89e2luZm99XG4gICAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICAgIHJldmlld19zb3J0PXtyZXZpZXdfc29ydH1cbiAgICAgICAgICAgICAgc2V0QW5hbHl6ZT17dGhpcy5zZXRBbmFseXplfVxuICAgICAgICAgICAgICBzZXRTb3J0PXt0aGlzLnNldFNvcnR9XG4gICAgICAgICAgICAgIHNldFJldmlld1NvcnQ9e3RoaXMuc2V0UmV2aWV3U29ydH1cbiAgICAgICAgICAgICAgc2V0QWxnbz17dGhpcy5zZXRBbGdvfVxuICAgICAgICAgICAgICBhbGduYW1lcz17YWxnbmFtZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogZ3JlbSAvIDIgfX0+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogMSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgYSBzZW50aW1lbnQgYW5hbHlzaXMgcHJvdG90eXBlIGJ5IENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: 'flex',
          borderBottom: 'solid 1px black'
        },
        className: "jsx-3626091583",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        style: {
          padding: grem / 2,
          display: 'block',
          textDecoration: is_topic ? 'underline' : 'none'
        },
        className: "jsx-3626091583" + " " + ((is_topic ? '' : 'no-opacity-hover') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Textflix"))), data ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        font_size: font_size,
        line_height: line_height,
        grem: grem,
        analyze: analyze,
        data: data,
        info: _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_12__["info"],
        sort: sort,
        review_sort: review_sort,
        setAnalyze: this.setAnalyze,
        setSort: this.setSort,
        setReviewSort: this.setReviewSort,
        setAlgo: this.setAlgo,
        algnames: algnames,
        className: "jsx-3626091583" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: "jsx-3626091583",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          borderTop: 'solid 1px black',
          marginTop: 1
        },
        className: "jsx-3626091583",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "a sentiment analysis prototype by Cloudera Fast Forward Labs"));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.3af0beb5ca1f158aa6cb.hot-update.js.map