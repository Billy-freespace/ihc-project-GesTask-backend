import { Schema, model } from "mongoose"
import mongoose from 'mongoose'
import User from "./user.js"

// Task Schema
const TaskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    comments: [{ type: String }],
    categories: [{ type: String, required: true }],
    priority: { type: String, required: true },
    deadline: { type: Date, required: true },
    status: { type: String, enum: ["Todo", "in Progress", "Completed"], default: "Todo" },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

// Task model
const Task = model("Task", TaskSchema);

export default Task;
