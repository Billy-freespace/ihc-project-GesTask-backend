import {Router} from "express";
const categoryroute = Router();

import categoryCtrl from "../Controllers/createCategory.js";



// Ruta para crear una nueva categoría
categoryroute.route("/categories")
    .post(categoryCtrl.createCategory)
    .get(categoryCtrl.getCategories)

export default categoryroute;
