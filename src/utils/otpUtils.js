const speakeasy = require("speakeasy");

const STEPS = 120; // Almost 60 seconds

// Function to generate a secret key for a user
const generateSecret = () => {
  return speakeasy.generateSecret({ length: 20 }).base32;
};

// Function to generate a TOTP code based on the secret
const generateTOTP = (secret) => {
  return speakeasy.totp({
    secret: secret,
    encoding: "base32",
    step: STEPS,
  });
};

// Function to verify a TOTP code entered by the user
const verifyTOTP = (secret, token) => {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: "base32",
    token: token,
    window: 0, // Tolerance window for checking codes, 0
    step: STEPS,
  });
};


module.exports = {
  verifyTOTP,
  generateTOTP,
  generateSecret,
};
