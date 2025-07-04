import { getTrendingTracks } from '../integrations/music.stub.js';

// PUBLIC_INTERFACE
export async function getTrendingTracksByLocation(req, res) {
  /**
   * Returns trending tracks based on query params (e.g., lat, lng)
   * Can be expanded to support bounding box, radius, etc.
   */
  const { lat, lng, radius } = req.query;
  // Placeholder: use stub
  const tracks = await getTrendingTracks({ lat, lng, radius });
  res.json({ tracks });
}
