'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class architect_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  architect_details.init({
    applicant_id: DataTypes.INTEGER,
    consultant_type: DataTypes.STRING,
    license_number: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'architect_details',
  });
  return architect_details;
};