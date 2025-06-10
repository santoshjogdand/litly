import Link from "../models/link.model.js"
import asyncHandler from "../utils/AsyncHandler.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import Analytics from "../models/analytic.model.js"

const redirectLink = asyncHandler(async (req, res) => {
    const shortCode = req.params.shortcode;
    const rawIP = req.headers['x-forwarded-for']?.split(',').shift() || req.socket.remoteAddress;
    const ipAddress = rawIP.startsWith('::ffff:') ? rawIP.replace('::ffff:', '') : rawIP;
    console.log(shortCode)
    const existedShortCode = await Link.findOne({ shortCode })
    console.log(existedShortCode)
    if (!existedShortCode) {
        throw new ApiError(404, "Page not found!")
    }
    existedShortCode.clickCount += 1
    existedShortCode.save()
    const analytics = await Analytics.create({
            link: existedShortCode._id,
            userAgent: req.headers['user-agent'],
            ipAddress: ipAddress
    })
    res.redirect(existedShortCode.originalUrl)
    // res.status(200).json(new ApiResponse(existedShortCode.originalUrl, "Redirecting to " + existedShortCode.originalUrl))
})

export default redirectLink