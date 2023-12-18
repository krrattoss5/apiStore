"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Order extends sequelize_1.Model {
    static associate(models) {
        Order.belongsTo(models.User);
        Order.belongsTo(models.Domiciliario);
    }
}
exports.Order = Order;
Order.init({
    status: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.sequelize,
    modelName: 'Order',
});
