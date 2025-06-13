import { model, Schema } from "mongoose"

const AnalyticSchema = new Schema({
    link: {
        type: Schema.Types.ObjectId,
        ref: "Link",
        index: true
    },
    ipAddress: {
        type: String
    },
    browser: {
        type: String
    },
    os: { 
        type: String, 
        default: "Unknown" 
    },
    device: { 
        type: String, 
        default: "Unknown" 
    },
    source: { 
        type: String, 
        default: "Direct" 
    },
    medium: { 
        type: String, 
        default: "Unknown" 
    },
    referer: { 
        type: String, 
        default: "Unknown" 
    },
    // campaign:{ 
    //     type: String, 
    //     default: "Unknown" 
    // }
}, { timestamps: true });

export default model("Analytic", AnalyticSchema);