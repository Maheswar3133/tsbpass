'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class land_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  land_details.init({
    applicant_id: DataTypes.INTEGER,
    district: DataTypes.STRING,
    muncipality: DataTypes.STRING,
    mandal: DataTypes.STRING,
    village: DataTypes.STRING,
    location_type: DataTypes.STRING,
    building_number: DataTypes.STRING,
    plot_area: DataTypes.STRING,
    survey_number: DataTypes.STRING,
    location_of: DataTypes.STRING,
    sale_deed: DataTypes.TEXT,
    property_tax: DataTypes.TEXT,
    order_copy: DataTypes.TEXT,
    geo_coordinates: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'land_details',
  });
  return land_details;
};