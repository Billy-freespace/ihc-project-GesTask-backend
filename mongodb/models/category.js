import mongoose, { Schema, model } from "mongoose";

// Category Schema
const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// Category model
const categoryModel = model("Category", CategorySchema);

export default categoryModel;
