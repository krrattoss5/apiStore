// src/routes/orderRoutes.ts
import express, { Router } from 'express';
import OrderController from '../controllers/OrderController';
import authMiddleware from '../middlewares/authMiddleware';

const router: Router = express.Router();

router.post('/create', authMiddleware, OrderController.createOrder);
router.get('/list', authMiddleware, OrderController.listOrders);
router.get('/details/:orderId', authMiddleware, OrderController.getOrderDetails);
router.put('/update/:orderId', authMiddleware, OrderController.updateOrder);
router.delete('/delete/:orderId', authMiddleware, OrderController.deleteOrder);

export default router;
