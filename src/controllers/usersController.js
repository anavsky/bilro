/* eslint-disable no-shadow */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from '../models/User.js';
import hashPassword from '../middlewares/hashPassword.js';

dotenv.config();

class UserController {
  static listUsers = (req, res) => {
    // eslint-disable-next-line array-callback-return
    users.find((err, users) => {
      res.status(200).json(users);
    });
  };

  static insertUser = async (req, res) => {
    const user = new users(req.body);
    user.password = await hashPassword(req.body.password);
    user.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static listUserById = (req, res) => {
    const { id } = req.params;
    users.findById(id, (err, users) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id do Usuário não localizado.` });
      } else {
        res.status(200).send(users);
      }
    });
  };

  static async findUserEmail(email) {
    const user = await users.findOne({ email });
    return user || null;
  }

  static updateUser = (req, res) => {
    const { id } = req.params;
    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Usuário atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteUser = (req, res) => {
    const { id } = req.params;
    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Usuário removido com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static login = (req, res) => {
    const { _id } = req.user;
    const token = jwt.sign({ _id }, process.env.TOKEN_SECRET);
    res.header('Authorization', token);
    res.status(204).send();
  };
}

export default UserController;
