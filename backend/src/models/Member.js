import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    role: { type: String, },
    joinedDate: { type: Date, default: Date.now() },
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
});

export default mongoose.model("Member", memberSchema);