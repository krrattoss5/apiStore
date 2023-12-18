"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const OrderController = {
    createOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield models_1.Order.create({
                status: req.body.status,
                UserId: req.body.userId,
                DomiciliarioId: req.body.domiciliarioId,
            });
            res.json(order);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    listOrders: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const orders = yield models_1.Order.findAll();
            res.json(orders);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getOrderDetails: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield models_1.Order.findByPk(req.params.orderId, {
                include: [models_1.User, models_1.Domiciliario],
            });
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json(order);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield models_1.Order.findByPk(req.params.orderId);
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            order.status = req.body.status || order.status;
            yield order.save();
            res.json(order);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    deleteOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield models_1.Order.findByPk(req.params.orderId);
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            yield order.destroy();
            res.json({ message: 'Order deleted successfully' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
};
exports.default = OrderController;
