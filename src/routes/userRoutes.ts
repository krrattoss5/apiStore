import express, { Router } from 'express';
import UserController from '../controllers/UserController';

const router: Router = express.Router();

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

export default router;
