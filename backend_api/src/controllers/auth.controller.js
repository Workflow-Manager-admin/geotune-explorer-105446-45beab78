import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// PUBLIC_INTERFACE
export async function register(req, res) {
  /** Register user with unique email and hashed password */
  const { email, password, displayName } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'Email already registered' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash, displayName });
  res.status(201).json({ id: user._id, email: user.email });
}

// PUBLIC_INTERFACE
export async function login(req, res) {
  /** Login with email/password, returns JWT token */
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.passwordHash) return res.status(400).json({ message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user._id, email: user.email, displayName: user.displayName },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  res.json({ token });
}

// PUBLIC_INTERFACE (Stub)
export function googleAuthStart(req, res) {
  /** Stub: Start Google OAuth (would redirect to Google) */
  res.json({ message: 'Google OAuth initiation not yet implemented.' });
}

// PUBLIC_INTERFACE (Stub)
export function googleAuthCallback(req, res) {
  /** Stub: Handle Google OAuth callback (should validate, create JWT, etc.) */
  res.json({ message: 'Google OAuth callback handler not yet implemented.' });
}
