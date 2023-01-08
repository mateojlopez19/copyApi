'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addConstraint('InvoiceRequests',{
    fields:['SectorId'],
    type: 'foreign key',
    name:'Sectors_InvoiceRequests_association',
    references:{
      table:'Sectors',
      field: 'id',
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('InvoiceRequests','Sectors_InvoiceRequests_association')
  }
};