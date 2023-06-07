"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLoggedIn = exports.createContext = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _user = _interopRequireDefault(require("../mongodb/models/user.js"));
var _task = _interopRequireDefault(require("../mongodb/models/task.js"));
var _category = _interopRequireDefault(require("../mongodb/models/category.js"));
_dotenv["default"].config();
var createContext = function createContext(req, res, next) {
  req.context = {
    models: {
      userModel: _user["default"],
      taskModel: _task["default"],
      categoryModel: _category["default"]
    }
  };
  next();
};
exports.createContext = createContext;
var isLoggedIn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, payload;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!req.headers.authorization) {
            _context.next = 13;
            break;
          }
          token = req.headers.authorization.split(" ")[1];
          if (!token) {
            _context.next = 10;
            break;
          }
          _context.next = 6;
          return _jsonwebtoken["default"].verify(token, process.env.SECRET);
        case 6:
          payload = _context.sent;
          if (payload) {
            req.user = payload;
            next();
          } else {
            res.status(403).json({
              error: "Verificación de token fallida"
            });
          }
          _context.next = 11;
          break;
        case 10:
          res.status(400).json({
            error: "Encabezado de autenticación malformado"
          });
        case 11:
          _context.next = 14;
          break;
        case 13:
          res.status(401).json({
            error: "Sin encabezado de autenticación"
          });
        case 14:
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: "".concat(_context.t0)
          });
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return function isLoggedIn(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.isLoggedIn = isLoggedIn;