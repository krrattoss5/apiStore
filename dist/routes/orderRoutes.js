"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/orderRoutes.ts
const express_1 = __importDefault(require("express"));
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
router.post('/create', authMiddleware_1.default, OrderController_1.default.createOrder);
router.get('/list', authMiddleware_1.default, OrderController_1.default.listOrders);
router.get('/details/:orderId', authMiddleware_1.default, OrderController_1.default.getOrderDetails);
router.put('/update/:orderId', authMiddleware_1.default, OrderController_1.default.updateOrder);
router.delete('/delete/:orderId', authMiddleware_1.default, OrderController_1.default.deleteOrder);
exports.default = router;
