import User from '../models/user.model.js';

// PUBLIC_INTERFACE
export async function getAllUsers(req, res) {
  /** Get all users (admin/debugging use) */
  const users = await User.find().select('-passwordHash');
  res.json(users);
}

// PUBLIC_INTERFACE
export async function getUserProfile(req, res) {
  /** Get current user's profile */
  const user = await User.findById(req.user.id).select('-passwordHash');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
}

// PUBLIC_INTERFACE
export async function updateUserProfile(req, res) {
  /** Update current user's profile */
  const { displayName, avatarUrl, location, languagePreferences, activityPreferences } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      displayName,
      avatarUrl,
      location,
      languagePreferences,
      activityPreferences
    },
    { new: true }
  );
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
}

// PUBLIC_INTERFACE
export async function deleteUser(req, res) {
  /** Delete current user's account */
  await User.findByIdAndDelete(req.user.id);
  res.json({ message: 'Account deleted' });
}
