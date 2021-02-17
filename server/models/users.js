'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    user_name: DataTypes.VARCHAR(100),
    user_address: DataTypes.JSON,
    user_phone: DataTypes.ARRAY,
    user_email: DataTypes.VARCHAR(320),
    user_dob: DataTypes.DATE,
    user_pass: DataTypes.VARCHAR(255)
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};