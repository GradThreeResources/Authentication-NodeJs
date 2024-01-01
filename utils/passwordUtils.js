// Import the bcrypt library
const bcrypt = require("bcrypt");

// Define the number of salt rounds for hashing
const saltRounds = 10; // Salt rounds for hashing (you can adjust this value)

// Function to hash a password
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
const compare = (entered, userPassword, callback) =>
  bcrypt.compare(entered, userPassword, (err, result) => {
    if (err) {
      // If an error occurs during comparison, log the error
      console.error("Error while comparing passwords:", err);
      return;
    }
    // Pass the comparison result to the provided callback function
    callback(result);
  });


  
// Export the functions for external use
module.exports = {
  hashPassword, // Expose the hashPassword function
  compare, // Expose the compare function
};
