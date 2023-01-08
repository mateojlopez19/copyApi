'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Users',{
      fields: ['MunicipalityId'],
      type:   'foreign key',
      name:   'Municipalities_Users_association',
      references:{
        table:  'Municipalities',
        field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Users', 'Municipalities_Users_association')
  }
};
