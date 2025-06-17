import request from 'supertest';
import express from 'express';
import authRouter from '../src/auth';
import pool from '../src/db';

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

describe('Auth endpoints', () => {
  const testUser = { username: 'testuser', password: 'testpass' };

  afterAll(async () => {
    await pool.query('DELETE FROM users WHERE username = $1', [testUser.username]);
    await pool.end();
  });

  it('should register a new user', async () => {
    const res = await request(app).post('/auth/register').send(testUser);
    expect(res.statusCode).toBe(201);
    expect(res.body.user.username).toBe(testUser.username);
    expect(res.body.token).toBeDefined();
  });

  it('should not register duplicate user', async () => {
    const res = await request(app).post('/auth/register').send(testUser);
    expect(res.statusCode).toBe(409);
  });

  it('should login with correct credentials', async () => {
    const res = await request(app).post('/auth/login').send(testUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.user.username).toBe(testUser.username);
    expect(res.body.token).toBeDefined();
  });

  it('should not login with wrong password', async () => {
    const res = await request(app).post('/auth/login').send({ username: testUser.username, password: 'wrong' });
    expect(res.statusCode).toBe(401);
  });
});
