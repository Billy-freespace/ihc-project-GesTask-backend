"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategories = exports.createCategory = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var createCategory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var categoryModel, name, userId, existingCategory, newCategory, createdCategory;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          categoryModel = req.context.models.categoryModel;
          name = req.body.name;
          userId = req.user._id; // Verificar si el usuario ya tiene una categoría con el mismo nombre
          _context.next = 6;
          return categoryModel.findOne({
            name: name,
            user: userId
          });
        case 6:
          existingCategory = _context.sent;
          if (!existingCategory) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            error: "Ya se cre\xF3 una categor\xEDa con el nombre: ".concat(name)
          }));
        case 9:
          newCategory = new categoryModel({
            name: name,
            user: userId
          });
          _context.next = 12;
          return newCategory.save();
        case 12:
          createdCategory = _context.sent;
          res.status(201).json(createdCategory);
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
  return function createCategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCategory = createCategory;
var getCategories = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var categoryModel, userId, categories;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          categoryModel = req.context.models.categoryModel;
          userId = req.user._id;
          _context2.next = 5;
          return categoryModel.find({
            user: userId
          });
        case 5:
          categories = _context2.sent;
          res.json(categories);
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: "".concat(_context2.t0)
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function getCategories(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getCategories = getCategories;