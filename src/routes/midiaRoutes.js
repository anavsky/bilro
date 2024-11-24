import express from 'express';
import MidiaController from '../controllers/midiaController.js';
// eslint-disable-next-line new-cap
const router = express.Router();

router
  .get('/midia', MidiaController.listMidia)
  .get('/midia/:id', MidiaController.listMidiaById)
  .post('/midia', MidiaController.insertMidia)
  .put('/midia/:id', MidiaController.updateMidia)
  .delete('/midia/:id', MidiaController.deleteMidia);

export default router;
