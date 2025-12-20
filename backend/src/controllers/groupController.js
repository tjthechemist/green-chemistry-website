import Group from '../models/Group';

export const addMemberToGroup = async (req, res, next) => {
    try {
        const { groupId, memberId } = req.params;
        const group = await Group.findById(groupId);
        if (!group) return res.status(404).json({ error: 'Group not found' });
        if (group.members.includes(memberId)) {
            return res.status(400).json({ error: 'Member already in group' });
        }
        group.members.push(memberId);
        await group.save();
        res.status(200).json({ message: 'Member added to group' });
    } catch (err) {
        next(err);
    }
};

export const removeMemberFromGroup = async (req, res, next) => {
    try {
        const { groupId, memberId } = req.params;
        const group = await Group.findById(groupId);
        if (!group) return res.status(404).json({ error: 'Group not found' });
        group.members = group.members.filter(id => id.toString() !== memberId);
        await group.save();
        res.status(200).json({ message: 'Member removed from group' });
    } catch (err) {
        next(err);
    }
};

export const getMembersByGroup = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const group = await Group.findById(groupId).populate('members');
        if (!group) return res.status(404).json({ error: 'Group not found' });
        res.status(200).json({ members: group.members });
    } catch (err) {
        next(err);
    }
};