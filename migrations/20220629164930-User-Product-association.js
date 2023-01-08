'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('UserFavoritesProducts', 
    { 
      fields:['ProductId'],
      type:'foreign key',
      name:'Products_UserFavoritesProducts_association',
      references:{
       table: 'Products',
       field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });
     
    await queryInterface.addConstraint('UserFavoritesProducts', 
    { 
      fields:['UserId'],
      type:'foreign key',
      name:'User_UserFavoritesProducts_association',
      references:{
       table: 'Users',
       field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.removeConstraint('UserFavoritesProducts','Products_UserFavoritesProducts_association');
    await queryInterface.removeConstraint('UserFavoritesProducts','User_UserFavoritesProducts_association');
     
  }
};
