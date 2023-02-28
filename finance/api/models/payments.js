'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payments.init({
    status: DataTypes.STRING,
    cvv: DataTypes.INTEGER,
    expirationDate: DataTypes.DATEONLY,
    cardNumber: DataTypes.STRING,
    nameCard: DataTypes.STRING,
    monetaryValue: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};