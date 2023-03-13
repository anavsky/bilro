import express from 'express';
import passport from 'passport';
import UserController from '../controllers/usersController.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router
  .get('/user', passport.authenticate('bearer', { session: false }), UserController.listUsers)
  .get('/user/:id', UserController.listUserById)
  .post('/user', UserController.insertUser)
  .put('/user/:id', passport.authenticate('local', { session: false }), UserController.updateUser)
  .delete('/user/:id', passport.authenticate('local', { session: false }), UserController.deleteUser)
  .post('/user/login', passport.authenticate('local', { session: false }), UserController.login);

export default router;
