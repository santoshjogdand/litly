import { Router } from "express";
import {registerUser, loginUser, userInfo, logoutUser} from "../controllers/user.controller.js"
import { randomShortLink, customShortLink } from "../controllers/shortner.controller.js";
import { getUrls, getUrlAnalytic, deleteUrl,updateUrl } from "../controllers/urls.controller.js";
import auth from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

//protected routes
router.route("/me").get(auth,userInfo)
// //dashboard protected routes
router.route("/urls").get(auth,getUrls)
router.route("/analytics/:id").get(auth,getUrlAnalytic)
router.route("/urls/:id").put(auth, updateUrl).delete(auth, deleteUrl)
router.route("/randomshort").post(auth,randomShortLink)
router.route("/customshort").post(auth,customShortLink)

router.route("/logout").get(auth,logoutUser)

export default router