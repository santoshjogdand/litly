import jwt from "jsonwebtoken"
import asyncHandler from "../utils/AsyncHandler.js"
import ApiError from "../utils/ApiError.js"

const auth = asyncHandler(async (req, res, next)=>{
    const accessToken = req.cookies.accessToken
    if (!accessToken) {
        throw new ApiError(401, "Access token missing, please login");
    }

    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    if (!decodedToken) {
        throw new ApiError(403, "Authentication error, please login again")
    }
    req.userid = decodedToken._id
    next()
})

export default auth