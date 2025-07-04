import express from 'express';
import {
  createPlaylist,
  getUserPlaylists,
  updatePlaylist,
  deletePlaylist
} from '../controllers/playlist.controller.js';
import { authenticateJWT } from '../utils/auth.middleware.js';

const router = express.Router();

// PUBLIC_INTERFACE
router.post('/', authenticateJWT, createPlaylist);
router.get('/', authenticateJWT, getUserPlaylists);
router.put('/:id', authenticateJWT, updatePlaylist);
router.delete('/:id', authenticateJWT, deletePlaylist);

export default router;
