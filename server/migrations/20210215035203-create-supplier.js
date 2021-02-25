"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("suppliers", {
      supplier_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      supplier_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      supplier_address: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      supplier_phone: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      supplier_email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      supplier_comp: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      supplier_type: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("suppliers");
  },
};
