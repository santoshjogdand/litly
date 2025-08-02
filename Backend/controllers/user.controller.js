import User from "../models/user.model.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import asyncHandler from "../utils/AsyncHandler.js"
import { z } from "zod"
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const userSchema = z.object({
    username: z.string().optional(),
    email: z.string().email("Invalid email").optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
}).refine(data => data.username || data.email, {
    message: "Either username or email is required",
    path: ["username"], // or path: [] if you don’t want to tie it to a single field
});

const regUserSchema = z.object({
    username: z.string().min(3, "Username is required"),
    email: z.string().email("Invalid email"),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[@$!%*?&#^()_\-+=]/, "Password must contain at least one special character")
})

const registerUser = asyncHandler(async (req, res) => {
    const validatedData = regUserSchema.safeParse(req.body);
    console.log(validatedData)
    if (!validatedData.success) {
        const erros = await validatedData.error.errors.map(e => e.message)
        throw new ApiError(400, erros)
    }
    const data = validatedData.data;
    const {
        username,
        email,
        password
    } = data

    const emailExist = await User.findOne({
        email
    })
    const usernameExist = await User.findOne({
        username
    })
    if (emailExist) {
        throw new ApiError(409, "User already exists with this email")
    }
    if (usernameExist) {
        throw new ApiError(409, "Someone already taken this username")
    }
    const user = await User.create({
        email,
        username,
        password
    });
    const createdUser = await User.findById(user._id).select("-password")
    if (!createdUser) {
        throw new ApiError(401, "User creation failed");
    }
    return res.status(200).json(new ApiResponse(createdUser, "User registration done"))
});
const loginUser = asyncHandler(async (req, res) => {
    const validatedData = userSchema.safeParse(req.body);
    console.log(validatedData)
    if (!validatedData.success) {
        const erros = await validatedData.error.errors.map(e => e.message)
        throw new ApiError(400, erros)
    }
    const data = validatedData.data;
    const {
        username,
        email,
        password
    } = data
    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        throw new ApiError(403, "User not found")
    }
    const isPassCorrect = await user.isPasswordCorrect(password)
    if (!isPassCorrect) {
        throw new ApiError(403, "Password is incorrect")
    }
    const loggedInUser = await User.findById(user._id).select("-password")
    const accessToken = await user.generateAccessToken()
    const options = {
        maxAge: 2 * 60 * 60 * 1000, // 10 min
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
    }
    console.log("Secure: ", process.env.NODE_ENV === "production")
    res.status(200).cookie("accessToken", accessToken, options).json(new ApiResponse(loggedInUser, "Login in successful"))

});

const userInfo = asyncHandler(async (req, res) => {
    const userid = req.userid
    const user = await User.findById(userid);
    if(!user){
        throw new ApiError(404, "requested resourse not found")
    }
    res.status(200).json(new ApiResponse(user,"User data fetched"))
})

const logoutUser = asyncHandler(async(req,res) =>{
    console.log("Loggin out user")
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    }
    res.status(200).clearCookie("accessToken").json(new ApiResponse('', "Login in successful"))
})

export { loginUser, registerUser, userInfo,logoutUser }