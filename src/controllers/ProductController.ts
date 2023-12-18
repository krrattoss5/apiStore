// src/controllers/ProductController.ts
import { Request, Response } from 'express';
import { Product, Sucursal } from '../models';

const ProductController = {
  createProduct: async (req: Request, res: Response) => {
    try {
      const product = await Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        sucursalId: req.body.sucursalId
      });

      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  listProducts: async (req: Request, res: Response) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductDetails: async (req: Request, res: Response) => {
    try {
      const product = await Product.findByPk(req.params.productId, {
        include: [Sucursal],
      });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateProduct: async (req: Request, res: Response) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;
      product.stock = req.body.stock || product.stock;
      product.SucursalId = req.body.sucursalId || product.SucursalId;

      await product.save();
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteProduct: async (req: Request, res: Response) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      await product.destroy();
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default ProductController;
