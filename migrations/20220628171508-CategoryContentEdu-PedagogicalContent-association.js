'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('PedagogicalContents',{
      fields: ['CategoryContentEduId'],
      type: 'foreign key',
      name: 'CategoryContentEdu_PedagogicalContent_association',
      references:{
        table: 'CategoryContentEdus',
        field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('PedagogicalContents','CategoryContentEdu_PedagogicalContent_association');
  }
};


