import express from 'express';
import { getAllUsers, getUserProfile, updateUserProfile, deleteUser } from '../controllers/user.controller.js';
import { authenticateJWT } from '../utils/auth.middleware.js';

const router = express.Router();

// PUBLIC_INTERFACE
router.get('/', authenticateJWT, getAllUsers); // List all users (admin/debug)
router.get('/me', authenticateJWT, getUserProfile); // Current user profile
router.put('/me', authenticateJWT, updateUserProfile); // Update my profile
router.delete('/me', authenticateJWT, deleteUser); // Delete account

export default router;
