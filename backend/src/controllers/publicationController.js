import Publication from "../models/Publication.js";
import Group from "../models/Group.js";

export const getPublications = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const group = await Group.findById(groupId);
        if (!group) {
            res.status(404).json({ error: "Group not found" });
        }
        const publications = await Publication.find({ group: groupId });
        if (!publications) {
            res.status(404).json({ error: "Publication not found" });
        }
        res.status(200).json({ publications });
    } catch (err) {
        next(err);
    }
};

export const getPublicationById = async (req, res, next) => {
    try {
        const { groupId, publicationId } = req.params;
        const group = await Group.findById(groupId);
        if (!group) {
            res.status(404).json({ error: "Group not found" });
        }
        const publication = await Publication.findById(publicationId);
        if (!publication) {
            return res.status(404).json({ error: "Publication not found" });
        }
        res.status(200).json({ publication });
    } catch (err) {
        next(err);
    }
};