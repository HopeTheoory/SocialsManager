import request from 'supertest';
import express from 'express';
import router from '../src/routes';

describe('Health endpoint', () => {
  it('should return status ok', async () => {
    const app = express();
    app.use('/', router);
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
