import crypto from 'crypto';
import Group from '../models/Group';
import jwt from 'jsonwebtoken';

export const requestPasswordReset = async (req, res, next) => {
    try {
        const { email } = req.body;
        const group = await Group.findOne({ email });
        if (!group) return res.status(404).json({ error: 'Group not found' });

        const resetToken = group.generatePasswordResetToken();
        await group.save({ validateBeforeSave: false });

        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

        await sendEmail(group.email, "Password Reset", `Reset Link: ${resetUrl}`);
        res.status(200).json({ message: 'Password reset link sent' });
    } catch (err) {
        next(err);
    }
};

export const resetPassword = async (req, res, next) => {
    try {
        const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
        const group = await Group.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: { $gt: Date.now() },
        });
        if (!group) return res.status(400).json({ error: 'Invalid or expired token' });
        group.password = req.body.password;
        group.resetPasswordToken = undefined;
        group.resetPasswordExpires = undefined;
        await group.save();
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const group = await Group.findOne({ email }).select('+password');
        if (!group || !(await group.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: group._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
};