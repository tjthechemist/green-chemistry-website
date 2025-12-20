import express from 'express';
import {
    addMember,
    getMembers,
    updateMember,
    deleteMember,
} from '../controllers/memberController';
import { authMiddleware } from '../middleware/authMiddleware';
import { adminOnly } from '../middleware/adminOnly';

const memberRoutes = express.Router();

memberRoutes.post('/', authMiddleware, adminOnly, addMember);
memberRoutes.get('/', authMiddleware, getMembers);
memberRoutes.put('/:id', authMiddleware, adminOnly, updateMember);
memberRoutes.delete('/:id', authMiddleware, adminOnly, deleteMember);

export default memberRoutes;