/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
import orders from '../models/Order.js';

class OrdersController {
  static async insertOrder(req, res) {
    const orderInfos = req.body;
    if (Object.keys(req.body).length !== 0) {
      try {
        const newOrder = await orders.create(orderInfos);

        await orders.update(newOrder, { where: { idPedido: String(newOrder.id) } });
        const order = await orders.findOne({ where: { idPedido: String(newOrder.id) } });

        return res.status(201).json(order);
      } catch {
        return res.status(500).json({ message: 'Erro' });
      }
    } else {
      return res.status(400).json({ message: 'Erro' });
    }
  }

  static listOrders = (req, res) => {
    orders.find((err, orders) => {
      res.status(200).json(orders);
    });
  };

  static listOrderById = (req, res) => {
    const { id } = req.params;
    orders.findById(id, (err, orders) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id do Pedido não localizado.` });
      } else {
        res.status(200).send(orders);
      }
    });
  };

  static updateOrder = (req, res) => {
    const { id } = req.params;
    orders.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Pedido atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteOrder = (req, res) => {
    const { id } = req.params;
    orders.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Pedido removido com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default OrdersController;
