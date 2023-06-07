import { getUserbyUsername } from "./user.controller.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();
const { SECRET } = process.env;

const logIn = async (req, res) => {
  try {
    const user = await getUserbyUsername(req, res);
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = await jwt.sign(
          { _id: user._id, username: user.username },
          SECRET
        );
        res.status(200).json({ token });
      } else {
        res.status(400).json({ error: "Constraseña inválida" });
      }
    } else {
      res.status(400).json({ error: "El usuario no existe" });
    }
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export default logIn;
