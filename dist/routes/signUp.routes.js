"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _signUpController = _interopRequireDefault(require("../controllers/signUp.controller.js"));
var signUpRouter = (0, _express.Router)();
signUpRouter.route("/signup").post(_signUpController["default"]);
var _default = signUpRouter;
exports["default"] = _default;