const Sequelize = require("sequelize"); // Import Sequelize library
const { sequelize } = require("../database-config"); // Import the sequelize instance from the database configuration


class User extends Sequelize.Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    mobile: Sequelize.STRING,
    email: { type: Sequelize.STRING, allowNull: false },
    
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
