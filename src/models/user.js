const Sequelize = require("sequelize"); // Import Sequelize library
const { sequelize } = require("../database-config"); // Import the sequelize instance from the database configuration

// Define the 'User' model using Sequelize
// const User = sequelize.define(
//   "user",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     name: Sequelize.STRING,
//     password: Sequelize.STRING,
//     mobile: Sequelize.STRING,
//     email: Sequelize.STRING,
//   },
//   {
//     timestamps: false, // Disable automatic createdAt and updatedAt columns
//   }
// );

// Create a new user in the database
// const createUser = async (name, email, password, mobile, transaction) => {
//   try {

//     // Create a new user using the 'create()' method of the 'User' model
//     await User.create({
//       name: name,
//       email: email,
//       password: password,
//       mobile: mobile,
//     },{transaction:transaction});
//   } catch (error) {
//     // Handle any errors that occur during user creation
//     console.error("Error creating user:", error);
//   }
// };

class User extends Sequelize.Model {}

User.init(
  {
    // No need to define attributes here since they are defined in the migration file
  },
  {
    sequelize,
    modelName: "users",
    timestamps:false
  }
);

const createUser = async (name, email, password, mobile, transaction) => {
  try {
    await User.create(
      {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
      },
      { transaction: transaction }
    );
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
module.exports = {
  createUser,
  User,
};
