'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.TypeUser);
      models.TypeUser.hasMany(User);
      User.belongsTo(models.Municipality);
      models.Municipality.hasMany(User);
    }
  }
  User.init({
    cedula: DataTypes.INTEGER,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    nombre_apellido: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    puntos_canje: DataTypes.INTEGER,
    TypeUserId: DataTypes.INTEGER,
    MunicipalityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};