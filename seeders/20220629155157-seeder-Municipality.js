'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Municipalities', [{
        id:1,
       nombre: 'Manizales',
      },
      {
        id:2,
       nombre: 'Villamaria', 
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('Municipalities', null, {});
    
  }
};
