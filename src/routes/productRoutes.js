import express from 'express';
import ProductController from '../controllers/productController.js';
// eslint-disable-next-line new-cap
const router = express.Router();

router
  .get('/product', ProductController.listProducts)
  .get('/product/:id', ProductController.listProductById)
  .post('/product', ProductController.insertProduct)
  .put('/product/:id', ProductController.updateProduct)
  .delete('/product/:id', ProductController.deleteProduct);

export default router;
