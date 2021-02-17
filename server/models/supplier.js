'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  supplier.init({
    supplier_id: DataTypes.INTEGER,
    supplier_name: DataTypes.VARCHAR(100),
    supplier_address: DataTypes.JSON,
    supplier_phone:DataTypes.VARCHAR(100),
    supplier_email: DataTypes.VARCHAR(320),
    supplier_comp:DataTypes.VARCHAR(255),
    supplier_type:DataTypes.VARCHAR(100)
  }, {
    sequelize,
    modelName: 'supplier',
    
  });
  return supplier;
};