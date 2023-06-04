import { Schema, model } from "mongoose" // import Schema & model

// Todo Schema
const TodoSchema = new Schema({
    username: { type: String, required: true },
    reminder: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false }
});

// Todo model
const Todo = model("Todo", TodoSchema);

export default Todo;
