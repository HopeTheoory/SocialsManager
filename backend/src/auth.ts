import { Router } from 'express';
import pool from './db';
import { hashPassword, comparePassword, generateToken } from './authUtils';
import { requireFields } from './middleware/validate';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Register endpoint
router.post('/register', requireFields(['username', 'password']), async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashed = await hashPassword(password);
    const result = await pool.query(
      'INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username, created_at',
      [username, hashed]
    );
    const user = result.rows[0];
    const token = generateToken({ id: user.id, username: user.username });
    res.status(201).json({ user, token });
  } catch (err: any) {
    if (err.code === '23505') {
      res.status(409).json({ error: 'Username already exists' });
    } else {
      res.status(500).json({ error: 'Registration failed' });
    }
  }
});

// Login endpoint
router.post('/login', requireFields(['username', 'password']), async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const valid = await comparePassword(password, user.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
    const token = generateToken({ id: user.id, username: user.username });
    res.json({ user: { id: user.id, username: user.username, created_at: user.created_at }, token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// JWT validation middleware
export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

export default router;
