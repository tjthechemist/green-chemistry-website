import mongoose from "mongoose";

const PublicationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: [{ type: String }],
    journal: { type: String },
    year: { type: Number },
    abstract: { type: String },
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
}, { timestamps: true });

export default mongoose.model("Publication", PublicationSchema);