import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
//db &authenticator
import connectDB from "./db/connect.js";
import "express-async-errors";
//routes
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";

//middleware
import notFoundMiddleWare from "./middleware/not-found.js";
import errorHandlerMiddleWare from "./middleware/error-handler.js";

app.use(express.json());
app.get("/", (req, resp) => {
  resp.send("Welcome!!!!!!");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is running on Port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
