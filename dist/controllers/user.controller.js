"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserbyUsername = exports.getAllUsers = exports.createUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllUsers = getAllUsers;
var getUserbyUsername = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userModel, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          userModel = req.context.models.userModel;
          _context2.next = 3;
          return userModel.findOne({
            username: req.body.username
          });
        case 3:
          user = _context2.sent;
          return _context2.abrupt("return", user);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getUserbyUsername(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getUserbyUsername = getUserbyUsername;
var createUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userModel, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          userModel = req.context.models.userModel;
          _context3.next = 3;
          return userModel.create(req.body);
        case 3:
          user = _context3.sent;
          res.status(201).json(user);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function createUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createUser = createUser;