const Sequelize = require("sequelize"); // Import Sequelize library
const { sequelize } = require("../database-config"); // Import the sequelize instance from the database configuration

// Define the 'User' model using Sequelize
const UserOTP = sequelize.define(
  "user_secret",
  {   
    email: {type:Sequelize.STRING, primaryKey:true},
    OtpSecret: {type: Sequelize.STRING, defaultValue:'NONE'},
  },
  {
    timestamps: false, // Disable automatic createdAt and updatedAt columns
  }
);

// Create a new user in the database
const createUserOTP = async (email, OtpSecret, transaction) => {

  try {
    // Create or Replace a new userOTP using the 'upset()' method of the 'user_secret' model
    await UserOTP.upsert({
      email:email, 
      OtpSecret:OtpSecret
    },{transaction:transaction}) ;

  } catch (error) {
    // Handle any errors that occur during user creation
    console.error("Error creating user:", error);
  }
};





module.exports ={
  UserOTP, 
  createUserOTP
}