import express from "express";
import {
    getMemberByGroupId,
    addNewMember,
    updateMemberById,
    deleteMemberById,
}
from "../controllers/memberController";
import { authMiddleware } from "../middleware/authMiddleware";

const memberRoutes = express.Router();

memberRoutes.get("/:groupId/", authMiddleware, getMemberByGroupId);
memberRoutes.post("/:groupId/", authMiddleware, addNewMember);
memberRoutes.patch("/:groupId/:memberId", authMiddleware, updateMemberById);
memberRoutes.delete("/:groupId/:memberId", authMiddleware, deleteMemberById);

export default memberRoutes;