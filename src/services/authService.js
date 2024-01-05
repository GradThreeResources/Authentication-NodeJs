// Import necessary modules
const { sequelize } = require("../database-config");
const { createUser } = require("../models/user"); // Import createUser function from user model
const { hashPassword } = require("../utils/passwordUtils"); // Import hashPassword function from passwordUtils
const { createUserOTP } = require("../models/userOTP");
const { sendOTPMail } = require("./emailService");
const { User } = require("../models/user");
const {
  sendErrorResponse,
  sendConflictResponse,
  sendSuccessResponse,
} = require("../utils/responseHandler");
const {
  verifyTOTP,
  generateSecret,
  generateTOTP,
} = require("../utils/otpUtils");

// TODO: Implement endpoint to sign in

// Expect{ OTP , Email}
module.exports.sendOTP = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
      },
      attributes: ["email"],
    });
    if (user) {
      // Message : Conflict: User already exists
      return sendConflictResponse(res);
    } else {
      // generate secret
      const secret = generateSecret();
      console.log(secret)
      // generate HTOP
      const generatedOTP = generateTOTP(secret);
      // save email and secret in the database
      await createUserOTP(email, secret, transaction);
      
      await transaction.commit()
      // send email with OTP
      await sendOTPMail(email, generatedOTP);
      

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
exports.createUser = async (req, res) => {
  const transaction = await sequelize.transaction(); // Await the transaction creation

  try {
    const hashedPassword = await hashPassword(req.body.password);

    // Create user using createUser function from user model within the transaction
    await createUser(
      req.body.name,
      req.body.email,
      hashedPassword,
      req.body.mobile,
      transaction
    );

    transaction.commit();

    return sendSuccessResponse(res); // Message : Success
  } catch (error) {
    console.error("Error happened while creating a new user:", error);
    await transaction.rollback();
    return sendErrorResponse(res, 500); // Message : Server Error
  }
};
