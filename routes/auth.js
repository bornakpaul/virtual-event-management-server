import express from 'express';
import { register, login, getAllUsers, updateUserRole } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/all', getAllUsers);

router.post('/update', updateUserRole);

export default router;