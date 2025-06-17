import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Example: Add more routes here
// router.get('/users', ...)

export default router;
