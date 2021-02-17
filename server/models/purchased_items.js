'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchased_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  purchased_items.init({
    purchase_id: DataTypes.INTEGER,
    invent_id:DataTypes.INTEGER,
    qty:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'purchased_items',
  });
  return purchased_items;
};