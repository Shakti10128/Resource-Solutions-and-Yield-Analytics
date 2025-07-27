

const successResponse = (res,statusCode,data,message)=>{
    return res.status(statusCode).json({
        success:true,
        data:data,
        message:message
    });
}

module.exports = {
    successResponse
}