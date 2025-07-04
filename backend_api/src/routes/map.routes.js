import express from 'express';
import { getTrendingTracksByLocation } from '../controllers/map.controller.js';

const router = express.Router();

// PUBLIC_INTERFACE
router.get('/trending', getTrendingTracksByLocation);

export default router;
