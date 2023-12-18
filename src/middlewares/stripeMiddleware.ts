// src/middlewares/stripeMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import stripe from 'stripe';

const stripeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const stripeSecretKey = 'your-stripe-secret-key'; // Replace with your Stripe secret key
  const stripeClient = new stripe(stripeSecretKey);

  try {
    const { amount, currency, paymentMethod } = req.body;

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethod,
      confirmation_method: 'manual',
      confirm: true,
    });

    req.body.paymentIntent = paymentIntent;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Stripe Payment Error' });
  }
};

export default stripeMiddleware;
