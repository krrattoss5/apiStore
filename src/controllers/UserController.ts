// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { User } from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserController = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      });

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  loginUser: async (req: Request, res: Response) => {
    try {
      const user = await User.findOne({ where: { username: req.body.username } });

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const validPassword = await bcrypt.compare(req.body.password, user.password);

      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default UserController;
