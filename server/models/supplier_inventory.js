'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class supplier_inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  supplier_inventory.init({
    sup_invent_id: DataTypes.INTEGER,
    invent_cat_id: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'supplier_inventory',
  });
  return supplier_inventory;
};