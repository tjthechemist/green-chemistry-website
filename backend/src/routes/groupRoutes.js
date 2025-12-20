import express from 'express';
import {
    getMembersByGroup,
    addMemberToGroup,
    removeMemberFromGroup,
} from '../controllers/groupController';
import { authMiddleware } from '../middleware/authMiddleware';
import { adminOnly } from '../middleware/adminOnly';

const groupRoutes = express.Router();

groupRoutes.get('/:groupId/members', authMiddleware, getMembersByGroup);
groupRoutes.post('/:groupId/members/:memberId', authMiddleware, adminOnly, addMemberToGroup);
groupRoutes.delete('/:groupId/members/:memberId', authMiddleware, adminOnly, removeMemberFromGroup);

export default groupRoutes;