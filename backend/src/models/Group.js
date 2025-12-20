import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 8, select: false },
    fieldOfResearch: [{ type: String, }],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],
    avatarUrl: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});

groupSchema.pre('remove', async function (next) {
    await this.model('Member').deleteMany({ group: this._id });
    next();
});

groupSchema.virtual('memberCount').get(function () {
    return this.members.length;
});

groupSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

groupSchema.methods.generatePasswordResetToken = function () {
    const resetToken = crypto.randomBytes(64).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpires = Date.now() + 15*60*1000;
    return resetToken;
};

export default mongoose.model("Group", groupSchema);
