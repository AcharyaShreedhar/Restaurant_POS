'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customers.init({
    cust_name: DataTypes.VARCHAR(100),
    cust_address:DataTypes.JSON,
    cust_phone:DataTypes.ARRAY,
    cust_email:DataTypes.VARCHAR(320),
    cust_dob:DataTypes.DATE,
    cust_pass:DataTypes.VARCHAR(255),
    cust_company:DataTypes.VARCHAR(100),
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
    // user_id:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'customers',
  });
  return customers;
};