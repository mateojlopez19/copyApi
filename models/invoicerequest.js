'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InvoiceRequest.belongsTo(models.User);
      models.User.hasMany(InvoiceRequest);
      InvoiceRequest.belongsTo(models.Sector);
      models.Sector.hasMany(InvoiceRequest);
    }
  }
  InvoiceRequest.init({
    descuento: DataTypes.FLOAT,
    fecha_facturacion: DataTypes.DATE,
    fecha_envio: DataTypes.DATE,
    direccion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER,
    SectorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InvoiceRequest',
  });
  return InvoiceRequest;
};