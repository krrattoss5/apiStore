"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Product extends sequelize_1.Model {
    static associate(models) {
        Product.belongsTo(models.Sucursal);
    }
}
exports.Product = Product;
Product.init({
    name: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.TEXT,
    price: sequelize_1.DataTypes.FLOAT,
}, {
    sequelize: database_1.sequelize,
    modelName: 'Product',
});
