'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  discount.init({
    disc_id: DataTypes.INTEGER,
    disc_amt: DataTypes.INTEGER,
    disc_type: DataTypes.VARCHAR(100)
  }, {
    sequelize,
    modelName: 'discount',
  });
  return discount;
};