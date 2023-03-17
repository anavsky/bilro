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

describe('GET in /product', () => {
  it('Should return a list of all products', async () => {
    await request(app)
      .get('/product')
      .expect(200);
  });
});

let idExpected;
describe('POST in /product', () => {
  it('Should add a new Product', async () => {
    const res = await request(app)
      .post('/product')
      .send({
        name: 'TestProduct',
        description: 'TestProduct',
        slug: 'testProduct',
        pricePerUnit: 0,
        stockQtty: 0,
        category: 'TestProduct',
      })
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idExpected = res.body._id;
  });
  it('Should not add an empty Product', async () => {
    await request(app)
      .post('/product')
      .send({})
      .expect(500);
  });
});

describe('GET in /product/:id', () => {
  it('Should return a product by id', async () => {
    await request(app)
      .get(`/product/${idExpected}`)
      .expect(200);
  });
});

describe('PUT in /product/id', () => {
  it('Should update the product', async () => {
    const req = { request };
    await req.request(app)
      .put(`/product/${idExpected}`)
      .send({
        name: 'TestProduct2',
      })
      .expect(200);
  });
});

describe('DELETE in /product/id', () => {
  it('Should delete the added entry', async () => {
    await request(app)
      .delete(`/product/${idExpected}`)
      .expect(200);
  });
});
