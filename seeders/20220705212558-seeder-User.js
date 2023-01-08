'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Users', [{
        id:1,
        cedula: 1053,
        telefono:  310788,
        direccion: "calle 31 a",
        correo_electronico: "andres@gmail.com",
        nombre_apellido: "andres valencia",
        contrasena: "123465",
        puntos_canje: "",
        TypeUserId: 1,
        MunicipalityId: 1,
      },
      {
        id:2,
        cedula: 10002,
          telefono:  310796,
          direccion: "calle 45 b",
          correo_electronico: "juanito@gmail.com",
          nombre_apellido: "Juan manuel",
          contrasena: "12346578910",
          puntos_canje: "",
          TypeUserId: 2,
          MunicipalityId: 2,
      },
      {
        id:3,
        cedula: 10320056,
        telefono:  31089412,
        direccion: "carrera 25 b",
        correo_electronico: "@gmail.com",
        nombre_apellido: "Juan manuel",
        contrasena: "12346578910",
        puntos_canje: "",
        TypeUserId: 3,
        MunicipalityId: 1,
      },
      {
        id:4,
        cedula: 10356,
        telefono:  310812,
        direccion: "carrera 25 con calle 45 b",
        correo_electronico: "@gmail.com",
        nombre_apellido: "Migel tadeo",
        contrasena: "12346578910",
        puntos_canje: "",
        TypeUserId: 3,
        MunicipalityId: 2,
      },{
        id:5,
        cedula: 1035322156,
        telefono:  31081112,
        direccion: "carrera 85 # 65 38",
        correo_electronico: "@gmail.com",
        nombre_apellido: "luciano",
        contrasena: "12346578910",
        puntos_canje: "",
        TypeUserId: 3,
        MunicipalityId: 1,
      },{
        id:6,
        cedula: 106,
        telefono:  23569875,
        direccion: "cra 54 bis 67 con calle 45 b",
        correo_electronico: "@gmail.com",
        nombre_apellido: "bernardo",
        contrasena: "12346578910",
        puntos_canje: "",
        TypeUserId: 3,
        MunicipalityId: 2,
      }], {});
        
      },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
