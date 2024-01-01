const Sequelize = require("sequelize"); // Import Sequelize library
const { sequelize } = require("../database"); // Import the sequelize instance from the database configuration

// Define the 'User' model using Sequelize
const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    mobile: Sequelize.STRING,
    email: Sequelize.STRING,
  },
  {
    timestamps: false, // Disable automatic createdAt and updatedAt columns
  }
);

// Create a new user in the database
module.exports.createUser = async (name, email, password, mobile) => {
  try {
    // Ensure the 'User' model is synchronized with the database (creates the table if it doesn't exist)
    await User.sync();

    // Create a new user using the 'create()' method of the 'User' model
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    });

    // Log the details of the newly created user
    console.log("New user created:", newUser.toJSON());
  } catch (error) {
    // Handle any errors that occur during user creation
    console.error("Error creating user:", error);
  }
};
