'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class res_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  res_table.init({
    table_id: DataTypes.INTEGER,
    table_cap: DataTypes.INTEGER,
    table_shape: DataTypes.VARCHAR(100),
    table_type: DataTypes.VARCHAR(100),
    table_rate: DataTypes.INTEGER


  }, {
    sequelize,
    modelName: 'res_table',
  });
  return res_table;
};