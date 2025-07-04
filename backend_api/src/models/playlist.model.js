import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  tracks: [
    {
      trackId: String, // Could be spotify/lastfm id etc.
      title: String,
      artist: String,
      album: String,
      language: String,
      uri: String, // External URI for playback
      source: String
    }
  ],
  activity: String,
  language: String,
  timeOfDay: String, // e.g., 'morning', 'night'
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number],
  },
  createdAt: { type: Date, default: Date.now }
});

playlistSchema.index({ location: '2dsphere' });

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;
