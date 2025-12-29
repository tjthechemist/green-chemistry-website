import express from 'express';
import { authMiddleware } from "../middleware/authMiddleware.js"
import { getPublications, getPublicationById } from '../controllers/publicationController.js';

const publicationRoutes = express.Router();

publicationRoutes.get('/:groupId/', authMiddleware, getPublications);
publicationRoutes.get('/:groupId/:id', authMiddleware, getPublicationById);

export default publicationRoutes;