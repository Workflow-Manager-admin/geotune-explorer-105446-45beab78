# MuseMap Backend API

This is the backend API for MuseMap, providing music playlist recommendations based on user location, time, activity, and language.

## Features

- User authentication (JWT, Google OAuth stub)
- User profile and preferences (activity, language, location)
- Playlist CRUD (with time/activity/language features)
- Location-based trending tracks, map queries
- Smart playlist recommendation system (stub logic)
- Modular integration points for Spotify, Last.fm, Mapbox APIs

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and set secrets and MongoDB details.
3. `npm run dev` (for local/dev)

## Main API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login, returns JWT
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update profile (requires JWT)
- `POST /api/playlists` - Create playlist
- `GET /api/playlists` - List my playlists
- `POST /api/recommendations` - Get recommendations
- `GET /api/map/trending` - Location-based trending tracks

See the code for route/module comments and structure.

## Extending Integrations

See `src/integrations/music.stub.js` to connect Spotify, Last.fm, Mapbox, etc. Replace stub functions with real API logic and credentials.

---

MIT License.
