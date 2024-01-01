const express = require('express'); // Import the Express framework
const router = express.Router(); // Create an instance of Express Router
const userAuth = require('../services/authService'); // Import userAuth from authService
const { validateUserData } = require('../middleware/userMiddleware'); // Import validateUserData middleware from userMiddleware


// Define a POST route '/create' - The route is responsible for creating a user
// It utilizes validateUserData middleware and userAuth.createUser function
router.post('/create', validateUserData, userAuth.createUser);

// Export the router instance to be used in other files
module.exports.userRouter = router;
