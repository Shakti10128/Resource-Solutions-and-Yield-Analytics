const { StatusCodes } = require('http-status-codes');
const {errorResponse} = require('../utils/errorResponse');

const validateLockRequest = (req, res, next) => {
    // require fields to loch the table
    const { tableId, userId, duration } = req.body;

    // if the tableId is missing or it's not string
    if (!tableId || typeof tableId !== 'string') {
        return errorResponse(res, StatusCodes.BAD_REQUEST, 'Invalid or missing tableId');
    }

    // if the userId is missing or it's not string
    if (!userId || typeof userId !== 'string') {
        return errorResponse(res, StatusCodes.BAD_REQUEST, 'Invalid or missing userId');
    }

    // if the dureation is not provided and the type is not number and it should be positive
    if (
        duration === undefined ||
        typeof duration !== 'number' ||
        duration <= 0
    ) {
        return errorResponse(res, StatusCodes.BAD_REQUEST, 'Invalid or missing duration');
    }

    // Passed all checks
    next(); // calling the next middleware if there is any
};

module.exports = {
    validateLockRequest
};
