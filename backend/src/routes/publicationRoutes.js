import express from 'express';
import {
    getPublications,
    getPublicationById,
    createPublication,
    updatePublication,
} from "../controllers/publicationController.js";

const publicationRoutes = express.Router();

publicationRoutes.get('/', getPublications);
publicationRoutes.get('/:id', getPublicationById);
publicationRoutes.post('/', createPublication);
publicationRoutes.patch('/:id', updatePublication);

export default publicationRoutes;