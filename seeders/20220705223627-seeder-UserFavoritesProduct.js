'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('UserFavoritesProducts', [{
        id:1,
        UserId:1,
        ProductId: 2
      },{
        id:2,
        UserId:2,
        ProductId: 3
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('UserFavoritesProducts', null, {});
     
  }
};
