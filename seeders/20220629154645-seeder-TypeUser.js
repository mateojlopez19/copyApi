'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
 
      await queryInterface.bulkInsert('TypeUsers', [{
        id : 1,
        nombre_usuario: 'Admin',
      },
      {
        id : 2,
        nombre_usuario: 'Register',
      },
      {
        id : 3,
        nombre_usuario: 'Productor',
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('TypeUsers', null, {});
     
  }
};
