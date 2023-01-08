'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceRequestIncludesProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product.belongsToMany(models.InvoiceRequest, {through : "InvoiceRequestIncludesProduct"}),
      models.Product.belongsToMany(models.Presentation, {through : "InvoiceRequestIncludesProduct"}),
      models.InvoiceRequest.belongsToMany(models.Product, {through : "InvoiceRequestIncludesProduct"}),
      models.InvoiceRequest.belongsToMany(models.Presentation, {through : "InvoiceRequestIncludesProduct"}),
      models.Presentation.belongsToMany(models.InvoiceRequest, {through : "InvoiceRequestIncludesProduct"}),
      models.Presentation.belongsToMany(models.Product, {through : "InvoiceRequestIncludesProduct"})
    }
  }
  InvoiceRequestIncludesProduct.init({
    precio_venta: DataTypes.FLOAT.UNSIGNED,
    cantidad: DataTypes.INTEGER.UNSIGNED,
    InvoiceRequestId: DataTypes.INTEGER.UNSIGNED,
    PresentationId: DataTypes.INTEGER.UNSIGNED,
    ProductId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'InvoiceRequestIncludesProduct',
  });
  return InvoiceRequestIncludesProduct;
};