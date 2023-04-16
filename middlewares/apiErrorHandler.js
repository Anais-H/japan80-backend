const { ApiError } = require('../utils/ApiError');

const apiErrorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
        console.error("[API_ERROR_MIDDLEWARE]", err);
    } else {
        
    }

    if (err instanceof ApiError) {
        res.status(err.code).json({
            error: err.message
        });
        return;
    }

    res.status(500).send("An error occured server side...");
}

module.exports = {
    apiErrorHandler
}