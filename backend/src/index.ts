import express from 'express';
import router from './routes';
import pool from './db';
import authRouter from './auth';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/auth', authRouter);
app.use('/', router);

// Example DB check endpoint
app.get('/db-check', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ dbTime: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
