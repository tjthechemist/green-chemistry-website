import express from 'express';
import {
    getPublications,
    getPublicationById,
    createPublication,
    updatePublication,
} from "../controllers/publicationController";

const publicationRoutes = express.Router();

publicationRoutes.get('/', getPublications);
publicationRoutes.get('/:id', getPublicationById);
publicationRoutes.post('/', createPublication);
publicationRoutes.put('/:id', updatePublication);

export default publicationRoutes;