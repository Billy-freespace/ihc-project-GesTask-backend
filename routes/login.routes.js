import { Router } from "express";
import logIn from "../controllers/logIn.controller.js";

const logInRouter = Router();

logInRouter.route("/login").post(logIn);

export default logInRouter;
