'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      cust_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cust_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cust_phone: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      cust_address: {
        allowNull: false,
        type: Sequelize.JSON
      },
      cust_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cust_company: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cust_dob: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cust_pass: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
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
    await queryInterface.dropTable('customers');
  }
};