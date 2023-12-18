// src/controllers/OrderController.ts
import { Request, Response } from 'express';
import { Order, Domiciliario, User } from '../models';

const OrderController = {
  createOrder: async (req: Request, res: Response) => {
    try {
      const order = await Order.create({
        status: req.body.status,
        UserId: req.body.userId,
        DomiciliarioId: req.body.domiciliarioId,
      });

      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  listOrders: async (req: Request, res: Response) => {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getOrderDetails: async (req: Request, res: Response) => {
    try {
      const order = await Order.findByPk(req.params.orderId, {
        include: [User, Domiciliario],
      });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateOrder: async (req: Request, res: Response) => {
    try {
      const order = await Order.findByPk(req.params.orderId);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      order.status = req.body.status || order.status;

      await order.save();
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteOrder: async (req: Request, res: Response) => {
    try {
      const order = await Order.findByPk(req.params.orderId);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      await order.destroy();
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default OrderController;
