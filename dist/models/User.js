"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class User extends sequelize_1.Model {
    static associate(models) {
        User.hasMany(models.Order);
    }
}
exports.User = User;
User.init({
    username: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    phoneNumber: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.sequelize,
    modelName: 'User',
});
