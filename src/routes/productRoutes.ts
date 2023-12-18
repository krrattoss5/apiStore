// productRoutes.ts
import express, { Router } from 'express';
import ProductController from '../controllers/ProductController';
import authMiddleware from '../middlewares/authMiddleware';

const router: Router = express.Router();

// Rutas protegidas (requieren autenticación)
router.use(authMiddleware); // Middleware de autenticación para rutas siguientes

// Rutas protegidas para productos
router.post('/create', ProductController.createProduct);
router.get('/list', ProductController.listProducts);

export default router;
