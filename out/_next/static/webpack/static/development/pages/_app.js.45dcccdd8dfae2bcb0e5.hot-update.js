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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/_app.js";





var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, null, [{
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
      analyze: false,
      data: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/static/data/bert_lime_grouped_pretty.json').then(function (r) {
        return r.json();
      }).then(function (r) {
        _this2.setState({
          data: r
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          analyze = _this$state.analyze,
          data = _this$state.data;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var font_size = 16;
      var line_height = 1.5;
      var grem = font_size * line_height;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-3562828798",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3562828798",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16;line-height:1.5;background:white;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}a{color:black;}a.no-underline{-webkit-text-decoration:none;text-decoration:none;}a.gray-hover:hover{background:rgba(0,0,0,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QzJCLEFBR21DLEFBTWIsQUFZRSxBQUdDLEFBR1MsQUFHUyxTQWxCQSxHQWFoQyxVQXJCeUIsS0EyQnpCLGtCQTFCQSxLQXVCQSx5QkFOQSxvRkFUZSxhQUNHLGdCQUNDLGlCQUNrQixtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9uZXh0LW1vdmllcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fVxuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIH1cblxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbmFseXplOiBmYWxzZSxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goJy9zdGF0aWMvZGF0YS9iZXJ0X2xpbWVfZ3JvdXBlZF9wcmV0dHkuanNvbicpXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByIH0pXG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGFuYWx5emUsIGRhdGEgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBmb250X3NpemUgPSAxNlxuICAgIGxldCBsaW5lX2hlaWdodCA9IDEuNVxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLFxuICAgICAgICAgICAgICAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLFxuICAgICAgICAgICAgICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICAgICAgbW9ub3NwYWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby11bmRlcmxpbmUge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLmdyYXktaG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPk1vdmllIGFuZCBUViBSZXZpZXcgTWVzc2FnZSBCb2FyZDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgICAgIGZvbnRfc2l6ZT17Zm9udF9zaXplfVxuICAgICAgICAgICAgbGluZV9oZWlnaHQ9e2xpbmVfaGVpZ2h0fVxuICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBhbmFseXplID8gJ29yY2hpZCcgOiAnd2hpdGUnLFxuICAgICAgICAgICAgLy8gY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLFxuICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+U2VudGltZW50IEFuYWx5emVyPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHthbmFseXplID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuYWx5emU6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE9mZlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5hbHl6ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          borderBottom: 'solid 1px black',
          fontWeight: 700
        },
        className: "jsx-3562828798",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        className: "jsx-3562828798",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Movie and TV Review Message Board"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        font_size: font_size,
        line_height: line_height,
        grem: grem,
        analyze: analyze,
        data: data,
        className: "jsx-3562828798" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          fontWeight: 700,
          background: analyze ? 'orchid' : 'white',
          // color: 'white',
          borderTop: 'solid 1px black',
          fontFamily: 'IBM Plex Mono',
          fontSize: 14,
          lineHeight: 1.5,
          textTransform: 'uppercase',
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between'
        },
        className: "jsx-3562828798",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-3562828798",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Sentiment Analyzer"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-3562828798",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, analyze ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: function onClick() {
          _this3.setState({
            analyze: false
          });
        },
        className: "jsx-3562828798",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Off") : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: function onClick() {
          _this3.setState({
            analyze: true
          });
        },
        className: "jsx-3562828798",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "On"))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.45dcccdd8dfae2bcb0e5.hot-update.js.map