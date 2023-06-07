"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = require("../controllers/middleware.js");
var _categoryController = require("../controllers/category.controller.js");
var categoryRouter = (0, _express.Router)();
categoryRouter.route("/create").post(_middleware.isLoggedIn, _categoryController.createCategory);
categoryRouter.route("/").get(_middleware.isLoggedIn, _categoryController.getCategories);
var _default = categoryRouter;
exports["default"] = _default;