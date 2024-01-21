const {
  sendBadRequestResponse,
  sendUnAuthorized,
} = require("../utils/responseHandler"); // Importing response handling functions
const { isValidToken } = require("../utils/jwtUtil"); // Importing token validation function

// Middleware to validate the request for OTP validation endpoint
// Expects 'email' request body
module.exports.validateOTPRequest = (req, res, next) => {
  const { email } = req.body;  
  console.log('LOGGING.... Request Data -> Body: ', req.body, 
  'Request Content-Type: ' , req.headers['content-type'], ' - Request Agent: ', req.headers['user-agent'] )


  if (!email) {
    // If 'email' is missing, send a Bad Request response
    return sendBadRequestResponse(res);
  }
  next();
};

// Middleware to validate user data for sign-up
module.exports.validateUserData = (req, res, next) => {
  const { name, email, mobile, password, otp } = req.body;
  console.log(req.body)
  if (    
    !name ||
    !email ||
    !mobile ||
    !password ||
    !otp
  ) {
    // If any of the required fields are missing, send a Bad Request response
    return sendBadRequestResponse(res);
  }
  next();
};

// Middleware to validate login data
module.exports.validateLoginData = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    // If 'email' or 'password' is missing, send a Bad Request response
    return sendBadRequestResponse(res);
  }
  next();
};

// Middleware to authenticate requests using JWT token
module.exports.authenticate = async (req, res, next) => {
  const receivedToken = req.header("Authorization").split(" ")[1]; // Extract token from Authorization header
  
  if (!receivedToken) {
    // If token is missing, send a Bad Request response
    return sendBadRequestResponse(res);
  }
  
  if (!await isValidToken(receivedToken)) {
    // If the token is invalid, send an Unauthorized response
    return sendUnAuthorized(res, "Invalid Token");
  } else {
    next(); // Proceed to the next middleware or route handler if token is valid
  }
};
