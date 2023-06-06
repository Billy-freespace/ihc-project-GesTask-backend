import isLoggedIn from "./middleware.js";
import Task from "../Models/task.js";
import dotenv from "dotenv"; // import dotenv

dotenv.config(); // load .env variables

const priorityCtrl = {};

priorityCtrl.getPriorities = async (req, res) => {
    try {
        // Verificar si el usuario está autenticado
        isLoggedIn(req, res, async () => {
            const userId = req.user._id;
            const priority = req.params.priority;
            const priorities = await Task.find({priority,user: userId }).sort({ deadline: 1 });
            res.json(priorities);
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default priorityCtrl;
