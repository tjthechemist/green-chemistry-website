import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import publicationRoutes from "./routes/publicationRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/publications", publicationRoutes);
app.use("/api/members", memberRoutes);

app.get("/", (req, res) => res.send("Website backend is running"));
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
});

export default app;