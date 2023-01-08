'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addConstraint('Brands',{
    fields:['UserId'],
    type: 'foreign key',
    name: 'Usuarios_Brands_association',
    references:{
      table: 'Users',
      field: 'id',
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('Brands','Usuarios_Brands_association')
  }
};
