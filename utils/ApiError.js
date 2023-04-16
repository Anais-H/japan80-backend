class ApiError {

    code;
    message;
    error;

    constructor(code, message, error) {
        this.code = code;
        this.message = message;
        this.error = error;
    }

    static badRequest(msg, err) {
        const errorMsg = err ?? msg;
        return new ApiError(400, msg, errorMsg);
    }

    static missingParameter(msg, err) {
        const errorMsg = err ?? msg;
        return new ApiError(422, msg, errorMsg);
    }

    static internal(msg, err) {
        const errorMsg = err ?? msg;
        return new ApiError(500, msg, errorMsg);
    }

    static notFound(msg, err) {
        const errorMsg = err ?? msg;
        return new ApiError(404, msg, errorMsg);
    }
}

module.exports = {
    ApiError
}