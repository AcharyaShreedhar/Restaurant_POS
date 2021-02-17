'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('res_tables', {
      table_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      table_cap: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      table_shape: {
        allowNull: false,
        type: Sequelize.STRING
      },
      table_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      table_rate: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('res_tables');
  }
};