'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('InvoiceRequests', [{
        id:1,
        descuento: 0,
        fecha_facturacion: new Date(),
        fecha_envio: new Date(),
        direccion: "calle 31 a",
        estado: true,
        UserId: 1,
        SectorId: 1
      },{
        id:2,
        descuento: 1000,
        fecha_facturacion: new Date(),
        fecha_envio: new Date(),
        direccion: "calle 45 b",
        estado: true,
        UserId: 2,
        SectorId: 2
      },{
        id:3,
        descuento: 500,
        fecha_facturacion: new Date(),
        fecha_envio: new Date(),
        direccion: "calle 45 b",
        estado: true,
        UserId: 2,
        SectorId: 3
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('InvoiceRequests', null, {});
     
  }
};
