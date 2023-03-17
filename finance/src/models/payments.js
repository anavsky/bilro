const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Payments.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameCard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monetaryValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};
