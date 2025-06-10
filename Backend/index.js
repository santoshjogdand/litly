//Server startup & listening
import app from "./app.js";
import dotenv from "dotenv";
import chalk from "chalk"
import connectDB from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 8000
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(chalk.green(`🚀 Server running at http://localhost:${PORT}`));
    })
})