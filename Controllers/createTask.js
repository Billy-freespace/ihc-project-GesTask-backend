import isLoggedIn from "./middleware.js";
import Task from "../Models/task.js";
import dotenv from "dotenv"; // import dotenv
import { Router } from "express"; // import router from express
import Category from "../Models/category.js";

dotenv.config(); // load .env variables

const taskRoute = Router(); // create router to create route bundle

// controlador para crear una nueva tarea

taskRoute.post("/createTask", isLoggedIn, async (req, res) => {
    try {
        const { name, description, comments, categories, priority, deadline, status } = req.body;
        const userId = req.user._id;
        // console.log(req.user);
        // console.log(userId);


        // Crear una nueva instancia de Task con los datos recibidos
        const newTask = new Task({
            name,
            description,
            comments,
            categories,
            priority,
            deadline,
            status,
            user: userId
        });

        // Guardar la nueva tarea en la base de datos
        const createdTask = await newTask.save();

        res.status(201).json(createdTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
taskRoute.get("/tasks", isLoggedIn, async (req, res) => {
    try {
        const userId = req.user._id; // Obtén el _id del usuario desde req.user

        // Obtén todas las tareas asociadas al usuario
        const tasks = await Task.find({ user: userId });

        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Actualizar una tarea del usuario
// Actualizar una tarea del usuario
taskRoute.patch("/tasks/:id", isLoggedIn, async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        const { name, description, comments, categories, priority, deadline, status } = req.body;
        if (name) {
            task.name = name;
        }
        if (description) {
            task.description = description;
        }
        if (comments) {
            task.comments = comments;
        }
        if (categories) {
            task.categories = categories;
        }
        if (priority) {
            task.priority = priority;
        }
        if (deadline) {
            task.deadline = deadline;
        }
        if (status) {
            task.status = status;
        }
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Eliminar una tarea del usuario
taskRoute.delete("/tasks/:id", isLoggedIn, async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });

        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }

        await Task.deleteOne({ _id: req.params.id, user: req.user._id });

        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


export default taskRoute; // export router as default
