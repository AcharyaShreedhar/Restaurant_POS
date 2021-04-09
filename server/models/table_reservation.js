'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  table_reservation.init({
    reserve_id: DataTypes.INTEGER,
    table_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    cust_id: DataTypes.INTEGER,
    cust_count: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'table_reservation',
  });
  return table_reservation;
};