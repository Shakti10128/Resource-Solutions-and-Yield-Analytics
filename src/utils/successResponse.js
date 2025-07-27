

const successResponse = (res, statusCode, data = null, message) => {
  const response = {
    success: true,
    message
  };

  if (data !== null) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};


module.exports = {
    successResponse
}