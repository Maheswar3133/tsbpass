'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applicants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  applicants.init({
    applicant_type: DataTypes.STRING,
    applicant_name: DataTypes.STRING,
    relationship_type: DataTypes.STRING,
    relationship_name: DataTypes.STRING,
    industry: DataTypes.STRING,
    address: DataTypes.TEXT,
    state: DataTypes.STRING,
    pin: DataTypes.INTEGER,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'applicants',
  });
  return applicants;
};