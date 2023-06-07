import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../mongodb/models/user.js";
import taskModel from "../mongodb/models/task.js";
import categoryModel from "../mongodb/models/category.js";

dotenv.config();

const createContext = (req, res, next) => {
  req.context = {
    models: {
      userModel,
      taskModel,
      categoryModel,
    },
  };
  next();
};

const isLoggedIn = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      if (token) {
        const payload = await jwt.verify(token, process.env.SECRET);
        if (payload) {
          req.user = payload;
          next();
        } else {
          res.status(403).json({ error: "Verificación de token fallida" });
        }
      } else {
        res
          .status(400)
          .json({ error: "Encabezado de autenticación malformado" });
      }
    } else {
      res.status(401).json({ error: "Sin encabezado de autenticación" });
    }
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export { isLoggedIn, createContext };
