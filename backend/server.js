import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Import routes
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 6000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  console.log(err.error);
  res.status(500).send("Something broke!");
});

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
