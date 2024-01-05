
const sendSuccessResponse = (res, data, message = 'Success') => {
    return res.status(200).json({ success: true, message, data });
  };
  
  const sendErrorResponse = (res, statusCode = 500, message = 'Server Error') => {
    return res.status(statusCode).json({ success: false, message });
  };
  
  const sendConflictResponse = (res, message = 'Conflict: User already exists') => {
    return res.status(409).json({ success: false, message });
  };
  
  const sendBadRequestResponse = (res, message = 'Bad Request: Incomplete or incorrect information') => {
    return res.status(400).json({ success: false, message });
  };
  
  module.exports = { sendSuccessResponse, sendErrorResponse, sendConflictResponse, sendBadRequestResponse };
  