import { Router } from "express";
import { isLoggedIn } from "../controllers/middleware.js";
import {
  getCategories,
  createCategory,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.route("/create").post(isLoggedIn, createCategory);

categoryRouter.route("/").get(isLoggedIn, getCategories);

export default categoryRouter;
