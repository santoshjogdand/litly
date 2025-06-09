import { model, Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    // isSubsscribed: {
    //     type: Boolean,
    //     default: false
    // },
    // subscription:{
    //     type: Schema.Types.ObjectId,
    //     ref: ""
    // }
});

UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this,this.password, 10);
    }
    if(this.isModified()){
        this.updatedAt = Date.now()
    }
    next();
});

UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessToken = async function() {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


export default model("User", UserSchema);