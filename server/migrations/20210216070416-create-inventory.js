"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("inventories", {
      invent_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      invent_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      invent_desc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      invent_unit: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      invent_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      invent_stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      invent_mfd: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      invent_exp: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("inventories");
  },
};
