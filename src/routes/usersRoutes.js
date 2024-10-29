import express from 'express';
import passport from 'passport';
import RendeiraController from '../controllers/rendeirasController.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router
  .get('/user', passport.authenticate('bearer', { session: false }), RendeiraController.listUsers)
  .get('/user/:id', RendeiraController.listUserById)
  .post('/user', RendeiraController.insertUser)
  .put('/user/:id', passport.authenticate('local', { session: false }), RendeiraController.updateUser)
  .delete('/user/:id', passport.authenticate('local', { session: false }), RendeiraController.deleteUser)
  .post('/user/login', passport.authenticate('local', { session: false }), RendeiraController.login);

export default router;
