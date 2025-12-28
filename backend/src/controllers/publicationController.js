import Publication from "../models/Publication.js";

export const getPublications = async (req, res, next) => {
    try {
        const publications = await Publication.find();
        res.status(200).json({ publications });
    } catch (err) {
        next(err);
    }
};

export const getPublicationById = async (req, res, next) => {
    try {
        const publicationId = req.params.id;
        const publication = await Publication.findById(publicationId);
        if (!publication) {
            return res.status(404).json({ error: 'Publication not found' });
        }
        res.status(200).json({ publication });
    } catch (err) {
        next(err);
    }
};

export const createPublication = async (req, res, next) => {
    try {
        const { title, authors, journal, year, doi } = req.body;
        const newPublication = new Publication({ title, authors, journal, year, doi });
        await newPublication.save();
        res.status(201).json({ publication: newPublication });
    } catch (err) {
        next(err);
    }
};

export const updatePublication = async (req, res, next) => {
    try {
        const publicationId = req.params.id;
        const updates = req.body;
        const updatedPublication = await Publication.findByIdAndUpdate(publicationId, updates, { new: true });
        if (!updatedPublication) {
            return res.status(404).json({ error: 'Publication not found' });
        }
        res.status(200).json({ publication: updatedPublication });
    } catch (err) {
        next(err);
    }
};