import express from 'express';
import OrderController from '../controllers/orderController.js';
// eslint-disable-next-line new-cap
const router = express.Router();

router
  .get('/order', OrderController.listOrders)
  .get('/order/:id', OrderController.listOrderById)
  .post('/order', OrderController.insertOrder)
  .put('/order/:id', OrderController.updateOrder)
  .delete('/order/:id', OrderController.deleteOrder);

export default router;
