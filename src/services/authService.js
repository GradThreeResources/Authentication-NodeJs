// Import necessary modules
const { createUser } = require("../models/user"); // Import createUser function from user model
const { hashPassword } = require("../utils/passwordUtils"); // Import hashPassword function from passwordUtils

// TODO: Implement endpoint to validate email or phone
// TODO: Implement endpoint to sign in

// Endpoint for user registration (sign-up)
exports.createUser = (req, res) => {
  // Hash the provided password using hashPassword function 
  hashPassword(req.body.password).then((hashedPassword) => {
    // Create user using createUser function from user model
    createUser(req.body.name, req.body.email, hashedPassword, req.body.mobile);
    // Send success response after creating the user
    res.send("user created");
  });
};
