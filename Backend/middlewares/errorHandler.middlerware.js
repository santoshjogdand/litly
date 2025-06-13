const errorHandler = (err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const errMessage = err.message || "Something went wrong"
    res.status(statusCode).json({
        success: false,
        errorMessage: errMessage,
        stack: process.env.development ? err.stack : ""
    })
}

export default errorHandler