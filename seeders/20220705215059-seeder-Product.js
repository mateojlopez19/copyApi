'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Products', [{
        id:1,
        nombre:"papa",
        estado: true,
        descripcion: "papa parda",
        cantidad_disponible: "100 paquetes",
        precio_unitario: 5000,
        BrandId: 3,
        CategoryId: 2
      },{
        id:2,
        nombre:"miel",
        estado: true,
        descripcion: "miel de maple",
        cantidad_disponible: "350 frascos",
        precio_unitario: 15000,
        BrandId: 2,
        CategoryId: 4
      },{
        id:3,
        nombre:"leche",
        estado: true,
        descripcion: "leche de vaca",
        cantidad_disponible: "50 botellas",
        precio_unitario: 3000,
        BrandId: 1,
        CategoryId: 3
      },
      {
        id:4,
        nombre:"manzana",
        estado: true,
        descripcion: "Manzana Verde",
        cantidad_disponible: "500 paquetes",
        precio_unitario: 10000,
        BrandId: 4,
        CategoryId: 1
      }], {});
      
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
