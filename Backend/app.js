import express from "express";
import errorHandler from "./middlewares/errorHandler.middlerware.js"
import router from "./routes/shortner.route.js";
import cookieParser from "cookie-parser"
import redirectRouter from "./routes/redirect.route.js"

const app = express()
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// endpoints
//short-url
//custom short-url
//shorten/:shortcode
//

//models
// User, Link, click
app.use(cookieParser())
app.use("/",redirectRouter)
app.use("/api/v1",router)
app.use(errorHandler);

export default app