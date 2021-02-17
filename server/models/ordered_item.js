'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordered_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ordered_item.init({
    ordered_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    ordered_qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ordered_item',
  });
  return ordered_item;
};