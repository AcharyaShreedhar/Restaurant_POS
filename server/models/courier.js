'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  courier.init({
    courier_id: DataTypes.INTEGER,
    courier_name: DataTypes.VARCHAR(100),
    courier_comp: DataTypes.VARCHAR(100),
    courier_phone: DataTypes.ARRAY,
    courier_address: DataTypes.JSON,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'courier',
  });
  return courier;
};