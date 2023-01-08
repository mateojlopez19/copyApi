'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Products',{
      fields:['BrandId'],
      type:'foreign key',
      name:'Brands_Products_association',
      references:{
        table:'Brands',
        field:'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('Products','Brands_Products_association');
  }
};
