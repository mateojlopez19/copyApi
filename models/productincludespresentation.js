'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductIncludesPresentation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product.belongsToMany(models.Presentation, {through : "ProductIncludesPresentation"}),
      models.Presentation.belongsToMany(models.Product, {through : "ProductIncludesPresentation"})
    }
  }
  ProductIncludesPresentation.init({
    ProductId: DataTypes.INTEGER.UNSIGNED,
    PresentationId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'ProductIncludesPresentation',
  });
  return ProductIncludesPresentation;
};