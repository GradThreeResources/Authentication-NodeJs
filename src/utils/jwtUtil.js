const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

const secretKey = process.env.JWT_SECRET; // Retrieve JWT secret key from environment variables
const algorithms = 'HS256'; // Algorithm used for JWT
const expiresIn = '30w'; // Token expiration time (e.g., 30 weeks)

// Function to verify the validity of a received JWT token
const isValidToken = (receivedToken) => {
    try {
        jwt.verify(receivedToken, secretKey, { algorithms: algorithms });
        return true; // Token is valid
    } catch (error) {
        return false; // Token is invalid
    }
};

// Function to sign a JWT token with provided payload
const sign = (payload) => {
    return jwt.sign(payload, secretKey, { algorithm: algorithms, expiresIn: expiresIn });
};

// Export the sign and isValidToken functions for use in other files
module.exports = {
    sign,
    isValidToken
};
