import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String }, // Only for local auth (unencrypted), else OAuth
  displayName: { type: String },
  avatarUrl: { type: String },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number], // [lng, lat]
  },
  languagePreferences: [String],
  activityPreferences: [String], // e.g., ['workout', 'chill', 'study']
  provider: { type: String, default: 'local' }, // or 'google', etc.
  createdAt: { type: Date, default: Date.now }
});

userSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', userSchema);

export default User;
