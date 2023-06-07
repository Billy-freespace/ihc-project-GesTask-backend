import { createUser } from "./user.controller.js";
import bcrypt from "bcryptjs";

const signUp = async (req, res) => {
  try {
    if (req.body.password !== req.body.passwordConfirm) {
      return res.status(400).json({ error: "Las contraseñas no coinciden" });
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await createUser(req, res);
  } catch (error) {
    res.status(500).json({ error: `${err}` });
  }
};

export default signUp;
