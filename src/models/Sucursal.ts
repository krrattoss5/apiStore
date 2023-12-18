import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../config/database';

class Sucursal extends Model {
  static associate(models: any) {
    Sucursal.hasMany(models.Product);
  }
}

Sucursal.init(
  {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    contactInfo: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Sucursal',
  }
);

export { Sucursal };
