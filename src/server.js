import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connnectDB from "./mongodb/connect.js";
import morgan from "morgan";
import { createContext } from "./controllers/middleware.js";
import signUpRouter from "./routes/signUp.routes.js";
import logInRouter from "./routes/login.routes.js";
import taskRouter from "./routes/task.routes.js";
import categoryRouter from "./routes/category.routes.js";
import priorityRouter from "./routes/priority.routes.js";

// Settings
const api = "/api";
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(morgan("tiny"));

// Middelwares
app.use(cors());
app.use(createContext);

// Routes
app.get("/", (req, res) => {
  res.send({ message: "Hello from backend!" });
});
app.use(api, signUpRouter);
app.use(api, logInRouter);
app.use(api + "/task", taskRouter);
app.use(api + "/categories", categoryRouter);
app.use(api + "/priorities", priorityRouter);

// Starting the server
const startServer = async () => {
  try {
    await connnectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server started on port http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  await startServer();
})();
