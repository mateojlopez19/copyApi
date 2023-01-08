'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Users',{
      fields:['TypeUserId'],
      type: 'foreign key',
      name:'TypeUsers_Users_association',
      references:{
        table:'TypeUsers',
        field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
     })
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Users','TypeUsers_Users_association');
  }
};
