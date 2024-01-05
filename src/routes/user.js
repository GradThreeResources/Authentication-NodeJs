const express = require('express'); // Import the Express framework
const router = express.Router(); // Create an instance of Express Router
const {createUser, sendOTP} = require('../services/authService'); // Import userAuth from authService
const { validateUserData , validateOTPRequest} = require('../middleware/userAuthenticationMiddleware'); // Import validateUserData middleware from userMiddleware


// Define a POST route '/create' - The route is responsible for creating a user
// It utilizes validateUserData middleware and userAuth.createUser controller
router.post('/create', validateUserData, createUser);


// Define a POST route '/send_otp' - The route is responsible sending OTP throw email
// It utilizes validateOTPRequest middleware and sendOTP controller
router.post('/send_otp', validateOTPRequest, sendOTP);

// Export the router instance to be used in other files
module.exports.userRouter = router;
