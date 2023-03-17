import request from 'supertest';
import {
  afterEach, beforeEach, describe, it, expect, jest,
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

describe('GET in /categories', () => {
  it('Should return a list of all categories', async () => {
    await request(app)
      .get('/categories')
      .expect(200);
  });
});

let idExpected;
describe('POST in /categories', () => {
  it('Should add a new category', async () => {
    const res = await request(app)
      .post('/categories')
      .send({
        name: 'TestCategory',
        status: 'Inativa',
      })
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idExpected = res.body._id;
  });
  it('Should not add an empty category', async () => {
    await request(app)
      .post('/categories')
      .send({})
      .expect(500);
  });
});

describe('GET in /categories/:id', () => {
  it('Should return a category by id', async () => {
    await request(app)
      .get(`/categories/${idExpected}`)
      .expect(200);
  });
});

describe('PUT in /categories/id', () => {
  it('Should activate the category', async () => {
    const req = { request };
    const spy = jest.spyOn(req, 'request');
    await req.request(app)
      .put(`/categories/${idExpected}`)
      .send()
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });
});

describe('PUT in /categories/id', () => {
  it('Should update the field: status', async () => {
    const req = { request };
    const spy = jest.spyOn(req, 'request');
    await req.request(app)
      .put(`/categories/${idExpected}`)
      .send({
        name: 'TestCategory',
        status: 'Ativa',
      })
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE in /categories/id', () => {
  it('Should delete the added entry', async () => {
    await request(app)
      .delete(`/categories/${idExpected}`)
      .expect(200);
  });
});
