"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPriorities = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var getPriorities = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var taskModel, userId, priority, priorities;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          taskModel = req.context.models.taskModel;
          userId = req.user._id;
          priority = req.params.priority;
          _context.next = 6;
          return taskModel.find({
            priority: priority,
            user: userId
          }).sort({
            deadline: 1
          });
        case 6:
          priorities = _context.sent;
          res.json(priorities);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: "".concat(_context.t0)
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getPriorities(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getPriorities = getPriorities;