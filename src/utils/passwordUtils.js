// Import the bcrypt library for password hashing
const bcrypt = require("bcrypt");

// Define the number of salt rounds for hashing
const saltRounds = 10; // Salt rounds for hashing (you can adjust this value)

// Function to hash a password
// Returns a promise that resolves with the hashed password
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    // Hash the password using bcrypt with the specified salt rounds
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        // If an error occurs during hashing, reject the promise with the error
        reject(err);
      } else {
        // If hashing is successful, resolve the promise with the hashed password
        resolve(hashedPassword);
      }
    });
  });
};

// Function to compare entered password with stored hashed password
// Returns a boolean indicating if the passwords match
const isValidPassword = async (entered, userPassword) => {
  // Compare the entered password with the stored hashed password using bcrypt
  const result = await bcrypt.compare(entered, userPassword);
  return result; // Returns a boolean indicating if the passwords match
};

// Export the functions for external use
module.exports = {
  hashPassword, 
  isValidPassword, 
};
