import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";

import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import conversationRoute from "./routes/conversation.route.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors";

const app = express();
app.use(passport.initialize());
import("./config/passport.config.js");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_DATABASE_URL);
    console.log("Connected to mongoDB Database");
  } catch (error) {
    console.log(error);
  }
};

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from localhost:5173
    methods: "*", // Allow all methods
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept", // Allow specified headers
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
