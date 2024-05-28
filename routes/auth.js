import express from 'express';
import { register, login, getAllUsers, updateUserRole } from '../controllers/auth.js';
import { authentication } from '../middlewares/authentication.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/all',authentication, getAllUsers);

router.post('/update',authentication, updateUserRole);

export default router;