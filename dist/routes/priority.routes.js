"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = require("../controllers/middleware.js");
var _priorityController = require("../controllers/priority.controller.js");
var priorityRouter = (0, _express.Router)();
priorityRouter.route("/").get(_middleware.isLoggedIn, _priorityController.getPriorities);
var _default = priorityRouter;
exports["default"] = _default;