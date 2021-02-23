"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("customers", {
      cust_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cust_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cust_address: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      cust_phone: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      cust_email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cust_pass: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cust_dob: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cust_company: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // user_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },

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
    await queryInterface.dropTable("customers");
  },
};
