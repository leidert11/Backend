"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "id",
        as: "category",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      features: DataTypes.TEXT,
      img_url: DataTypes.TEXT,
      description: DataTypes.TEXT,
      stock: DataTypes.INTEGER,
      state: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
