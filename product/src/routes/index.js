import express from 'express';
import categories from './categoriesRoutes.js';
import products from './productsRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Ecomm Alura' });
  });

  app.use(
    express.json(),
    categories,
    products,
  );
};

export default routes;
