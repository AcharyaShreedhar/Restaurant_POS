'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class unit_price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  unit_price.init({
    item_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    unit: DataTypes.VARCHAR(100)
  }, {
    sequelize,
    modelName: 'unit_price',
  });
  return unit_price;
};