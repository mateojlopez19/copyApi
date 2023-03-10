'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand);
      models.Brand.hasMany(Product);
      Product.belongsTo(models.Category);
      models.Category.hasMany(Product);
    }
  }
  Product.init({
    nombre: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    descripcion: DataTypes.STRING,
    cantidad_disponible: DataTypes.STRING,
    precio_unitario: DataTypes.INTEGER,
    BrandId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};