import { Router } from "express"; // import router from express

const router = Router(); // create router to create route bundle
import {usertCtrl}  from "../Controllers/login.js";

// create route to create a new user
router.route("/signup")
    .post(usertCtrl.createUser);

export default router; // export router as default