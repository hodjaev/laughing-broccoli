import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'password'
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      pasword: 'p'
    })
    .expect(400);
});

it('returns a 400 with missing email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      pasword: 'password'
    })
    .expect(400);
});

it('returns a 400 with missing password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com'
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({})
    .expect(400);
});