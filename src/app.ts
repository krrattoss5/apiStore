import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import { sequelize } from './config/database';

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);
app.use(errorHandler);

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
