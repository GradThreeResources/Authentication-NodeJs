const {sendBadRequestResponse} = require("../utils/responseHandler");
//validate /validate_otp end point
// expect email and otp
module.exports.validateOTPRequest = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    // message : Bad Request: Incomplete or incorrect information
    return sendBadRequestResponse(res);
  }
  next();
};

// validate user data middleware - sign up data
module.exports.validateUserData = (req, res, next) => {
  const { name, email, mobile, password } = req.body;
  if (
    Object.keys(req.body).length !== 4 ||
    !name ||
    !email ||
    !mobile ||
    !password
  ) {
    // message : Bad Request: Incomplete or incorrect information
    return sendBadRequestResponse(res);
  }
  next();
};
