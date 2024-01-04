const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, 'postgres', {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});


module.exports.syncModels = async ()=> {
    try {
      // Sync all defined models with the database
      await sequelize.sync({force:false});
      // { force: true } will drop existing tables and recreate them; use with caution in production
  
      console.log('All models were synchronized successfully.');
    } catch (error) {
      console.error('Error synchronizing models:', error);
    }
  }
module.exports.sequelize = sequelize