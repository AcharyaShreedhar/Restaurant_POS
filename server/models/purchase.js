'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  purchase.init({
    purchase_id: DataTypes.INTEGER,
    invoice_no: DataTypes.INTEGER,
    supplier_id: DataTypes.VARCHAR(100),
    purchase_date: DataTypes.DATE

  }, {
    sequelize,
    modelName: 'purchase',
  });
  return purchase;
};