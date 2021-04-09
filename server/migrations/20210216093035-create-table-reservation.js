'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('table_reservations', {
      reserve_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      table_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cust_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cust_count: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
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
    await queryInterface.dropTable('table_reservations');
  }
};