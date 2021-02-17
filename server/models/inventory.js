'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  inventory.init({
    invent_id: DataTypes.INTEGER,
    invent_name:DataTypes.VARCHAR(100),
    invent_desc:DataTypes.VARCHAR(200),
    invent_unit:DataTypes.INTEGER,
    invent_status:DataTypes.BOOLEAN,
    invent_stock:DataTypes.INTEGER,
    invent_mfd:DataTypes.DATE,
    invent_exp:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'inventory',
  });
  return inventory;
};