//Server startup & listening
import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config({
    path: './.env'
})
const PORT = process.env.PORT || 8000
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running at port: ${PORT}`);
    })
}).catch((err)=>console.log("Error occured: "), err)