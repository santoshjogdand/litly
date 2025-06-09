import { Schema, model } from "mongoose";

const LinkSchema = Schema({
    originalUrl: { 
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    clickCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});


export default model("Link", LinkSchema);