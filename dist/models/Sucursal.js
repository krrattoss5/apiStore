"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Sucursal extends sequelize_1.Model {
    static associate(models) {
        Sucursal.hasMany(models.Product);
    }
}
exports.Sucursal = Sucursal;
Sucursal.init({
    name: sequelize_1.DataTypes.STRING,
    location: sequelize_1.DataTypes.STRING,
    contactInfo: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.sequelize,
    modelName: 'Sucursal',
});
