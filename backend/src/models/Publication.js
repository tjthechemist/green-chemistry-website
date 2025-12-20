import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: [{ type: String }],
    journal: { type: String },
    year: { type: Number },
    abstract: { type: String },
});

export default mongoose.model("Publication", publicationSchema);