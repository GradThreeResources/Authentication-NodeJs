// Function to send a success response
const sendSuccessResponse = (res, data, message = 'Success') => {
  return res.status(200).json({ success: true, message, data });
};

// Function to send an error response
const sendErrorResponse = (res, statusCode = 500, message = 'Server Error') => {
  return res.status(statusCode).json({ success: false, message });
};

// Function to send a conflict response (e.g., for existing user conflicts)
const sendConflictResponse = (res, message = 'Conflict: User already exists') => {
  return res.status(409).json({ success: false, message });
};

// Function to send a bad request response (e.g., for incomplete or incorrect information)
const sendBadRequestResponse = (res, message = 'Bad Request: Incomplete or incorrect information') => {
  return res.status(400).json({ success: false, message });
};

// Function to send an unauthorized response
const sendUnAuthorized = (res, message = "Unauthorized") => {
  return res.status(401).json({ success: false, message });
};

// Exporting the response functions for external use
module.exports = {
  sendSuccessResponse, // Sends a success response
  sendErrorResponse, // Sends an error response
  sendConflictResponse, // Sends a conflict response
  sendBadRequestResponse, // Sends a bad request response
  sendUnAuthorized // Sends an unauthorized response
};
