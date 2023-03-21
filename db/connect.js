import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url);
};
const connectionString =
  "mongodb+srv://piyush:Piyush%4019@stint.nmo2z7t.mongodb.net/?retryWrites=true&w=majority";
export default connectDB;
