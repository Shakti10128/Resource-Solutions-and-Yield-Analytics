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
        return errorResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"Something went wrong while locking the table.");
    }
}

const unlockTable = async(req,res)=>{
    try {
        const {tableId,userId} = req.body;
        // Check if the table is even locked
        if (!tableLocks[tableId]) {
            return errorResponse(res, StatusCodes.NOT_FOUND, "Table is not locked.");
        }

        // Check if the lock belongs to the same user
        if (tableLocks[tableId].userId !== userId) {
            return errorResponse(res, StatusCodes.FORBIDDEN, "You are not allowed to unlock this table.");
        }
        
        // if the req user has accuire the table relase it
        delete tableLocks[tableId];
        return successResponse(res,StatusCodes.OK,null,"Table unlocked successfully");
    } catch (error) {
        return errorResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"Something went wrong while unlocking the table.");
    }
}

const getTableStatus = async(req,res)=>{
    try {
        const {tableId} = req.params; // getting tableId from the params
        let isLocked = false;
        // if the table is locked and the time not expire
        if(tableLocks[tableId] && tableLocks[tableId].expiryTime > Date.now()) {
            isLocked = true;
        }

        return res.status(StatusCodes.OK).json({
            isLocked
        })
    } catch (error) {
        return errorResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"Something went wrong while checking table status.");
    }
}

module.exports = {
    lockTable,
    unlockTable,
    getTableStatus
}