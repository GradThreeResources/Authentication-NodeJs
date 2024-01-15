// Import necessary modules
const { sequelize } = require("../database-config");
const { createUser } = require("../models/user"); // Import createUser function from user model
const { hashPassword, isValidPassword } = require("../utils/passwordUtils"); // Import hashPassword function from passwordUtils
const { createUserOTP, UserSecret } = require("../models/userOTP");
const { sendOTPMail } = require("./emailService");
const { User } = require("../models/user");
const { sign } = require("../utils/jwtUtil");
const {
  sendUnAuthorized,
  sendErrorResponse,
  sendConflictResponse,
  sendSuccessResponse,
  sendBadRequestResponse,
} = require("../utils/responseHandler");
const {
  isValidOTP,
  generateSecret,
  generateTOTP,
} = require("../utils/otpUtils");

// Expect{ Email, password}
module.exports.login = async (req, res) => {
  // Endpoint for user login
  const { email, password } = req.body; // Extract email and password from request body
  const user = await User.findOne({
    where: {
      email: email,
    },
    attributes: ["email", "password"],
  });
  if (!user) {
    // If user not found, send unauthorized response
    return sendUnAuthorized(res);
  }

  if (await isValidPassword(password, user.password)) {
    // If password is valid, create JWT token and send success response
    const token = sign({ email: user.email, id: user.id });
    return sendSuccessResponse(res, token); // Message: Success
  } else {
    // If password is invalid, send unauthorized response
    return sendUnAuthorized(res); // Message: Unauthorized
  }
};

// Expect{ Email}
module.exports.sendOTP = async (req, res) => {
  // Endpoint to send OTP to a given email
  const transaction = await sequelize.transaction();
  try {
    const { email } = req.body; // Extract email from request body
    const user = await User.findOne({
      where: {
        email: email,
      },
      attributes: ["email"],
    });
    if (user) {
      // If user already exists, send conflict response
      return sendConflictResponse(res);
    } else {
      // Generate secret and OTP, save to the database, and send OTP email
      const secret = generateSecret();
      const generatedOTP = generateTOTP(secret);
      await createUserOTP(email, secret, transaction);
      sendOTPMail(email, generatedOTP);

      await transaction.commit();
      return sendSuccessResponse(res); // Message : Success
    }
  } catch (error) {
    await transaction.rollback();
    console.log(
      "Error while sending email or interacting with database Error:",
      error
    );
    return sendErrorResponse(res, 500); // Message : Server Error
  }
};

// Endpoint for user registration (sign-up)
// Expect{ Email, password }
exports.register = async (req, res) => {
  const transaction = await sequelize.transaction(); // Await the transaction creation
  const { email, password, otp, mobile, name } = req.body; // Extract data from request body
  try {
    const hashedPassword = await hashPassword(password); // Hash the provided password

    const userOtp = await UserSecret.findOne({
      where: {
        email: email,
      },
      attributes: ["email", "OtpSecret"],
    });
    const user = await User.findOne({
      where: {
        email: email,
      },
      attributes: ["email"],
    });

    if (!userOtp) {
      // If OTP not found, send bad request response
      return sendBadRequestResponse(res);
    }

    if (!isValidOTP(userOtp.OtpSecret, otp) || user) {
      // If OTP is invalid or user already exists, send unauthorized response
      return sendUnAuthorized(res, "Invalid Credentials");
    }
    // Update user secret and save changes
    userOtp.OtpSecret = "";
    userOtp.save();

    // Create user using createUser function from user model within the transaction
    await createUser(name, email, hashedPassword, mobile, transaction);
    transaction.commit();

    return sendSuccessResponse(res); // Message : Success
  } catch (error) {
    console.error("Error happened while creating a new user:", error);
    await transaction.rollback();
    return sendErrorResponse(res, 500); // Message : Server Error
  }
};
