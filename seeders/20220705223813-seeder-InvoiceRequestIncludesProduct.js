'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('InvoiceRequestIncludesProducts', [{
        id:1,
        precio_venta: 15000,
       cantidad: 3,
       InvoiceRequestId: 1,
       PresentationId: 1,
       ProductId: 1
      },{
        id:2,
        precio_venta: 15000,
        cantidad: 1,
        InvoiceRequestId: 2,
        PresentationId: 3,
        ProductId: 2
      },{
        id:3,
        precio_venta: 6000,
        cantidad: 2,
        InvoiceRequestId: 1,
        PresentationId: 2,
        ProductId: 3
      },{
        id:4,
        precio_venta: 50000,
        cantidad: 5,
        InvoiceRequestId: 3,
        PresentationId: 4,
        ProductId: 4
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkDelete('InvoiceRequestIncludesProducts', null, {});
     
  }
};
