"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userController = require("./user.controller.js");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
_dotenv["default"].config();
var SECRET = process.env.SECRET;
var logIn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, result, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _userController.getUserbyUsername)(req, res);
        case 3:
          user = _context.sent;
          if (!user) {
            _context.next = 18;
            break;
          }
          _context.next = 7;
          return _bcryptjs["default"].compare(req.body.password, user.password);
        case 7:
          result = _context.sent;
          if (!result) {
            _context.next = 15;
            break;
          }
          _context.next = 11;
          return _jsonwebtoken["default"].sign({
            _id: user._id,
            username: user.username
          }, SECRET);
        case 11:
          token = _context.sent;
          res.status(200).json({
            token: token
          });
          _context.next = 16;
          break;
        case 15:
          res.status(400).json({
            error: "Constraseña inválida"
          });
        case 16:
          _context.next = 19;
          break;
        case 18:
          res.status(400).json({
            error: "El usuario no existe"
          });
        case 19:
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: "".concat(_context.t0)
          });
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function logIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = logIn;
exports["default"] = _default;