'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Brands', [{
        id:1,
        nombre: "el mercadillo",
        descripcion: "tienda especializada en abarrotes",
        imagen: "descargas/Brands/imagenes",
        estado: true,
        UserId: "3"
      },{
        id:2,
        nombre: "la miel de doña juana",
        descripcion: "tienda especializada en miel y apicultura",
        imagen: "descargas/Brands/imagenes",
        estado: true,
        UserId: "4"
      },{
        id:3,
        nombre: "donde don juaco",
        descripcion: "tienda especializada en  verdura y frutas",
        imagen: "descargas/Brands/imagenes",
        estado: true,
        UserId: "5"
      },
    {
        id:4,
        nombre: "los cultivos de don bernardo",
        descripcion: "tienda especializada en frutas y verduras",
        imagen: "descargas/Brands/imagenes",
        estado: true,
        UserId: "6"
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Brands', null, {});
     
  }
};
