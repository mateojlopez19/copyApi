'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedagogicalContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PedagogicalContent.belongsTo(models.CategoryContentEdu);
      models.CategoryContentEdu.hasMany(PedagogicalContent);
    }
  }
  PedagogicalContent.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    material_audiovisual: DataTypes.STRING,
    enlace_informativo: DataTypes.STRING,
    CategoryContentEduId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PedagogicalContent',
  });
  return PedagogicalContent;
};