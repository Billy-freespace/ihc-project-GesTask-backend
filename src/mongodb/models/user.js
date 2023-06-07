import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    // email: { type: String, required: true },
    // avatar: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", UserSchema);

export default userModel;
