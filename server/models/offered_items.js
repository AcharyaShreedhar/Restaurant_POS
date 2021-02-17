'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offered_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  offered_items.init({
    offer_id: DataTypes.INTEGER,
    item: DataTypes.VARCHAR(100)
  }, {
    sequelize,
    modelName: 'offered_items',
  });
  return offered_items;
};