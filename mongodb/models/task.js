import mongoose, { Schema, model } from "mongoose";

// Task Schema
const TaskSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    comments: [{ type: String }],
    categories: [{ type: String, required: true }],
    priority: { type: String, required: true },
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ["Todo", "in Progress", "Completed"],
      default: "Todo",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Task model
const taskModel = model("Task", TaskSchema);

export default taskModel;
