import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../config/database';

class Domiciliario extends Model {
  static associate(models: any) {
    Domiciliario.hasMany(models.Order);
  }
}

Domiciliario.init(
  {
    name: DataTypes.STRING,
    contactInfo: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Domiciliario',
  }
);

export { Domiciliario };
