"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var UserSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  // email: { type: String, required: true },
  // avatar: { type: String, required: true },
}, {
  timestamps: true
});
var userModel = (0, _mongoose.model)("User", UserSchema);
var _default = userModel;
exports["default"] = _default;