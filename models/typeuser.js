'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeUser.init({
    nombre_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeUser',
  });
  return TypeUser;
};