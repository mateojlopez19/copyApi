'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Presentations', [{
        id:1,
        nombre: "3 kilogramos"
      },{
        id:2,
        nombre: "1 Litros"
      },
      {
        id:3,
        nombre: "400 miliLitros"
      },
      {
        id:4,
        nombre: "1 kilo"
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Presentations', null, {});
     
  }
};
