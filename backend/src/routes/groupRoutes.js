import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getAllGroups, getGroupById, updateGroup } from "../controllers/groupController.js";

const groupRoutes = express.Router();

groupRoutes.get("/", authMiddleware, getAllGroups);
groupRoutes.get("/:groupId", authMiddleware, getGroupById);
groupRoutes.patch("/:groupId", authMiddleware, updateGroup);

export default groupRoutes;