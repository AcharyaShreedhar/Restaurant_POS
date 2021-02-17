'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  item_category.init({
    cat_id: DataTypes.INTEGER,
    parent_cat_id: DataTypes.INTEGER,
    cat_name: DataTypes.VARCHAR(100),
  }, {
    sequelize,
    modelName: 'item_category',
  });
  return item_category;
};