import Member from '../models/Member';

export const addMember = async (req, res, next) => {
    try {
        const { name, role, group } = req.body;
        const newMember = new Member({ name, role, group });
        await newMember.save();
        res.status(201).json({ member: newMember });
    } catch (err) {
        next(err);
    }
};

export const getMembers = async (req, res, next) => {
    try {
        const members = await Member.find().populate('group', 'name email');
        res.status(200).json({ members });
    } catch (err) {
        next(err);
    }
};

export const updateMember = async (req, res, next) => {
    try {
        const memberId = req.params.id;
        const updates = req.body;
        const updatedMember = await Member.findByIdAndUpdate(memberId, updates, { new: true });
        if (!updatedMember) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.status(200).json({ member: updatedMember });
    } catch (err) {
        next(err);
    }
};

export const deleteMember = async (req, res, next) => {
    try {
        const memberId = req.params.id;
        const deletedMember = await Member.findByIdAndDelete(memberId);
        if (!deletedMember) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (err) {
        next(err);
    }
};