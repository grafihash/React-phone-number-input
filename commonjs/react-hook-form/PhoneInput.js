"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPhoneInput = createPhoneInput;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ReactHookFormInput = _interopRequireDefault(require("./ReactHookFormInput.js"));
var _PhoneInputBrowser = _interopRequireDefault(require("../PhoneInputBrowser.js"));
var _PropTypes = require("../PropTypes.js");
var _excluded = ["metadata"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function createPhoneInput(defaultMetadata) {
  var PhoneInput = function PhoneInput(_ref, ref) {
    var _ref$metadata = _ref.metadata,
      metadata = _ref$metadata === void 0 ? defaultMetadata : _ref$metadata,
      rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/_react["default"].createElement(_ReactHookFormInput["default"], _extends({}, rest, {
      ref: ref,
      metadata: metadata,
      Component: _PhoneInputBrowser["default"]
    }));
  };
  PhoneInput = /*#__PURE__*/_react["default"].forwardRef(PhoneInput);
  PhoneInput.propTypes = {
    metadata: _PropTypes.metadata
  };
  return PhoneInput;
}
var _default = exports["default"] = createPhoneInput();
//# sourceMappingURL=PhoneInput.js.map