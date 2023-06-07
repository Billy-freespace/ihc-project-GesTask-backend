"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var dotenv = _interopRequireWildcard(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _connect = _interopRequireDefault(require("./mongodb/connect.js"));
var _morgan = _interopRequireDefault(require("morgan"));
var _middleware = require("./controllers/middleware.js");
var _signUpRoutes = _interopRequireDefault(require("./routes/signUp.routes.js"));
var _loginRoutes = _interopRequireDefault(require("./routes/login.routes.js"));
var _taskRoutes = _interopRequireDefault(require("./routes/task.routes.js"));
var _categoryRoutes = _interopRequireDefault(require("./routes/category.routes.js"));
var _priorityRoutes = _interopRequireDefault(require("./routes/priority.routes.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Settings
var api = "/api";
dotenv.config();
var port = process.env.PORT;
var app = (0, _express["default"])();
app.use(_express["default"].json({
  limit: "50mb"
}));
app.use((0, _morgan["default"])("tiny"));

// Middelwares
app.use((0, _cors["default"])());
app.use(_middleware.createContext);

// Routes
app.get("/", function (req, res) {
  res.send({
    message: "Hello from backend!"
  });
});
app.use(api, _signUpRoutes["default"]);
app.use(api, _loginRoutes["default"]);
app.use(api + "/task", _taskRoutes["default"]);
app.use(api + "/categories", _categoryRoutes["default"]);
app.use(api + "/priorities", _priorityRoutes["default"]);

// Starting the server
var startServer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _connect["default"])(process.env.MONGO_URL);
        case 3:
          app.listen(port, function () {
            return console.log("Server started on port http://localhost:".concat(port));
          });
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function startServer() {
    return _ref.apply(this, arguments);
  };
}();
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return startServer();
      case 2:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
}))();