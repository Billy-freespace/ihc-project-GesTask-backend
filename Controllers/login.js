import dotenv from "dotenv"; // import dotenv
import User from "../Models/user.js"; // import user model
import bcrypt from "bcryptjs"; // import bcrypt to hash passwords
import jwt from "jsonwebtoken"; // import jwt to sign tokens

dotenv.config(); // load .env variables

const usertCtrl = {}; // create user controlelr object
const loginCtrl = {}; // create login controller object

// Destructure ENV variables with defaults
const { SECRET = "secret" } = process.env;

// Signup route to create a new user
usertCtrl.createUser = async (req, res) => {
    try {
        if (req.body.password !== req.body.passwordConfirm) {
            return res.status(400).json({ error: "Las contraseñas no coinciden" });
        }
        req.body.password = await bcrypt.hash(req.body.password, 10);
        // create a new user
        const user = await User.create(req.body);
        // send new user as response
        res.json(user);
    } catch (error) {
        res.status(400).json({ error });
    }
};


// Login route to verify a user and get a token
loginCtrl.loginUser = async (req, res) => {
    try {
        // check if the user exists
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            // check if password matches
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                // sign token and send it in response
                const token = await jwt.sign({ _id: user._id, username: user.username }, SECRET);
                res.json({ token });
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
};

export { loginCtrl, usertCtrl };
