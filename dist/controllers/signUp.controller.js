"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userController = require("./user.controller.js");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!(req.body.password !== req.body.passwordConfirm)) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            error: "Las contraseñas no coinciden"
          }));
        case 3:
          _context.next = 5;
          return _bcryptjs["default"].hash(req.body.password, 10);
        case 5:
          req.body.password = _context.sent;
          _context.next = 8;
          return (0, _userController.createUser)(req, res);
        case 8:
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: "".concat(err)
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = signUp;
exports["default"] = _default;