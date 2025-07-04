import Playlist from '../models/playlist.model.js';

// PUBLIC_INTERFACE
export async function createPlaylist(req, res) {
  /** Create playlist for current user */
  const { title, tracks, activity, language, timeOfDay, location } = req.body;
  const playlist = await Playlist.create({
    userId: req.user.id,
    title,
    tracks,
    activity,
    language,
    timeOfDay,
    location
  });
  res.status(201).json(playlist);
}

// PUBLIC_INTERFACE
export async function getUserPlaylists(req, res) {
  /** Get all playlists for current user */
  const playlists = await Playlist.find({ userId: req.user.id });
  res.json(playlists);
}

// PUBLIC_INTERFACE
export async function updatePlaylist(req, res) {
  /** Update existing playlist */
  const { id } = req.params;
  const playlist = await Playlist.findOneAndUpdate(
    { _id: id, userId: req.user.id },
    req.body,
    { new: true }
  );
  if (!playlist) return res.status(404).json({ message: "Playlist not found" });
  res.json(playlist);
}

// PUBLIC_INTERFACE
export async function deletePlaylist(req, res) {
  /** Delete a playlist */
  const { id } = req.params;
  await Playlist.findOneAndDelete({ _id: id, userId: req.user.id });
  res.json({ message: "Playlist deleted" });
}
