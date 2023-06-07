import { Router } from "express";
import { isLoggedIn } from "../controllers/middleware.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.route("/create").post(isLoggedIn, createTask);

taskRouter.route("/").get(isLoggedIn, getTasks);

taskRouter
  .route("/:id")
  .patch(isLoggedIn, updateTask)
  .delete(isLoggedIn, deleteTask);

export default taskRouter;
