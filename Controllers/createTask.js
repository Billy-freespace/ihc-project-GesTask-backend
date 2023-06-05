import Task from "../Models/task.js";
import dotenv from "dotenv"; // import dotenv
import { Router } from "express"; // import router from express

dotenv.config(); // load .env variables

const taskRoute = Router(); // create router to create route bundle


// controlador para crear una nueva tarea
taskRoute.post("/createTask", async (req, res) => {
    try {
        const { name, description, comments, categories, priority, deadline, status } = req.body;

        // Crear una nueva instancia de Task con los datos recibidos
        const newTask = new Task({
            name,
            description,
            comments,
            categories,
            priority,
            deadline,
            status,
        });

        // Guardar la nueva tarea en la base de datos
        const createdTask = await newTask.save();

        res.status(201).json(createdTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default taskRoute; // export router as default
