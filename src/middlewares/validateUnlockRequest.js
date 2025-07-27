const { StatusCodes } = require('http-status-codes');
const {errorResponse} = require('../utils/errorResponse');

const validateUnlockRequest = (req, res, next) => {
    // require fields to unlock the table
    const { tableId, userId } = req.body;

    // if the tableId is missing or it's not string
    if (!tableId || typeof tableId !== 'string') {
        return errorResponse(res, StatusCodes.BAD_REQUEST, 'Invalid or missing tableId');
    }

    // if the userId is missing or it's not string
    if (!userId || typeof userId !== 'string') {
        return errorResponse(res, StatusCodes.BAD_REQUEST, 'Invalid or missing userId');
    }

    next(); // calling the next middleware if there is any
};

module.exports = {
    validateUnlockRequest
};
