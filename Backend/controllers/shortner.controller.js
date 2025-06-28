import Link from "../models/link.model.js"
import User from "../models/user.model.js"
import generateShotCode from "../utils/generateShortCode.js"
import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import asyncHandler from "../utils/AsyncHandler.js"
const randomShortLink = asyncHandler(async (req, res) => {
    const originalUrl = req.body.originalUrl;
    const title = req.body.title;
    const userid = req.userid
    const user = await User.findById(userid)
    if (!user) {
        throw new ApiError(500, "Invalid login!")
    }
    
    let shortCode;
    let shortCodeExist;
    do {
        shortCode = generateShotCode();
        shortCodeExist = await Link.findOne({ shortCode });
    } while (shortCodeExist);
    urlFound.shortCode = shortCode;
    await urlFound.save();

    const generatedLinkData = await Link.create({
        title: title,
        originalUrl: originalUrl,
        createdBy: userid,
        shortCode: shortCode
    });
    const updatedUser = await User.updateOne({
        _id: userid
    },
        { $push: { urls: generatedLinkData._id } }
    )
    if (generatedLinkData) {
        return res.status(200).json(new ApiResponse(200, generatedLinkData, "Link shorting successful"))
    }
    throw new ApiError(501, "Error while creating shortcode!");
});

const customShortLink = asyncHandler(async (req, res) => {
    
    const originalUrl = req.body.originalUrl;
    const customShortCode = req.body.customUrl;
    const userid = req.userid;

    const user = await User.findById(userid)
    console.log("Userid", userid)
    if (!user) {
        throw new ApiError(500, "Invalid login!")
    }
    const shortCodeExists = await Link.findOne({
        shortCode: customShortCode
    })
    if (shortCodeExists) {
        throw new ApiError(409, "Custom short url already exits try another one")
    }
    const data = await Link.create({
        title: title,
        originalUrl: originalUrl,
        createdBy: userid,
        shortCode: customShortCode
    });
    if (!data) {
        throw new ApiError(500, "Error while creating short url")
    }
    return res.status(200).json(new ApiResponse(data, "Created custom short url"));
    throw new ApiError(500, "Error while creating short url")
});
export { randomShortLink, customShortLink }