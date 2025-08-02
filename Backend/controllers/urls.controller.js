import Analytics from "../models/analytic.model.js";
import asyncHandler from "../utils/AsyncHandler.js";
import Link from "../models/link.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";

const getUrls = asyncHandler(async (req, res) => {
    const userid = req.userid;
    const urls = await Link.find({
        createdBy: userid
    }).select("-createdBy")
    if (!urls) {
        throw new ApiError(401, "No short urls found for the user")
    }
    res.status(200).json(new ApiResponse(urls, "Urls found"))
})
const getUrlAnalytic = asyncHandler(async (req, res) => {
    const userid = req.userid
    const urlid = req.params.id
    const urlFound = await Link.findOne({
        createdBy: userid,
        _id: urlid
    }).select("_id")
    if (!urlFound) {
        throw new ApiError(405, "Url not found for user")
    }
    const url = await Analytics.find({
        link: urlid
    });
    if (!url) {
        throw new ApiError(409, "Analytics not found!")
    }
    res.status(200).json(new ApiResponse(url, "Analytics data found"))
})
const deleteUrl = asyncHandler(async (req, res) => {
    const userid = req.userid
    const urlid = req.params.id
    console.log(userid, urlid)
    const urlFound = await Link.findOne({
        createdBy: userid,
        _id: urlid
    });
    console.log(urlFound)
    if (!urlFound) {
        throw new ApiError(409, "Url doesnt exists")
    }
    await Link.findOneAndDelete({
        createdBy: userid,
        _id: urlid
    });

    await Analytics.deleteMany({
        link: urlFound._id
    })
    await Link.findOneAndDelete({
        createdBy: userid,
        _id: urlid
    });
    
    await User.updateOne(
        { _id: userid },
        { $pull: { urls: urlid } }
    );

    res.status(200).json(new ApiResponse({}, "Shortned url removed"))

})

const updateUrl = asyncHandler(async (req, res) => {
    const userid = req.userid;
    const urlid = req.params.id;
    let shortCode = req.body.customUrl || false;
    let newDestUrl = req.body.newDestUrl || false;

    const urlFound = await Link.findOne({
        createdBy: userid,
        _id: urlid
    });

    if (!urlFound) {
        throw new ApiError(404, "URL doesn't exist");
    }
    let shortCodeExist;
    if (shortCode) {
        shortCodeExist = await Link.findOne({ shortCode });
        if (shortCodeExist) {
            throw new ApiError(409, "Requested custom url is already taken")
        }
        urlFound.shortCode = shortCode;
    }
    if (newDestUrl) {
        urlFound.originalUrl = newDestUrl;
    }

    await urlFound.save();

    res.status(200).json(new ApiResponse(urlFound, "Shortcode updated successfully"));

})
export { getUrls, getUrlAnalytic, deleteUrl, updateUrl }