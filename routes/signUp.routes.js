import { Router } from "express";
import signUp from "../controllers/signUp.controller.js";

const signUpRouter = Router();

signUpRouter.route("/signup").post(signUp);

export default signUpRouter;
