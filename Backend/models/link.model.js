import { Schema, model } from "mongoose";


const LinkSchema = Schema({
    originalUrl: { 
        type: String,
        required: true
    },
    clickCount:{
        type: Number,
        default: 0
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps: true});


export default model("Link", LinkSchema);