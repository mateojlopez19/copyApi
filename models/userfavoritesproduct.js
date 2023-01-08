'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFavoritesProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsToMany(models.Product, {through : "UserFavoritesProduct"} ),
      models.Product.belongsToMany(models.User, {through : "UserFavoritesProduct"} )
    }
  }
  UserFavoritesProduct.init({
    UserId: DataTypes.INTEGER.UNSIGNED,
    ProductId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'UserFavoritesProduct',
  });
  return UserFavoritesProduct;
};