'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_address: {
        allowNull: false,
        type: Sequelize.JSON
      },
      user_phone: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_pass: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_dob: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};