'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addConstraint('InvoiceRequests',{
    fields: ['UserId'],
    type:'foreign key',
    name: 'Users_InvoiceRequests_association',
    references:{
      table:'Users',
      field: 'id',
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('InvoiceRequests','Users_InvoiceRequests_association')
  }
};
