import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../config/database';

class User extends Model {
  static associate(models: any) {
    User.hasMany(models.Order);
  }
}

User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export { User };
