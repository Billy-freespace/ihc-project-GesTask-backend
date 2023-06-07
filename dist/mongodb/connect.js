"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _mercedlogger = require("mercedlogger");
var connnectDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _mongoose["default"].set("strictQuery", true);
          _context.next = 3;
          return _mongoose["default"].connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function connnectDB(_x) {
    return _ref.apply(this, arguments);
  };
}();
_mongoose["default"].connection.on("open", function () {
  return _mercedlogger.log.green("MongoDB connected!");
}).on("close", function () {
  return _mercedlogger.log.magenta("Connection to MongoDB closed.");
}).on("error", function (err) {
  return _mercedlogger.log.red(err);
});
var _default = connnectDB;
exports["default"] = _default;