import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    urls: [{
        type: Schema.Types.ObjectId,
        ref: "Link"
    }]
});



export default model("User", UserSchema);