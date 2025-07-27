const getLockSeedData = require("../seed/lockSeeder");
const {tableLocks} = require("../utils/memoryStore");
const {StatusCodes} = require("http-status-codes");
const {successResponse} = require("../utils/successResponse");


const seedData = async(req,res)=>{
    try {
        const seedData = getLockSeedData();
        Object.assign(tableLocks, seedData);
        return successResponse(res,StatusCodes.CREATED,tableLocks,'Seed data created for table locks');
    } catch (error) {
        console.log("Error while seeding the data"); 
        // we can handle the error in more better way
        throw error;
    }
};

module.exports = {
    seedData
}