import { Orders } from '../models/Order.js';

class OrdersController {
  static async insertOrder(req, res) {
    const orderInfos = req.body;
    if (Object.keys(req.body).length !== 0) {
      try {
        const newOrder = await Orders.create(orderInfos);

        await Orders.update(newOrder, { where: { idPedido: String(newOrder.id) } });
        const order = await Orders.findOne({ where: { idPedido: String(newOrder.id) } });

        return res.status(201).json(order);
      } catch {
        return res.status(500).json({ message: 'Erro' });
      }
    } else {
      return res.status(400).json({ message: 'Erro' });
    }
  }
}

export default OrdersController;
