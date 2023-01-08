'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Categories', [{
        id:1,
        nombre: "frutas"
      },{
        id:2,
        nombre: "verduras"
      },{
        id:3,
        nombre: "lacteos"
      },
      {
        id:4,
        nombre: "alimentos procesados"
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
