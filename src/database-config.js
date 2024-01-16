const { Sequelize } = require("sequelize");
require("dotenv").config();



const databaseUrl = process.env.NODE_ENV == 'development' ? process.env.DATABASE_LOCAL_URL  : process.env.DATABASE_URL;

// Initialize Sequelize with the database URL
const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres", // Specify the dialect (postgres in this case)    
  logging:false
});


module.exports.sequelize = sequelize;
