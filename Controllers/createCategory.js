import isLoggedIn from "./middleware.js";
import Category from "../Models/category.js";
import dotenv from "dotenv"; // import dotenv

dotenv.config(); 

const categoryCtrl = {};

categoryCtrl.createCategory = async (req, res) => {
    try {
        // Verificar si el usuario está autenticado
        isLoggedIn(req, res, async () => {
            const { name } = req.body;
            const userId = req.user._id;
            // Verificar si el usuario ya tiene una categoría con el mismo nombre
            const existingCategory = await Category.findOne({ name, user: userId });
            if (existingCategory) {
                return res.status(400).json({ error: `Ya se creó una categoría con el nombre: ${name}` });
            }
            const newCategory = new Category({ name, user: userId });
            const createdCategory = await newCategory.save();
            res.status(201).json(createdCategory);
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

categoryCtrl.getCategories = async (req, res) => {
    try {   
        // Verificar si el usuario está autenticado
        isLoggedIn(req, res, async () => {
            const userId = req.user._id;
            const categories = await Category.find({ user: userId });
            res.json(categories);
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default categoryCtrl;

