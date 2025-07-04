import express from 'express';
import { getRecommendations } from '../controllers/recommendation.controller.js';
import { authenticateJWT } from '../utils/auth.middleware.js';

const router = express.Router();

// PUBLIC_INTERFACE
router.post('/', authenticateJWT, getRecommendations);

export default router;
