const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/errorResponse");
const {tableLocks} = require("../utils/memoryStore");
const { successResponse } = require("../utils/successResponse");

const lockTable = async(req,res)=>{
    try {
        const {tableId,userId,duration} = req.body;
        // if the table is booked and time not expires
        if(tableLocks[tableId] && Date.now() < tableLocks[tableId].expiryTime) {
            return errorResponse(res,StatusCodes.CONFLICT,`Table is currently locked by another user.`);
        }
        // Lock the table
        tableLocks[tableId] = {
            userId,
            expiryTime: Date.now() + duration * 1000 // Convert seconds to ms
        };

        return successResponse(res,StatusCodes.OK,`Table locked successfully.`);

    } catch (error) {
        console.log("Error while locking the table");
        throw error;
    }
}

module.exports = {
    lockTable
}