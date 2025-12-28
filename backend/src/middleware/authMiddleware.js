import jwt from "jsonwebtoken";
import Group from "../models/Group.js";

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) return res.status(401).json({ error: "Not Authorized" });

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await Group.findById(decoded.id);
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};