'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('InvoiceRequestIncludesProducts', 
    { 
      fields:['ProductId'],
      type:'foreign key',
      name:'InvoiceRequestIncludesProducts_Product',
      references:{
       table: 'Products',
       field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });
     
    await queryInterface.addConstraint('InvoiceRequestIncludesProducts', 
    { 
      fields:['PresentationId'],
      type:'foreign key',
      name:'InvoiceRequestIncludesProducts_Presentation',
      references:{
       table: 'Presentations',
       field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('InvoiceRequestIncludesProducts', 
    { 
      fields:['InvoiceRequestId'],
      type:'foreign key',
      name:'InvoiceRequestIncludesProducts_InvoiceRequest',
      references:{
       table: 'InvoiceRequests',
       field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.removeConstraint('InvoiceRequestIncludesProducts','InvoiceRequestIncludesProducts_Product');
    await queryInterface.removeConstraint('InvoiceRequestIncludesProducts','InvoiceRequestIncludesProducts_Presentation');
    await queryInterface.removeConstraint('InvoiceRequestIncludesProducts','InvoiceRequestIncludesProducts_InvoiceRequest');
     
  }
};