// domiciliarioRoutes.ts
import express, { Router } from 'express';
import DomiciliarioController from '../controllers/DomiciliarioController';
import authMiddleware from '../middlewares/authMiddleware';

const router: Router = express.Router();

// Rutas protegidas (requieren autenticación)
router.use(authMiddleware); // Middleware de autenticación para rutas siguientes

// Rutas protegidas para domiciliarios
router.post('/create', DomiciliarioController.createDomiciliario);
router.get('/list', DomiciliarioController.listDomiciliarios);

export default router;
