import { apiError } from "../utils/apiError.js";

const errorhandler = (err, req, res, next) => {
    if (err instanceof apiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.error || null,
            data: err.data,
        });
    }
    console.error(`[Unhandled Error]: ${err.message || err}`);
    return res.status(500).json({
        success: false,
        message: "Something went wrong",
    });
};

export default errorhandler;