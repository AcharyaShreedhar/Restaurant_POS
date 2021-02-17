'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  item.init({
    item_id: DataTypes.INTEGER,
    item_name:DataTypes.VARCHAR(100),
    item_desc:DataTypes.VARCHAR(200),
    item_unit:DataTypes.INTEGER,
    item_stock:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};