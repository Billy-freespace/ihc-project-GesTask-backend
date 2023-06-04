import mongoose from "mongoose";

const connnectDB = async (url) => {
  mongoose.set("strictQuery", true);

  await mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(err));
};

export default connnectDB;
