import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connnectDB from "./mongodb/connect.js";
import router from "./Controllers/login.js";
dotenv.config();
const port = process.env.PORT;

// Settings
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Middelwares

// Routes
app.get("/", (req, res) => {
  res.send({ message: "Hello from backend!" });
});
app.use("/user", router);

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

await startServer();
