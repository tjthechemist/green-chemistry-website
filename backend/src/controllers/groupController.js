import Group from "../models/Group";

export const getAllGroups = async (req, res, next) => {
    try {
        const groups = await Group.find();
        res.status(200).json({ groups });
    } catch (err) {
        next(err);
    };
};

export const getGroupById = async (req, res, next) => {
    try {
        const { groupId } = req.body;
        const group = await Group.findById(groupId);
        res.status(200).json({ group });
    } catch (err) {
        next(err);
    };
};

export const updateGroup = async (req, res, next) => {
    try {
        const { groupId } = req.body;
        const group = await Group.findById(groupId);
        group.updateOne(req.param);
        res.status().json({ message: "Update Complete" });
    } catch {
        next(err);
    };
};