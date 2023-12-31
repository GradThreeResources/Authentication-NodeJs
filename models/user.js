const Sequelize = require("sequelize");
const { sequelize } = require("../database");

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
    email: Sequelize.STRING 
  },
  {
    timestamps: false, // Disable automatic createdAt and updatedAt columns
  }
);

// Create a new user
module.exports.createUser = async (name, email, password, mobile) => {
  try {
    // Sync the model with the database (creates the table if it doesn't exist)
    await User.sync();

    // Create a new user using the create() method
    const newUser = await User.create({
      name: name,
      email:email,
      password:password,
      mobile:mobile
    });

    
    console.log("New user created:", newUser.toJSON());
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
