import express from 'express';
import users from './usersRoutes.js';
import midia from './midiaRoutes.js';
import order from './orderRoutes.js';
import product from './productRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'BilroArte' });
  });

  app.use(
    express.json(),
    users,
    midia,
    order,
    product,
  );
};

export default routes;
