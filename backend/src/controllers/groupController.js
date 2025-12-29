import Group from "../models/Group.js";

export const getAllGroups = async (req, res, next) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (err) {
        next(err);
    };
};

export const getGroupById = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const group = await Group.findById(groupId);

        if(!group) {
            return res.status(404).json({ error: "Group not found!"})
        }
        res.status(200).json({ group });
    } catch (err) {
        next(err);
    };
};

export const updateGroup = async (req, res, next) => {
    try {
        const { groupId, ...updateData } = req.body;
        const updatedGroup = await Group.findByIdAndUpdate(groupId, updateData, { new: true, runValidators: true });
        if (!updatedGroup) {
            return res.status(404).json({ error: "Group not found"});
        }
        res.status(200).json({ message: "Update Completed!", data: updatedGroup})
    } catch (err) {
        next(err);
    };
};