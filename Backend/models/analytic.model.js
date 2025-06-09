import {model, Schema} from "mongoose"

const AnalyticSchema = Schema({
    link: {
        type: Schema.Types.ObjectId,
        ref: "Link"
    },
    userAgent: {
        type: String  
    },
    ipAddress: {
        type: String
    },
    clickAt: {
        type: Date,
        default: Date.now
    }
})