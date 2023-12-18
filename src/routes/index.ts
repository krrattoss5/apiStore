// src/routes/index.ts
import express, { Router } from 'express';
import userRoutes from './userRoutes';
import orderRoutes from './orderRoutes';
import productRoutes from './productRoutes';
import sucursalRoutes from './sucursalRoutes';
import domiciliarioRoutes from './domiciliarioRoutes';

const router: Router = express.Router();

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/products', productRoutes);
router.use('/sucursales', sucursalRoutes);
router.use('/domiciliarios', domiciliarioRoutes);

export default router;
