'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InvoiceRequestIncludesProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      precio_venta: {
        type: Sequelize.FLOAT.UNSIGNED
      },
      cantidad: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      InvoiceRequestId: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      PresentationId: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      ProductId: {
        type: Sequelize.INTEGER.UNSIGNED
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InvoiceRequestIncludesProducts');
  }
};