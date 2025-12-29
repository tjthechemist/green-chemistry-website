import Member from "../models/Member.js";
import Group from "../models/Group.js";

export const getMemberByGroupId = async (req, res, next) => {
    try {
        const { groupId } = req.param;
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        };
        const members = await Member.find({ group: groupId});
        res.status(200).json(members)
    } catch (err) {
        next(err);
    };
};

export const addNewMember = async (req, res, next) => {
    try {
        const { groupId, ...memberData } = req.body;
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        };
        const member = await Member.create(memberData);
        if (!member) {
            return res.status(400).json({ message: "Member failed to added."});
        };
        res.status(201).json({ message: "Member add successfully", member});
    } catch (err) {
        next(err);
    };
};

export const updateMemberById = async (req, res, next) => {
    try {
        const { groupId, memberId, ...memberData } = req.body;
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        };
        const updatedMember = await Member.findByIdAndUpdate(memberId, memberData, { new: true, runValidators: true });
        if (!updatedMember) {
            res.status(404).json({ message: "Member not found"});
        };
        res.status(200).json({ message: "Update complete", updatedMember});
    } catch (err) {
        next(err);
    };
};

export const deleteMemberById = async (req, res, next) => {
    try {
        const { groupId, memberId } = req.params;
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        };
        const member = await Member.findByIdAndDelete(memberId);
        if (!member) {
            return res.status(400).json({ message: "Member Deleted failed" });
        };
        res.status(200).json({ message: "Member deleted!" });
    } catch (err) {
        next(err);
    };
};
