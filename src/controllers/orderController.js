const db = require('../models/');
const { host, port } = require('../constantes/constants.js');

class OrdersController {
  static async saveNewOrder(req, res) {
    const orderInfos = req.body;
    if (Object.keys(req.body).length !== 0) {
      try {
        const newOrder = await db.Orders.create(orderInfos);

        const statusLinks = {
          links: [
            {
              rel: 'CANCELADO',
              method: 'PATCH',
              href: `http://${host}:${port}/orders/${newOrder.id}/CANCELADO`,
            },
            {
              rel: 'PAGO',
              method: 'PATCH',
              href: `http://${host}:${port}/orders/${newOrder.id}/PAGO`,
            },
          ],
        };

        await db.Orders.update(statusLinks, { where: { id: Number(newOrder.id) } });
        const order = await db.Orders.findOne({ where: { id: Number(newOrder.id) } });

        return res.status(201).json(order);
      } catch {
        return res.status(500).json({ message: 'Error' });
      }
    } else {
      return res.status(400).json({ message: 'Error' });
    }
  }

  static async updateStatusOrderByLink(req, res) {
    const { id, status } = req.params;
    try {
      await db.Orders.update({ status }, { where: { id: Number(id) } });
      const statusUpdatedOrder = await db.Orders.findOne({ where: { id: Number(id) } });
      const customerInfos = await fetch(`http://ecomm-account:3001/api/users/${statusUpdatedOrder.customerId}`)
        .then((response) => response.json());
      await db.Orders.update(
        {
          customerName: customerInfos.name,
          customerCpf: customerInfos.cpf,
          deliveryAddress: customerInfos.address,
        },
        { where: { id: Number(id) } },
      );

      const order = await db.Orders.findOne({ where: { id: Number(id) } });
      return res.status(200).json(order);
    } catch {
      return res.status(500).json({ message: 'Status update failed.' });
    }
  }
}

module.exports = OrdersController;
