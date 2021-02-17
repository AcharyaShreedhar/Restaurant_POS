'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventory_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  inventory_category.init({
    invent_cat_id: DataTypes.INTEGER,
    invent_cat_name: DataTypes.VARCHAR(100),
    purchase_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'inventory_category',
  });
  return inventory_category;
};