'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Sectors', [{
        id:1,
        nombre_sector: "la sultana",
        valor_domicilio: 5000
      },
      {
        id:2,
        nombre_sector: "centro",
        valor_domicilio: 2000
      },{
        id:3,
        nombre_sector: "norte",
        valor_domicilio: 7000
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Sectors', null, {});
     
  }
};
