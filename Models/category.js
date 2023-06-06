import { Schema, model } from "mongoose"
import mongoose from 'mongoose'
import User from "./user.js"

// Category Schema
const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

// Category model
const Category = model("Category", CategorySchema);

export default Category;
