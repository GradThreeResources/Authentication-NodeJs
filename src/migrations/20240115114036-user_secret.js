"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      "user_secrets",
      {
        email: { type: Sequelize.STRING, primaryKey: true },
        OtpSecret: { type: Sequelize.STRING, defaultValue: "NONE" },
      },
      {
        timestamps: false, // Disable automatic createdAt and updatedAt columns
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_secrets");
  },
};
