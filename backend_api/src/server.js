import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import playlistRoutes from './routes/playlist.routes.js';
import mapRoutes from './routes/map.routes.js';
import recommendationRoutes from './routes/recommendation.routes.js';
import { notFound, errorHandler } from './utils/error.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

// API Endpoints
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/map', mapRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'MuseMap Backend API is running.' });
});

// Error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`MuseMap Backend running on port ${PORT}`);
});
