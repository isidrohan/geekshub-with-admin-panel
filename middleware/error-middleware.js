const errorMiddleware = (err,req,res,next) =>{
    const status = err.status || 500;
    const message = err.message || "backend error";
    const extraDetail = err.extraDetail || "backend error"

    return res.status(status).json({message,extraDetail})
};

module.exports = errorMiddleware;