import jwt from 'jsonwebtoken';

// PUBLIC_INTERFACE
export function authenticateJWT(req, res, next) {
  /**Middleware for verifying JWT in Authorization header. */
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token missing' });

  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid JWT' });
  }
}
