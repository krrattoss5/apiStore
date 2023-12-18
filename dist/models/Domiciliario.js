"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domiciliario = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Domiciliario extends sequelize_1.Model {
    static associate(models) {
        Domiciliario.hasMany(models.Order);
    }
}
exports.Domiciliario = Domiciliario;
Domiciliario.init({
    name: sequelize_1.DataTypes.STRING,
    contactInfo: sequelize_1.DataTypes.STRING,
    status: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.sequelize,
    modelName: 'Domiciliario',
});
