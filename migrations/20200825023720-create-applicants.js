'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('applicants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      applicant_type: {
        type: Sequelize.STRING
      },
      applicant_name: {
        type: Sequelize.STRING
      },
      relationship_type: {
        type: Sequelize.STRING
      },
      relationship_name: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.STRING
      },
      pin: {
        type: Sequelize.INTEGER
      },
      mobile: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('applicants');
  }
};