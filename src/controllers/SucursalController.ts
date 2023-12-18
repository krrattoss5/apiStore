// src/controllers/SucursalController.ts
import { Request, Response } from 'express';
import { Sucursal } from '../models';

const SucursalController = {
  createSucursal: async (req: Request, res: Response) => {
    console.log(req)
    try {
      const sucursal = await Sucursal.create({
        name: req.body.name,
        location: req.body.location,
      });

      res.json(sucursal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  listSucursales: async (req: Request, res: Response) => {
    try {
      const sucursales = await Sucursal.findAll();
      res.json(sucursales);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getSucursalDetails: async (req: Request, res: Response) => {
    try {
      const sucursal = await Sucursal.findByPk(req.params.sucursalId);
      if (!sucursal) {
        return res.status(404).json({ error: 'Sucursal not found' });
      }
      res.json(sucursal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateSucursal: async (req: Request, res: Response) => {
    try {
      const sucursal = await Sucursal.findByPk(req.params.sucursalId);
      if (!sucursal) {
        return res.status(404).json({ error: 'Sucursal not found' });
      }

      sucursal.name = req.body.name || sucursal.name;
      sucursal.location = req.body.location || sucursal.location;

      await sucursal.save();
      res.json(sucursal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteSucursal: async (req: Request, res: Response) => {
    try {
      const sucursal = await Sucursal.findByPk(req.params.sucursalId);
      if (!sucursal) {
        return res.status(404).json({ error: 'Sucursal not found' });
      }

      await sucursal.destroy();
      res.json({ message: 'Sucursal deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default SucursalController;
