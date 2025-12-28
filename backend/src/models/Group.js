import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const GroupSchema = new mongoose.Schema({
    name: { type: String, required: true, lowercase: true, trim: true },
    supervisorName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    position: { type: String, required: true, enum: [
        "Professor Dr.",
        "Associate Professor Dr.",
        "Assistant Professor Dr.",
        "Dr."
    ]},
    field: { type: String, required: true, enum: [
        "Analytical Chemistry",
        "Inorganic Chemistry",
        "Organic Chemistry",
        "Physical Chemistry",
    ]},
    researchInterested: [{ type: String }],
    password: { type: String, required: true, minlength: 8 },
    pictureUrl: { type: String, required: true },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

GroupSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

GroupSchema.methods.generatePasswordResetToken = function () {
    const resetToken = crypto.randomBytes(64).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpires = Date.now() + 15*60*1000;
    return resetToken;
};

export default mongoose.model("Group", GroupSchema);