import express from "express";
import {
    login,
    requestPasswordReset,
    resetPassword,
} from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/request-password-reset", requestPasswordReset);
authRoutes.post("/reset-password/:token", resetPassword);

export default authRoutes;