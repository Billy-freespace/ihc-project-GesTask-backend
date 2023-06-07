import mongoose from "mongoose";
import { log } from "mercedlogger";

const connnectDB = async (url) => {
  mongoose.set("strictQuery", true);

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.connection
  .on("open", () => log.green("MongoDB connected!"))
  .on("close", () => log.magenta("Connection to MongoDB closed."))
  .on("error", (err) => log.red(err));

export default connnectDB;
