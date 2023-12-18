// src/controllers/DomiciliarioController.ts
import { Request, Response } from 'express';
import { Domiciliario } from '../models/Domiciliario';

const DomiciliarioController = {
  createDomiciliario: async (req: Request, res: Response) => {
    try {
      const domiciliario = await Domiciliario.create({
        name: req.body.name,
        contactInfo: req.body.contactInfo,
        status: req.body.status,
      });

      res.json(domiciliario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  listDomiciliarios: async (req: Request, res: Response) => {
    try {
      const domiciliarios = await Domiciliario.findAll();
      res.json(domiciliarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getDomiciliarioDetails: async (req: Request, res: Response) => {
    try {
      const domiciliario = await Domiciliario.findByPk(req.params.domiciliarioId);
      if (!domiciliario) {
        return res.status(404).json({ error: 'Domiciliario not found' });
      }
      res.json(domiciliario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateDomiciliario: async (req: Request, res: Response) => {
    try {
      const domiciliario = await Domiciliario.findByPk(req.params.domiciliarioId);
      if (!domiciliario) {
        return res.status(404).json({ error: 'Domiciliario not found' });
      }

      domiciliario.name = req.body.name || domiciliario.name;
      domiciliario.contactInfo = req.body.contactInfo || domiciliario.contactInfo;
      domiciliario.status = req.body.status || domiciliario.status;

      await domiciliario.save();
      res.json(domiciliario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteDomiciliario: async (req: Request, res: Response) => {
    try {
      const domiciliario = await Domiciliario.findByPk(req.params.domiciliarioId);
      if (!domiciliario) {
        return res.status(404).json({ error: 'Domiciliario not found' });
      }

      await domiciliario.destroy();
      res.json({ message: 'Domiciliario deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default DomiciliarioController;
