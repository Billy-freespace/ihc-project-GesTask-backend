"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = require("../controllers/middleware.js");
var _taskController = require("../controllers/task.controller.js");
var taskRouter = (0, _express.Router)();
taskRouter.route("/create").post(_middleware.isLoggedIn, _taskController.createTask);
taskRouter.route("/").get(_middleware.isLoggedIn, _taskController.getTasks);
taskRouter.route("/:id").patch(_middleware.isLoggedIn, _taskController.updateTask)["delete"](_middleware.isLoggedIn, _taskController.deleteTask);
var _default = taskRouter;
exports["default"] = _default;