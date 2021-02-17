'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('couriers', {
      courier_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courier_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      courier_comp: {
        allowNull: false,
        type: Sequelize.STRING
      },
      courier_phone: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      courier_address: {
        allowNull: false,
        type: Sequelize.JSON(Sequelize.STRING)
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
    await queryInterface.dropTable('couriers');
  }
};