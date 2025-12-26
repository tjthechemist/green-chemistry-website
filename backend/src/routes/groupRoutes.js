import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";

const groupRoutes = express.Router();

groupRoutes.get("/", authMiddleware, getAllGroups);
groupRoutes.get("/:groupId", authMiddleware, getGroupById);
groupRoutes.post("/:groupId", authMiddleware, updateGroup);
groupRoutes.get("");

export default groupRoutes;