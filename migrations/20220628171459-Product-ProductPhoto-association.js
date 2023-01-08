'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addConstraint('ProductPhotos',{
    fields:['ProductId'],
    type:'foreign key',
    name:'Products_ProductPhotos_association',
    references:{
      table: 'Products',
      field: 'id',
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
   })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('ProductPhotos','Products_ProductPhotos_association');
     
  }
};
