import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true, enum: [
        "Post Doctoral Researcher",
        "Ph.D. Student",
        "M.Sc. Student",
        "B.Sc. Student",
    ]},
    group: { type: mongoose.Schema.ObjectId, ref: "Group", required: true },
    pictureUrl: { type: String, required: true },
    bio: { type: String },
}, { timestamps: true });

export default mongoose.model("Member", MemberSchema);