'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('ProductPhotos', [{
        id:1,
        ruta_foto: "descargas/Products/imagenes",
        ProductId: 1
      },{
        id:2,
        ruta_foto: "descargas/Products/imagenes",
        ProductId: 2
      },
      {
        id:3,
        ruta_foto: "descargas/Products/imagenes",
        ProductId: 3
      },
      {
        id:4,
        ruta_foto: "descargas/Products/imagenes",
        ProductId: 4
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('ProductPhotos', null, {});
     
  }
};
