"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.getTasks = exports.deleteTask = exports.createTask = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var createTask = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, description, comments, categories, priority, deadline, status, userId, categoryIds, validCategoryIds, newTask, createdTask;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, description = _req$body.description, comments = _req$body.comments, categories = _req$body.categories, priority = _req$body.priority, deadline = _req$body.deadline, status = _req$body.status;
          userId = req.user._id;
          categoryIds = categories.map(function (category) {
            return category._id;
          }); // Verificar si los IDs de categoría son válidos
          _context.next = 6;
          return Category.find({
            _id: {
              $in: categoryIds
            },
            user: userId
          }).distinct("_id");
        case 6:
          validCategoryIds = _context.sent;
          if (!(validCategoryIds.length !== categoryIds.length)) {
            _context.next = 9;
            break;
          }
          throw new Error("IDs de categoría inválidos");
        case 9:
          // Crear una nueva instancia de Task con los datos recibidos
          newTask = new Task({
            name: name,
            description: description,
            comments: comments,
            categories: validCategoryIds,
            priority: priority,
            deadline: deadline,
            status: status,
            user: userId
          }); // Guardar la nueva tarea en la base de datos
          _context.next = 12;
          return newTask.save();
        case 12:
          createdTask = _context.sent;
          res.status(201).json(createdTask);
          _context.next = 21;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          if (!(_context.t0.name === "CastError")) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            error: "IDs de categoría inválidos"
          }));
        case 20:
          res.status(400).json({
            error: _context.t0.message
          });
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return function createTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createTask = createTask;
var getTasks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userId, tasks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          userId = req.user._id; // Obtén el _id del usuario desde req.user
          // Obtén todas las tareas asociadas al usuario
          _context2.next = 4;
          return Task.find({
            user: userId
          });
        case 4:
          tasks = _context2.sent;
          res.json(tasks);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json({
            error: _context2.t0.message
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getTasks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Actualizar una tarea del usuario
// Actualizar una tarea del usuario
exports.getTasks = getTasks;
var updateTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task, _req$body2, name, description, comments, categories, priority, deadline, status, updatedTask;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Task.findOne({
            _id: req.params.id,
            user: req.user._id
          });
        case 3:
          task = _context3.sent;
          if (task) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            error: "Task not found"
          }));
        case 6:
          _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, comments = _req$body2.comments, categories = _req$body2.categories, priority = _req$body2.priority, deadline = _req$body2.deadline, status = _req$body2.status;
          if (name) {
            task.name = name;
          }
          if (description) {
            task.description = description;
          }
          if (comments) {
            task.comments = comments;
          }
          if (categories) {
            task.categories = categories;
          }
          if (priority) {
            task.priority = priority;
          }
          if (deadline) {
            task.deadline = deadline;
          }
          if (status) {
            task.status = status;
          }
          _context3.next = 16;
          return task.save();
        case 16:
          updatedTask = _context3.sent;
          res.json(updatedTask);
          _context3.next = 23;
          break;
        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3["catch"](0);
          res.status(400).json({
            error: _context3.t0.message
          });
        case 23:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 20]]);
  }));
  return function updateTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Eliminar una tarea del usuario
exports.updateTask = updateTask;
var deleteTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Task.findOne({
            _id: req.params.id,
            user: req.user._id
          });
        case 3:
          task = _context4.sent;
          if (task) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            error: "Task not found"
          }));
        case 6:
          _context4.next = 8;
          return Task.deleteOne({
            _id: req.params.id,
            user: req.user._id
          });
        case 8:
          res.json({
            message: "Task deleted successfully"
          });
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json({
            error: _context4.t0.message
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteTask = deleteTask;