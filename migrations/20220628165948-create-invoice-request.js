'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InvoiceRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      descuento: {
        type: Sequelize.FLOAT
      },
      fecha_facturacion: {
        type: Sequelize.DATE
      },
      fecha_envio: {
        type: Sequelize.DATE
      },
      direccion: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      SectorId: {
        allowNull: false,
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
    await queryInterface.dropTable('InvoiceRequests');
  }
};