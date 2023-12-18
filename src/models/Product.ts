import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../config/database';

class Product extends Model {
  static associate(models: any) {
    Product.belongsTo(models.Sucursal);
  }
}

Product.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
  },
  {
    sequelize,
    modelName: 'Product',
  }
);

export { Product };
