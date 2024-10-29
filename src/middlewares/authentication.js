import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import RendeiraController from '../controllers/rendeirasController.js';

dotenv.config();

async function checkPassword(password, hashedPassword) {
  const validPassword = await bcrypt.compare(password, hashedPassword);
  return validPassword;
}

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  try {
    const user = await RendeiraController.findUserEmail(email);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(new LocalStrategy({
  usernameField: 'email', // use email as the username field
  passwordField: 'password',
  session: false,
}, async (email, password, done) => {
  try {
    const user = await RendeiraController.findUserEmail(email); // find the user by email
    if (!user) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    const validPassword = await checkPassword(password, user.password);
    if (!validPassword) {
      return done(null, false, { message: 'Invalid password or email' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.use(new BearerStrategy(
  async (token, done) => {
    try {
      const payload = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = RendeiraController.findUserEmail(payload.email);
      done(null, user);
    } catch (err) {
      done(err);
    }
  },
));

export default passport;
