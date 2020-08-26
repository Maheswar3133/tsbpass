'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('land_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      applicant_id: {
        type: Sequelize.INTEGER
      },
      district: {
        type: Sequelize.STRING
      },
      muncipality: {
        type: Sequelize.STRING
      },
      mandal: {
        type: Sequelize.STRING
      },
      village: {
        type: Sequelize.STRING
      },
      location_type: {
        type: Sequelize.STRING
      },
      building_number: {
        type: Sequelize.STRING
      },
      plot_area: {
        type: Sequelize.STRING
      },
      survey_number: {
        type: Sequelize.STRING
      },
      location_of: {
        type: Sequelize.STRING
      },
      sale_deed: {
        type: Sequelize.TEXT
      },
      property_tax: {
        type: Sequelize.TEXT
      },
      order_copy: {
        type: Sequelize.TEXT
      },
      geo_coordinates: {
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
    await queryInterface.dropTable('land_details');
  }
};