'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  feedback.init({
    feedback_id: DataTypes.INTEGER,
    cust_id: DataTypes.INTEGER,
    feedback_msg: DataTypes.VARCHAR(300),
    feedback_sub: DataTypes.VARCHAR(100),
    feedback_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'feedback',
  });
  return feedback;
};