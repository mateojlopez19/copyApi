'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductPhoto.belongsTo(models.Product);
      models.Product.hasMany(ProductPhoto);
    }
  }
  ProductPhoto.init({
    ruta_foto: DataTypes.STRING,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductPhoto',
  });
  return ProductPhoto;
};