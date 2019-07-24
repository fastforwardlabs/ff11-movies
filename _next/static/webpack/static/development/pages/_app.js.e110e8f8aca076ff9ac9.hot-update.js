webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutboundLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick,
          trackerNames = _this$props.trackerNames;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        }, trackerNames);
      } else {
        OutboundLink.trackLink(eventMeta, function () {}, trackerNames);
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OutboundLink, "trackLink", function () {
  Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('ga tracking not enabled');
});

_defineProperty(OutboundLink, "propTypes", {
  eventLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  trackerNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
});

_defineProperty(OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
});



/***/ }),

/***/ "./node_modules/react-ga/dist/esm/core.js":
/*!************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/core.js ***!
  \************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js");
/* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js");
/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js");
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js");
/* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _isNotBrowser =  false || typeof document === 'undefined';

var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"].ga.apply(_utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
  if (_isNotBrowser) return false;
  if (!window.ga) return Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return Object(_utils_format__WEBPACK_IMPORTED_MODULE_0__["default"])(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (_isNotBrowser) {
      return false;
    }

    if (!options || options.standardImplementation !== true) Object(_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (_typeof(config) !== 'object') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(void 0, args);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'arguments\');');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`fieldsObject` is required in .set()');
    return;
  }

  if (_typeof(fieldsObject) !== 'object') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'set\', fieldsObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', fieldObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path is required in .pageview()');
    return;
  }

  var path = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawPath);

  if (path === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = Object(_utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawModalName));

  if (modalName === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` is required in .require()');
        return;
      }

      var name = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawName);

      if (name === '') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` cannot be an empty string in .require()');
        return;
      } // Optional Fields


      if (options) {
        if (_typeof(options) !== 'object') {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga('require', name);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
var testModeAPI = _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  testModeAPI: _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, OutboundLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundLink", function() { return OutboundLink; });
/* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/react-ga/dist/esm/core.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialize = _core__WEBPACK_IMPORTED_MODULE_1__["initialize"];
var ga = _core__WEBPACK_IMPORTED_MODULE_1__["ga"];
var set = _core__WEBPACK_IMPORTED_MODULE_1__["set"];
var send = _core__WEBPACK_IMPORTED_MODULE_1__["send"];
var pageview = _core__WEBPACK_IMPORTED_MODULE_1__["pageview"];
var modalview = _core__WEBPACK_IMPORTED_MODULE_1__["modalview"];
var timing = _core__WEBPACK_IMPORTED_MODULE_1__["timing"];
var event = _core__WEBPACK_IMPORTED_MODULE_1__["event"];
var exception = _core__WEBPACK_IMPORTED_MODULE_1__["exception"];
var plugin = _core__WEBPACK_IMPORTED_MODULE_1__["plugin"];
var outboundLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
var testModeAPI = _core__WEBPACK_IMPORTED_MODULE_1__["testModeAPI"];
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].origTrackLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].trackLink;
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].trackLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
var OutboundLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, _core__WEBPACK_IMPORTED_MODULE_1__, {
  OutboundLink: OutboundLink
}));

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warn; });
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js");
/* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js");
/* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (Object(_mightBeEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(s)) {
    Object(_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return Object(_toTitleCase__WEBPACK_IMPORTED_MODULE_1__["default"])(s);
  }

  return s;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */


  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mightBeEmail; });
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return /[^@]+@[^@]+/.test(s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeLeadingSlash; });
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
/*! exports provided: gaCalls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaCalls", function() { return gaCalls; });
var gaCalls = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push([].concat(args));
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toTitleCase; });
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return Object(_trim__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
/*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trim; });
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/sample_movie_info.js */ "./data/sample_movie_info.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/Utils */ "./parts/Utils.js");
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");
/* harmony import */ var _parts_Tour__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../parts/Tour */ "./parts/Tour.js");
/* harmony import */ var _parts_Analytics__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../parts/Analytics */ "./parts/Analytics.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_20__);








var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/_app.js";













var algnames = ['NBSVM', 'BERT'];
var algfiles = ['nbsvm_lime_500_prototype_pretty.json', 'bert_lime_500_prototype_pretty.json', 'nbsvm_lime_grouped_pretty_word.json'];
var data_keys = [['nbsvm_data', 'nbsvm_lime_500_grouped_pretty.json', 'NBSVM'], ['bert_data', 'bert_lime_500_prototype_pretty.json', 'BERT']];
var linkPrefix = "";

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp).call(this, props));
    _this.state = {
      analyze: true,
      data_select: 1,
      show_accuracy: false,
      sort: 'reviews',
      review_sort: 'date',
      nbsvm_data: null,
      compare: false,
      bert_data: null,
      show_info: false
    };
    _this.setAnalyze = _this.setAnalyze.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setReviewSort = _this.setReviewSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setAccuracy = _this.setAccuracy.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setSort = _this.setSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setAlgo = _this.setAlgo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setCompare = _this.setCompare.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.showInfo = _this.showInfo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, [{
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      fetch(linkPrefix + '/static/data/names_and_dates.json').then(function (nd) {
        return nd.json();
      }).then(function (nd) {
        fetch(linkPrefix + '/static/data/' + algfiles[0]).then(function (r) {
          return r.json();
        }).then(function (r) {
          var reviews = r.map(function (r, i) {
            var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, r);

            new_r.index = i;
            new_r.author = nd[i].author;
            new_r.date = nd[i].date;
            new_r["class"] = r.class_probabilities[0] > r.class_probabilities[1] ? 'neg' : 'pos';
            return new_r;
          });
          var key = data_keys[0][0];

          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, reviews));
        });
        fetch(linkPrefix + '/static/data/' + algfiles[1]).then(function (r) {
          return r.json();
        }).then(function (r) {
          var reviews = r.map(function (r, i) {
            var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, r);

            new_r.index = i;
            new_r.author = nd[i].author;
            new_r.date = nd[i].date;
            new_r["class"] = r.class_probabilities[0] > r.class_probabilities[1] ? 'neg' : 'pos';
            return new_r;
          });
          var key = data_keys[1][0];

          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, reviews));
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      var pathname = this.props.router.pathname;
      var is_front = pathname === '/';
      if (is_front) this.setState({
        show_info: true
      });

      if (!window.GA_INITIALIZED) {
        Object(_parts_Analytics__WEBPACK_IMPORTED_MODULE_19__["initGA"])();
        window.GA_INITIALIZED = true;
      }

      Object(_parts_Analytics__WEBPACK_IMPORTED_MODULE_19__["logPageView"])();
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
    key: "setCompare",
    value: function setCompare(value) {
      this.setState({
        compare: value
      });
    }
  }, {
    key: "showInfo",
    value: function showInfo(value) {
      this.setState({
        show_info: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$state = this.state,
          analyze = _this$state.analyze,
          sort = _this$state.sort,
          review_sort = _this$state.review_sort,
          show_accuracy = _this$state.show_accuracy,
          show_info = _this$state.show_info;
      var data = this.state[data_keys[this.state.data_select][0]];
      if (analyze === false) show_accuracy = false;
      var Component = this.props.Component;
      var font_size = 16;
      var line_height = 1.5;
      var grem = font_size * line_height;
      var pathname = this.props.router.pathname;
      var is_front = pathname === '/';
      var is_topic = pathname.startsWith('/topic');
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "og:title",
        content: "Textflix",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "description",
        content: "Textflix uses movie reviews to show how machine learning can unlock the data embedded in unstructured text.",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "og:description",
        content: "Textflix uses movie reviews to show how machine learning can unlock the data embedded in unstructured text.",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "og:image",
        content: "https://experiments.fastforwardlabs.com/static/images/textflix-screenshot.png",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "og:url",
        content: "https://textflix.fastforwardlabs.com",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2343230763",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}html{background:#222;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;line-height:1.5;background:white;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}p{margin:0;text-indent:1.5rem;}p:first-child{text-indent:0;}a,button{color:inherit;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover,button:hover{opacity:0.75;}a.no-opacity-hover:hover,button.no-opacity-hover:hover{opacity:1;}a.no-underline{-webkit-text-decoration:none;text-decoration:none;}.opacity-inner-hover{-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover .opacity-inner-hover,button:hover .opacity-inner-hover{opacity:0.75;}button{font:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;background:transparent;cursor:pointer;}button:focus{outline:none;}.hover-block{position:absolute;left:0;top:0;right:0;bottom:0;}.hover-block-container .hover-block{display:block;pointer-events:none;opacity:0;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;background:rgba(0,0,0,0.0625);}.hover-block-container:hover .hover-block{display:block;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySzJCLEFBR21DLEFBSU4sQUFHUCxBQWFFLEFBR0YsQUFJSyxBQUlBLEFBS0QsQUFJSCxBQUdXLEFBR1UsQUFJbEIsQUFHQSxBQVVBLEFBR0ssQUFPSixBQU9BLFNBdEVnQixBQWNYLENBaUJyQixHQUpBLEFBY0EsQUFHb0IsQUFVcEIsQ0FwQ0EsQUFJaUMsQUEwQ1gsQUFPVixFQTVFWixFQThEUyxJQWxFZ0IsRUFpRnpCLENBZFEsR0EzQ1IsR0E4QnNCLEFBY1osR0FNRSxLQUxELEtBTXNCLENBMUVqQyxHQXFFQSxFQTNCQSxDQVljLFlBQ0YsT0FWWixHQVdXLEVBckNYLE9Bc0N5QixFQTFCekIscUJBMkJpQixTQWlCa0IsTUFoQm5DLHdCQWlCQSxlQW5FaUIsZUFDQyxnQkFDQyxpQkFDQyxrQkFDaUIsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi4vZGF0YS9zYW1wbGVfbW92aWVfaW5mby5qcydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC1zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgcmVkLCBibHVlLCBCb3JkZXIgfSBmcm9tICcuLi9wYXJ0cy9TdGF0aWMnXG5pbXBvcnQgeyBwIH0gZnJvbSAnLi4vcGFydHMvVXRpbHMnXG5pbXBvcnQgQmFyIGZyb20gJy4uL3BhcnRzL0JhcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vcGFydHMvSGVhZGVyJ1xuaW1wb3J0IFRvdXIgZnJvbSAnLi4vcGFydHMvVG91cidcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuLi9wYXJ0cy9BbmFseXRpY3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5cbmxldCBhbGduYW1lcyA9IFsnTkJTVk0nLCAnQkVSVCddXG5sZXQgYWxnZmlsZXMgPSBbXG4gICduYnN2bV9saW1lXzUwMF9wcm90b3R5cGVfcHJldHR5Lmpzb24nLFxuICAnYmVydF9saW1lXzUwMF9wcm90b3R5cGVfcHJldHR5Lmpzb24nLFxuICAnbmJzdm1fbGltZV9ncm91cGVkX3ByZXR0eV93b3JkLmpzb24nLFxuXVxubGV0IGRhdGFfa2V5cyA9IFtcbiAgWyduYnN2bV9kYXRhJywgJ25ic3ZtX2xpbWVfNTAwX2dyb3VwZWRfcHJldHR5Lmpzb24nLCAnTkJTVk0nXSxcbiAgWydiZXJ0X2RhdGEnLCAnYmVydF9saW1lXzUwMF9wcm90b3R5cGVfcHJldHR5Lmpzb24nLCAnQkVSVCddLFxuXVxuXG5sZXQgbGlua1ByZWZpeCA9IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMXG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5hbHl6ZTogdHJ1ZSxcbiAgICAgIGRhdGFfc2VsZWN0OiAxLFxuICAgICAgc2hvd19hY2N1cmFjeTogZmFsc2UsXG4gICAgICBzb3J0OiAncmV2aWV3cycsXG4gICAgICByZXZpZXdfc29ydDogJ2RhdGUnLFxuICAgICAgbmJzdm1fZGF0YTogbnVsbCxcbiAgICAgIGNvbXBhcmU6IGZhbHNlLFxuICAgICAgYmVydF9kYXRhOiBudWxsLFxuICAgICAgc2hvd19pbmZvOiBmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5zZXRBbmFseXplID0gdGhpcy5zZXRBbmFseXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFJldmlld1NvcnQgPSB0aGlzLnNldFJldmlld1NvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWNjdXJhY3kgPSB0aGlzLnNldEFjY3VyYWN5LmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNvcnQgPSB0aGlzLnNldFNvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWxnbyA9IHRoaXMuc2V0QWxnby5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRDb21wYXJlID0gdGhpcy5zZXRDb21wYXJlLmJpbmQodGhpcylcbiAgICB0aGlzLnNob3dJbmZvID0gdGhpcy5zaG93SW5mby5iaW5kKHRoaXMpXG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgZmV0Y2gobGlua1ByZWZpeCArICcvc3RhdGljL2RhdGEvbmFtZXNfYW5kX2RhdGVzLmpzb24nKVxuICAgICAgLnRoZW4obmQgPT4gbmQuanNvbigpKVxuICAgICAgLnRoZW4obmQgPT4ge1xuICAgICAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbMF0pXG4gICAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgICAudGhlbihyID0+IHtcbiAgICAgICAgICAgIGxldCByZXZpZXdzID0gci5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld19yID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgICAgICAgICAgICAgbmV3X3IuaW5kZXggPSBpXG4gICAgICAgICAgICAgIG5ld19yLmF1dGhvciA9IG5kW2ldLmF1dGhvclxuICAgICAgICAgICAgICBuZXdfci5kYXRlID0gbmRbaV0uZGF0ZVxuICAgICAgICAgICAgICBuZXdfci5jbGFzcyA9XG4gICAgICAgICAgICAgICAgci5jbGFzc19wcm9iYWJpbGl0aWVzWzBdID4gci5jbGFzc19wcm9iYWJpbGl0aWVzWzFdXG4gICAgICAgICAgICAgICAgICA/ICduZWcnXG4gICAgICAgICAgICAgICAgICA6ICdwb3MnXG4gICAgICAgICAgICAgIHJldHVybiBuZXdfclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBrZXkgPSBkYXRhX2tleXNbMF1bMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5XTogcmV2aWV3cyB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhLycgKyBhbGdmaWxlc1sxXSlcbiAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgICAgbGV0IHJldmlld3MgPSByLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3X3IgPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICAgICAgICAgICAgICBuZXdfci5pbmRleCA9IGlcbiAgICAgICAgICAgICAgbmV3X3IuYXV0aG9yID0gbmRbaV0uYXV0aG9yXG4gICAgICAgICAgICAgIG5ld19yLmRhdGUgPSBuZFtpXS5kYXRlXG4gICAgICAgICAgICAgIG5ld19yLmNsYXNzID1cbiAgICAgICAgICAgICAgICByLmNsYXNzX3Byb2JhYmlsaXRpZXNbMF0gPiByLmNsYXNzX3Byb2JhYmlsaXRpZXNbMV1cbiAgICAgICAgICAgICAgICAgID8gJ25lZydcbiAgICAgICAgICAgICAgICAgIDogJ3BvcydcbiAgICAgICAgICAgICAgcmV0dXJuIG5ld19yXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGtleSA9IGRhdGFfa2V5c1sxXVswXVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiByZXZpZXdzIH0pXG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcbiAgICBsZXQgaXNfZnJvbnQgPSBwYXRobmFtZSA9PT0gJy8nXG4gICAgaWYgKGlzX2Zyb250KSB0aGlzLnNldFN0YXRlKHsgc2hvd19pbmZvOiB0cnVlIH0pXG5cbiAgICBpZiAoIXdpbmRvdy5HQV9JTklUSUFMSVpFRCkge1xuICAgICAgaW5pdEdBKClcbiAgICAgIHdpbmRvdy5HQV9JTklUSUFMSVpFRCA9IHRydWVcbiAgICB9XG4gICAgbG9nUGFnZVZpZXcoKVxuICB9XG5cbiAgc2V0QW5hbHl6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmFseXplOiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0UmV2aWV3U29ydCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdfc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldFNvcnQodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldEFsZ28oaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZWxlY3Q6IGluZGV4IH0pXG4gIH1cblxuICBzZXRBY2N1cmFjeSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2FjY3VyYWN5OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0Q29tcGFyZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYXJlOiB2YWx1ZSB9KVxuICB9XG5cbiAgc2hvd0luZm8odmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd19pbmZvOiB2YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGFuYWx5emUsIHNvcnQsIHJldmlld19zb3J0LCBzaG93X2FjY3VyYWN5LCBzaG93X2luZm8gfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZVtkYXRhX2tleXNbdGhpcy5zdGF0ZS5kYXRhX3NlbGVjdF1bMF1dXG5cbiAgICBpZiAoYW5hbHl6ZSA9PT0gZmFsc2UpIHNob3dfYWNjdXJhY3kgPSBmYWxzZVxuXG4gICAgbGV0IHsgQ29tcG9uZW50IH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGZvbnRfc2l6ZSA9IDE2XG4gICAgbGV0IGxpbmVfaGVpZ2h0ID0gMS41XG4gICAgbGV0IGdyZW0gPSBmb250X3NpemUgKiBsaW5lX2hlaWdodFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcblxuICAgIGxldCBpc19mcm9udCA9IHBhdGhuYW1lID09PSAnLydcbiAgICBsZXQgaXNfdG9waWMgPSBwYXRobmFtZS5zdGFydHNXaXRoKCcvdG9waWMnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cblxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlRleHRmbGl4XCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiVGV4dGZsaXggdXNlcyBtb3ZpZSByZXZpZXdzIHRvIHNob3cgaG93IG1hY2hpbmUgbGVhcm5pbmcgY2FuIHVubG9jayB0aGUgZGF0YSBlbWJlZGRlZCBpbiB1bnN0cnVjdHVyZWQgdGV4dC5cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJUZXh0ZmxpeCB1c2VzIG1vdmllIHJldmlld3MgdG8gc2hvdyBob3cgbWFjaGluZSBsZWFybmluZyBjYW4gdW5sb2NrIHRoZSBkYXRhIGVtYmVkZGVkIGluIHVuc3RydWN0dXJlZCB0ZXh0LlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vZXhwZXJpbWVudHMuZmFzdGZvcndhcmRsYWJzLmNvbS9zdGF0aWMvaW1hZ2VzL3RleHRmbGl4LXNjcmVlbnNob3QucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vdGV4dGZsaXguZmFzdGZvcndhcmRsYWJzLmNvbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLFxuICAgICAgICAgICAgICAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLFxuICAgICAgICAgICAgICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxuICAgICAgICAgICAgICBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSxcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIsXG4gICAgICAgICAgYnV0dG9uLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby11bmRlcmxpbmUge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIC5vcGFjaXR5LWlubmVyLWhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrLWNvbnRhaW5lciAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2MjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2stY29udGFpbmVyOmhvdmVyIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogJHtzaG93X2luZm8gPyAnaGlkZGVuJyA6ICdhdXRvJ307XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBpc19mcm9udD17aXNfZnJvbnR9XG4gICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICBhbmFseXplPXthbmFseXplfVxuICAgICAgICAgIHNob3dfYWNjdXJhY3k9e3Nob3dfYWNjdXJhY3l9XG4gICAgICAgICAgc2hvd0luZm89e3RoaXMuc2hvd0luZm99XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWluSGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7Z3JlbSAqIDQgKyAxfXB4KWAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUuY29tcGFyZSA/IDYwMCA6ICdhdXRvJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEgJiYgdGhpcy5zdGF0ZS5uYnN2bV9kYXRhID8gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgIGZvbnRfc2l6ZT17Zm9udF9zaXplfVxuICAgICAgICAgICAgICAgIGxpbmVfaGVpZ2h0PXtsaW5lX2hlaWdodH1cbiAgICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBpbmZvPXtpbmZvfVxuICAgICAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICAgICAgcmV2aWV3X3NvcnQ9e3Jldmlld19zb3J0fVxuICAgICAgICAgICAgICAgIHNldEFuYWx5emU9e3RoaXMuc2V0QW5hbHl6ZX1cbiAgICAgICAgICAgICAgICBzZXRTb3J0PXt0aGlzLnNldFNvcnR9XG4gICAgICAgICAgICAgICAgc2V0UmV2aWV3U29ydD17dGhpcy5zZXRSZXZpZXdTb3J0fVxuICAgICAgICAgICAgICAgIHNldEFsZ289e3RoaXMuc2V0QWxnb31cbiAgICAgICAgICAgICAgICBhbGduYW1lcz17YWxnbmFtZXN9XG4gICAgICAgICAgICAgICAgZGF0YV9zZWxlY3Q9e3RoaXMuc3RhdGUuZGF0YV9zZWxlY3R9XG4gICAgICAgICAgICAgICAgc2hvd19hY2N1cmFjeT17c2hvd19hY2N1cmFjeX1cbiAgICAgICAgICAgICAgICBzZXRBY2N1cmFjeT17dGhpcy5zZXRBY2N1cmFjeX1cbiAgICAgICAgICAgICAgICBjb21wYXJlPXt0aGlzLnN0YXRlLmNvbXBhcmV9XG4gICAgICAgICAgICAgICAgc2V0Q29tcGFyZT17dGhpcy5zZXRDb21wYXJlfVxuICAgICAgICAgICAgICAgIG5ic3ZtX2RhdGE9e3RoaXMuc3RhdGUubmJzdm1fZGF0YX1cbiAgICAgICAgICAgICAgICBobF9vcHRpb25zPXt7fX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7Z3JlbSAqIDJ9cHhgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2FkaW5nLi4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nOiBwKGdyZW0gLyAyLCBncmVtIC8gNCksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzIyMicsXG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogcCgwLCBncmVtIC8gNCkgfX0+XG4gICAgICAgICAgICBUZXh0ZmxpeCBpcyBhIG5hdHVyYWwgbGFuZ3VhZ2UgcHJvY2Vzc2luZyBwcm90b3R5cGUgYnkgQ2xvdWRlcmEgRmFzdFxuICAgICAgICAgICAgRm9yd2FyZCBMYWJzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGlzYWdyZWVtZW50c1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJywgcGFkZGluZzogcCgwLCBncmVtIC8gNCkgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERpc2FncmVlbWVudHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dfaW5mbyA/IChcbiAgICAgICAgICA8VG91clxuICAgICAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn1cbiAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICBmb250X3NpemU9e2ZvbnRfc2l6ZX1cbiAgICAgICAgICAgIGxpbmVfaGVpZ2h0PXtsaW5lX2hlaWdodH1cbiAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICBhbmFseXplPXthbmFseXplfVxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIGluZm89e2luZm99XG4gICAgICAgICAgICBzb3J0PXtzb3J0fVxuICAgICAgICAgICAgcmV2aWV3X3NvcnQ9e3Jldmlld19zb3J0fVxuICAgICAgICAgICAgc2V0QW5hbHl6ZT17dGhpcy5zZXRBbmFseXplfVxuICAgICAgICAgICAgc2V0U29ydD17dGhpcy5zZXRTb3J0fVxuICAgICAgICAgICAgc2V0UmV2aWV3U29ydD17dGhpcy5zZXRSZXZpZXdTb3J0fVxuICAgICAgICAgICAgc2V0QWxnbz17dGhpcy5zZXRBbGdvfVxuICAgICAgICAgICAgYWxnbmFtZXM9e2FsZ25hbWVzfVxuICAgICAgICAgICAgZGF0YV9zZWxlY3Q9e3RoaXMuc3RhdGUuZGF0YV9zZWxlY3R9XG4gICAgICAgICAgICBzaG93X2FjY3VyYWN5PXtzaG93X2FjY3VyYWN5fVxuICAgICAgICAgICAgc2V0QWNjdXJhY3k9e3RoaXMuc2V0QWNjdXJhY3l9XG4gICAgICAgICAgICBjb21wYXJlPXt0aGlzLnN0YXRlLmNvbXBhcmV9XG4gICAgICAgICAgICBzZXRDb21wYXJlPXt0aGlzLnNldENvbXBhcmV9XG4gICAgICAgICAgICBuYnN2bV9kYXRhPXt0aGlzLnN0YXRlLm5ic3ZtX2RhdGF9XG4gICAgICAgICAgICBzaG93SW5mbz17dGhpcy5zaG93SW5mb31cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "107552866",
        dynamic: [show_info ? 'hidden' : 'auto'],
        __self: this
      }, "body{overflow:".concat(show_info ? 'hidden' : 'auto', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUTJCLEFBR21ELHNDQUN4QyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL25leHQtbW92aWVzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4uL2RhdGEvc2FtcGxlX21vdmllX2luZm8uanMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQtc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IHJlZCwgYmx1ZSwgQm9yZGVyIH0gZnJvbSAnLi4vcGFydHMvU3RhdGljJ1xuaW1wb3J0IHsgcCB9IGZyb20gJy4uL3BhcnRzL1V0aWxzJ1xuaW1wb3J0IEJhciBmcm9tICcuLi9wYXJ0cy9CYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcbmltcG9ydCBUb3VyIGZyb20gJy4uL3BhcnRzL1RvdXInXG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi4vcGFydHMvQW5hbHl0aWNzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuXG5sZXQgYWxnbmFtZXMgPSBbJ05CU1ZNJywgJ0JFUlQnXVxubGV0IGFsZ2ZpbGVzID0gW1xuICAnbmJzdm1fbGltZV81MDBfcHJvdG90eXBlX3ByZXR0eS5qc29uJyxcbiAgJ2JlcnRfbGltZV81MDBfcHJvdG90eXBlX3ByZXR0eS5qc29uJyxcbiAgJ25ic3ZtX2xpbWVfZ3JvdXBlZF9wcmV0dHlfd29yZC5qc29uJyxcbl1cbmxldCBkYXRhX2tleXMgPSBbXG4gIFsnbmJzdm1fZGF0YScsICduYnN2bV9saW1lXzUwMF9ncm91cGVkX3ByZXR0eS5qc29uJywgJ05CU1ZNJ10sXG4gIFsnYmVydF9kYXRhJywgJ2JlcnRfbGltZV81MDBfcHJvdG90eXBlX3ByZXR0eS5qc29uJywgJ0JFUlQnXSxcbl1cblxubGV0IGxpbmtQcmVmaXggPSBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTFxuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuYWx5emU6IHRydWUsXG4gICAgICBkYXRhX3NlbGVjdDogMSxcbiAgICAgIHNob3dfYWNjdXJhY3k6IGZhbHNlLFxuICAgICAgc29ydDogJ3Jldmlld3MnLFxuICAgICAgcmV2aWV3X3NvcnQ6ICdkYXRlJyxcbiAgICAgIG5ic3ZtX2RhdGE6IG51bGwsXG4gICAgICBjb21wYXJlOiBmYWxzZSxcbiAgICAgIGJlcnRfZGF0YTogbnVsbCxcbiAgICAgIHNob3dfaW5mbzogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMuc2V0QW5hbHl6ZSA9IHRoaXMuc2V0QW5hbHl6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRSZXZpZXdTb3J0ID0gdGhpcy5zZXRSZXZpZXdTb3J0LmJpbmQodGhpcylcbiAgICB0aGlzLnNldEFjY3VyYWN5ID0gdGhpcy5zZXRBY2N1cmFjeS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTb3J0ID0gdGhpcy5zZXRTb3J0LmJpbmQodGhpcylcbiAgICB0aGlzLnNldEFsZ28gPSB0aGlzLnNldEFsZ28uYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0Q29tcGFyZSA9IHRoaXMuc2V0Q29tcGFyZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zaG93SW5mbyA9IHRoaXMuc2hvd0luZm8uYmluZCh0aGlzKVxuICB9XG5cbiAgZmV0Y2hEYXRhKCkge1xuICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhL25hbWVzX2FuZF9kYXRlcy5qc29uJylcbiAgICAgIC50aGVuKG5kID0+IG5kLmpzb24oKSlcbiAgICAgIC50aGVuKG5kID0+IHtcbiAgICAgICAgZmV0Y2gobGlua1ByZWZpeCArICcvc3RhdGljL2RhdGEvJyArIGFsZ2ZpbGVzWzBdKVxuICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgICAgICBsZXQgcmV2aWV3cyA9IHIubWFwKChyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdfciA9IE9iamVjdC5hc3NpZ24oe30sIHIpXG4gICAgICAgICAgICAgIG5ld19yLmluZGV4ID0gaVxuICAgICAgICAgICAgICBuZXdfci5hdXRob3IgPSBuZFtpXS5hdXRob3JcbiAgICAgICAgICAgICAgbmV3X3IuZGF0ZSA9IG5kW2ldLmRhdGVcbiAgICAgICAgICAgICAgbmV3X3IuY2xhc3MgPVxuICAgICAgICAgICAgICAgIHIuY2xhc3NfcHJvYmFiaWxpdGllc1swXSA+IHIuY2xhc3NfcHJvYmFiaWxpdGllc1sxXVxuICAgICAgICAgICAgICAgICAgPyAnbmVnJ1xuICAgICAgICAgICAgICAgICAgOiAncG9zJ1xuICAgICAgICAgICAgICByZXR1cm4gbmV3X3JcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQga2V5ID0gZGF0YV9rZXlzWzBdWzBdXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2tleV06IHJldmlld3MgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbMV0pXG4gICAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgICAudGhlbihyID0+IHtcbiAgICAgICAgICAgIGxldCByZXZpZXdzID0gci5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld19yID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgICAgICAgICAgICAgbmV3X3IuaW5kZXggPSBpXG4gICAgICAgICAgICAgIG5ld19yLmF1dGhvciA9IG5kW2ldLmF1dGhvclxuICAgICAgICAgICAgICBuZXdfci5kYXRlID0gbmRbaV0uZGF0ZVxuICAgICAgICAgICAgICBuZXdfci5jbGFzcyA9XG4gICAgICAgICAgICAgICAgci5jbGFzc19wcm9iYWJpbGl0aWVzWzBdID4gci5jbGFzc19wcm9iYWJpbGl0aWVzWzFdXG4gICAgICAgICAgICAgICAgICA/ICduZWcnXG4gICAgICAgICAgICAgICAgICA6ICdwb3MnXG4gICAgICAgICAgICAgIHJldHVybiBuZXdfclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBrZXkgPSBkYXRhX2tleXNbMV1bMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5XTogcmV2aWV3cyB9KVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaERhdGEoKVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG4gICAgbGV0IGlzX2Zyb250ID0gcGF0aG5hbWUgPT09ICcvJ1xuICAgIGlmIChpc19mcm9udCkgdGhpcy5zZXRTdGF0ZSh7IHNob3dfaW5mbzogdHJ1ZSB9KVxuXG4gICAgaWYgKCF3aW5kb3cuR0FfSU5JVElBTElaRUQpIHtcbiAgICAgIGluaXRHQSgpXG4gICAgICB3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlXG4gICAgfVxuICAgIGxvZ1BhZ2VWaWV3KClcbiAgfVxuXG4gIHNldEFuYWx5emUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYW5hbHl6ZTogdmFsdWUgfSlcbiAgfVxuXG4gIHNldFJldmlld1NvcnQodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmV2aWV3X3NvcnQ6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRTb3J0KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnQ6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRBbGdvKGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VsZWN0OiBpbmRleCB9KVxuICB9XG5cbiAgc2V0QWNjdXJhY3kodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd19hY2N1cmFjeTogdmFsdWUgfSlcbiAgfVxuXG4gIHNldENvbXBhcmUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFyZTogdmFsdWUgfSlcbiAgfVxuXG4gIHNob3dJbmZvKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfaW5mbzogdmFsdWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBhbmFseXplLCBzb3J0LCByZXZpZXdfc29ydCwgc2hvd19hY2N1cmFjeSwgc2hvd19pbmZvIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGVbZGF0YV9rZXlzW3RoaXMuc3RhdGUuZGF0YV9zZWxlY3RdWzBdXVxuXG4gICAgaWYgKGFuYWx5emUgPT09IGZhbHNlKSBzaG93X2FjY3VyYWN5ID0gZmFsc2VcblxuICAgIGxldCB7IENvbXBvbmVudCB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBmb250X3NpemUgPSAxNlxuICAgIGxldCBsaW5lX2hlaWdodCA9IDEuNVxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG5cbiAgICBsZXQgaXNfZnJvbnQgPSBwYXRobmFtZSA9PT0gJy8nXG4gICAgbGV0IGlzX3RvcGljID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3RvcGljJylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUZXh0ZmxpeFwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIlRleHRmbGl4IHVzZXMgbW92aWUgcmV2aWV3cyB0byBzaG93IGhvdyBtYWNoaW5lIGxlYXJuaW5nIGNhbiB1bmxvY2sgdGhlIGRhdGEgZW1iZWRkZWQgaW4gdW5zdHJ1Y3R1cmVkIHRleHQuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiVGV4dGZsaXggdXNlcyBtb3ZpZSByZXZpZXdzIHRvIHNob3cgaG93IG1hY2hpbmUgbGVhcm5pbmcgY2FuIHVubG9jayB0aGUgZGF0YSBlbWJlZGRlZCBpbiB1bnN0cnVjdHVyZWQgdGV4dC5cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2V4cGVyaW1lbnRzLmZhc3Rmb3J3YXJkbGFicy5jb20vc3RhdGljL2ltYWdlcy90ZXh0ZmxpeC1zY3JlZW5zaG90LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3RleHRmbGl4LmZhc3Rmb3J3YXJkbGFicy5jb21cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJyxcbiAgICAgICAgICAgICAgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJyxcbiAgICAgICAgICAgICAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICAgICAgbW9ub3NwYWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEsXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlcixcbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby1vcGFjaXR5LWhvdmVyOmhvdmVyLFxuICAgICAgICAgIGJ1dHRvbi5uby1vcGFjaXR5LWhvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8tdW5kZXJsaW5lIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wYWNpdHktaW5uZXItaG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciAub3BhY2l0eS1pbm5lci1ob3ZlcixcbiAgICAgICAgICBidXR0b246aG92ZXIgLm9wYWNpdHktaW5uZXItaG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlci1ibG9jay1jb250YWluZXIgLmhvdmVyLWJsb2NrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrLWNvbnRhaW5lcjpob3ZlciAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICR7c2hvd19pbmZvID8gJ2hpZGRlbicgOiAnYXV0byd9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgaXNfZnJvbnQ9e2lzX2Zyb250fVxuICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgYW5hbHl6ZT17YW5hbHl6ZX1cbiAgICAgICAgICBzaG93X2FjY3VyYWN5PXtzaG93X2FjY3VyYWN5fVxuICAgICAgICAgIHNob3dJbmZvPXt0aGlzLnNob3dJbmZvfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1pbkhlaWdodDogYGNhbGMoMTAwdmggLSAke2dyZW0gKiA0ICsgMX1weClgLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLmNvbXBhcmUgPyA2MDAgOiAnYXV0bycsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhICYmIHRoaXMuc3RhdGUubmJzdm1fZGF0YSA/IChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICBmb250X3NpemU9e2ZvbnRfc2l6ZX1cbiAgICAgICAgICAgICAgICBsaW5lX2hlaWdodD17bGluZV9oZWlnaHR9XG4gICAgICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgICAgICBhbmFseXplPXthbmFseXplfVxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgaW5mbz17aW5mb31cbiAgICAgICAgICAgICAgICBzb3J0PXtzb3J0fVxuICAgICAgICAgICAgICAgIHJldmlld19zb3J0PXtyZXZpZXdfc29ydH1cbiAgICAgICAgICAgICAgICBzZXRBbmFseXplPXt0aGlzLnNldEFuYWx5emV9XG4gICAgICAgICAgICAgICAgc2V0U29ydD17dGhpcy5zZXRTb3J0fVxuICAgICAgICAgICAgICAgIHNldFJldmlld1NvcnQ9e3RoaXMuc2V0UmV2aWV3U29ydH1cbiAgICAgICAgICAgICAgICBzZXRBbGdvPXt0aGlzLnNldEFsZ299XG4gICAgICAgICAgICAgICAgYWxnbmFtZXM9e2FsZ25hbWVzfVxuICAgICAgICAgICAgICAgIGRhdGFfc2VsZWN0PXt0aGlzLnN0YXRlLmRhdGFfc2VsZWN0fVxuICAgICAgICAgICAgICAgIHNob3dfYWNjdXJhY3k9e3Nob3dfYWNjdXJhY3l9XG4gICAgICAgICAgICAgICAgc2V0QWNjdXJhY3k9e3RoaXMuc2V0QWNjdXJhY3l9XG4gICAgICAgICAgICAgICAgY29tcGFyZT17dGhpcy5zdGF0ZS5jb21wYXJlfVxuICAgICAgICAgICAgICAgIHNldENvbXBhcmU9e3RoaXMuc2V0Q29tcGFyZX1cbiAgICAgICAgICAgICAgICBuYnN2bV9kYXRhPXt0aGlzLnN0YXRlLm5ic3ZtX2RhdGF9XG4gICAgICAgICAgICAgICAgaGxfb3B0aW9ucz17e319XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwdmggLSAke2dyZW0gKiAyfXB4YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcGFkZGluZzogcChncmVtIC8gMiwgZ3JlbSAvIDQpLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyMjInLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDQpIH19PlxuICAgICAgICAgICAgVGV4dGZsaXggaXMgYSBuYXR1cmFsIGxhbmd1YWdlIHByb2Nlc3NpbmcgcHJvdG90eXBlIGJ5IENsb3VkZXJhIEZhc3RcbiAgICAgICAgICAgIEZvcndhcmQgTGFic1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rpc2FncmVlbWVudHNcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsIHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDQpIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEaXNhZ3JlZW1lbnRzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzaG93X2luZm8gPyAoXG4gICAgICAgICAgPFRvdXJcbiAgICAgICAgICAgIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9XG4gICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgZm9udF9zaXplPXtmb250X3NpemV9XG4gICAgICAgICAgICBsaW5lX2hlaWdodD17bGluZV9oZWlnaHR9XG4gICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgYW5hbHl6ZT17YW5hbHl6ZX1cbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBpbmZvPXtpbmZvfVxuICAgICAgICAgICAgc29ydD17c29ydH1cbiAgICAgICAgICAgIHJldmlld19zb3J0PXtyZXZpZXdfc29ydH1cbiAgICAgICAgICAgIHNldEFuYWx5emU9e3RoaXMuc2V0QW5hbHl6ZX1cbiAgICAgICAgICAgIHNldFNvcnQ9e3RoaXMuc2V0U29ydH1cbiAgICAgICAgICAgIHNldFJldmlld1NvcnQ9e3RoaXMuc2V0UmV2aWV3U29ydH1cbiAgICAgICAgICAgIHNldEFsZ289e3RoaXMuc2V0QWxnb31cbiAgICAgICAgICAgIGFsZ25hbWVzPXthbGduYW1lc31cbiAgICAgICAgICAgIGRhdGFfc2VsZWN0PXt0aGlzLnN0YXRlLmRhdGFfc2VsZWN0fVxuICAgICAgICAgICAgc2hvd19hY2N1cmFjeT17c2hvd19hY2N1cmFjeX1cbiAgICAgICAgICAgIHNldEFjY3VyYWN5PXt0aGlzLnNldEFjY3VyYWN5fVxuICAgICAgICAgICAgY29tcGFyZT17dGhpcy5zdGF0ZS5jb21wYXJlfVxuICAgICAgICAgICAgc2V0Q29tcGFyZT17dGhpcy5zZXRDb21wYXJlfVxuICAgICAgICAgICAgbmJzdm1fZGF0YT17dGhpcy5zdGF0ZS5uYnN2bV9kYXRhfVxuICAgICAgICAgICAgc2hvd0luZm89e3RoaXMuc2hvd0luZm99XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_parts_Header__WEBPACK_IMPORTED_MODULE_17__["default"], {
        is_front: is_front,
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        showInfo: this.showInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          minHeight: "calc(100vh - ".concat(grem * 4 + 1, "px)"),
          background: 'white',
          minWidth: this.state.compare ? 600 : 'auto'
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, data && this.state.nbsvm_data ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, {
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
        data_select: this.state.data_select,
        show_accuracy: show_accuracy,
        setAccuracy: this.setAccuracy,
        compare: this.state.compare,
        setCompare: this.setCompare,
        nbsvm_data: this.state.nbsvm_data,
        hl_options: {},
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          height: "calc(100vh - ".concat(grem * 2, "px")
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Loading...")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_15__["p"])(grem / 2, grem / 4),
          background: '#222',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between'
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_15__["p"])(0, grem / 4)
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Textflix is a natural language processing prototype by Cloudera Fast Forward Labs"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_20___default.a, {
        href: "/disagreements",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        style: {
          textDecoration: 'underline',
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_15__["p"])(0, grem / 4)
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "Disagreements")))), show_info ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_parts_Tour__WEBPACK_IMPORTED_MODULE_18__["default"], (_React$createElement = {
        router: this.props.router,
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "analyze", analyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "info", _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_12__["info"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "sort", sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "review_sort", review_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAnalyze", this.setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setSort", this.setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setReviewSort", this.setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAlgo", this.setAlgo), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "algnames", algnames), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "data_select", this.state.data_select), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "show_accuracy", show_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAccuracy", this.setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "compare", this.state.compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setCompare", this.setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "nbsvm_data", this.state.nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "showInfo", this.showInfo), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 337
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)) : null);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./parts/Analytics.js":
/*!****************************!*\
  !*** ./parts/Analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");

var initGA = function initGA() {
  // console.log('GA init')
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].initialize('UA-140718127-2');
};
var logPageView = function logPageView() {
  // console.log(`Logging pageview for ${window.location.pathname}`)
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
      category: category,
      action: action
    });
  }
};
var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].exception({
      description: description,
      fatal: fatal
    });
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.e110e8f8aca076ff9ac9.hot-update.js.map