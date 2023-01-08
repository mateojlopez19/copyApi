'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      cedula: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      telefono: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      correo_electronico: {
        type: Sequelize.STRING
      },
      nombre_apellido: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      },
      puntos_canje: {
        type: Sequelize.INTEGER
      },
      TypeUserId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      MunicipalityId: {
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
    await queryInterface.dropTable('Users');
  }
};