import { Router } from "express"; // import router from express

const router = Router(); // create router to create route bundle
const {loginUser} = require('../Controllers/login.js');

// create route to create a new user
router.post("/login", loginUser);

