import {model, Schema} from "mongoose"

const AnalyticSchema = new Schema({
    link: {
        type: Schema.Types.ObjectId,
        ref: "Link",
        index: true
    },
    userAgent: {
        type: String  
    },
    ipAddress: {
        type: String
    }
},{timestamps: true});

export default model("Analytic",AnalyticSchema);