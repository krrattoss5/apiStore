// sucursalRoutes.ts
import express, { Router } from 'express';
import SucursalController from '../controllers/SucursalController';
import authMiddleware from '../middlewares/authMiddleware';

const router: Router = express.Router();

// Rutas protegidas (requieren autenticación)
router.use(authMiddleware); // Middleware de autenticación para rutas siguientes

// Rutas protegidas para sucursales
router.post('/create', SucursalController.createSucursal);
router.get('/list', SucursalController.listSucursales);

export default router;
