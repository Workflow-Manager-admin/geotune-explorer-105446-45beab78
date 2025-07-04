import express from 'express';
import { register, login, googleAuthStart, googleAuthCallback } from '../controllers/auth.controller.js';

const router = express.Router();

// PUBLIC_INTERFACE
router.post('/register', register);
router.post('/login', login);
// OAuth stub endpoints
router.get('/google', googleAuthStart);
router.get('/google/callback', googleAuthCallback);

export default router;
