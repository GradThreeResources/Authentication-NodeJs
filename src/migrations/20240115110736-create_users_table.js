"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      "users",
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
      }      
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
  },
};
