"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _logInController = _interopRequireDefault(require("../controllers/logIn.controller.js"));
var logInRouter = (0, _express.Router)();
logInRouter.route("/login").post(_logInController["default"]);
var _default = logInRouter;
exports["default"] = _default;