import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../config/database';

class Order extends Model {
  static associate(models: any) {
    Order.belongsTo(models.User);
    Order.belongsTo(models.Domiciliario);
  }
}

Order.init(
  {
    status: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Order',
  }
);

export { Order };
