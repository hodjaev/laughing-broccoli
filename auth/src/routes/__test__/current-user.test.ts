import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
  const cookie = await global.signin();

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authorized', async () => {
  const response = request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect((await response).body.currentUser).toEqual(null);
});