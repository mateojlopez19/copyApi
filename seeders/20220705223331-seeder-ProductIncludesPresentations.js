'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('ProductIncludesPresentations', [{
        id:1,
        ProductId:1,
        PresentationId:1 
      },{
        id:2,
        ProductId:2,
        PresentationId:3
      },{
        id:3,
        ProductId:3,
        PresentationId:2
      },{
        id:4,
        ProductId:4,
        PresentationId:4
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('ProductIncludesPresentations', null, {});
     
  }
};
