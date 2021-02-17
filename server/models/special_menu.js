'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class special_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  special_menu.init({
    item_id: DataTypes.INTEGER,
    offer_id: DataTypes.INTEGER,
    offer_item: DataTypes.VARCHAR(100),
    smenu_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'special_menu',
  });
  return special_menu;
};