import request from 'supertest';
import {
  afterEach, beforeEach, describe, it,
} from '@jest/globals';
import app from '../src/app.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET in /user', () => {
  it('Should return a list of all users', async () => {
    await request(app)
      .get('/user')
      .expect(200);
  });
});

let idExpected;
describe('POST in /user', () => {
  it('Should add a new user', async () => {
    const res = await request(app)
      .post('/user')
      .send({
        name: 'TestUser',
        email: 'test@example.com',
        password: 'TestUser!11',
        cpf: '00000000000',
        phone: '98999999999',
        address: {
          street: 'TestUser',
          number: 'TestUser',
          zipCode: '00000000',
          city: 'TestUser',
          state: 'MA',
        },
        createdDate: new Date(),
      })
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idExpected = res.body._id;
  });
  it('Should not add an empty user', async () => {
    await request(app)
      .post('/user')
      .send({})
      .expect(500);
  });
});

describe('GET in /user/:id', () => {
  it('Should return a user by id', async () => {
    await request(app)
      .get(`/user/${idExpected}`)
      .expect(200);
  });
});

describe('DELETE in /user/id', () => {
  it('Should delete the added entry', async () => {
    await request(app)
      .delete(`/user/${idExpected}`)
      .expect(200);
  });
});
