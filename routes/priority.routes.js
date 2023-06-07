import { Router } from "express";
import { isLoggedIn } from "../controllers/middleware.js";
import { getPriorities } from "../controllers/priority.controller.js";

const priorityRouter = Router();

priorityRouter.route("/").get(isLoggedIn, getPriorities);

export default priorityRouter;
