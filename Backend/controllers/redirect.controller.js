import Link from "../models/link.model.js"
import asyncHandler from "../utils/AsyncHandler.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import Analytics from "../models/analytic.model.js"
import {UAParser} from 'ua-parser-js';
import requestIp from 'request-ip';
import { detectSource } from "../utils/refererDetector.js"
const redirectLink = asyncHandler(async (req, res) => {
  const ua = new UAParser(req.headers['user-agent']).getResult();
  const ip = requestIp.getClientIp(req);
  const referer = req.headers.referer || '';
  const { source, medium } = detectSource(referer);

  const shortCode = req.params.shortcode;
  if(!shortCode){
    res.status(200).json({
      data: "Incomplete url"
    })
  }
  const existedShortCode = await Link.findOne({ shortCode });

  if (!existedShortCode) {
    throw new ApiError(401, "Page not found!");
  }

  existedShortCode.clickCount += 1;
  await existedShortCode.save();

  await Analytics.create({
    link: existedShortCode._id,
    ipAddress: ip,
    browser: ua.browser.name,
    os: ua.os.name,
    device: ua.device.type || 'Desktop',
    source,
    medium,
    referer: referer || 'unknown',
  });

  res.redirect(existedShortCode.originalUrl);
});


export default redirectLink