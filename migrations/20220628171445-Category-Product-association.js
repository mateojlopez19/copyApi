'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Products',{
      fields:['CategoryId'],
      type:'foreign key',
      name:'Categories_Products_association',
      references:{
        table:'Categories',
        field:'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Products','Categories_Products_association');
  }
};
