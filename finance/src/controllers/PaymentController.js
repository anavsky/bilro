const database = require('../models/index.js');

class PaymentController {
  static async createPayment(req, res) {
    const newPayment = req.body;
    try {
      newPayment.status = 'CRIADO';
      const newPaymentCreated = await database.Payments.create(newPayment);

      return res.location(`/payments/${newPaymentCreated.id}`).status(201).json(
        {
          id: newPaymentCreated.id,
          status: newPaymentCreated.status,
          links: [
            {
              href: `/payments/${newPaymentCreated.id}`,
              rel: 'self',
              method: 'GET',
            },
            {
              href: `/payments/cancel/${newPaymentCreated.id}`,
              rel: 'cancel',
              method: 'POST',
            },
            {
              href: `/payments/confirm/${newPaymentCreated.id}`,
              rel: 'confirm',
              method: 'POST',
            },
          ],
        },
      );
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPaymentById(req, res) {
    const { id } = req.params;
    let links = [];
    try {
      const requestedPayment = await database.Payments.findOne({
        where: {
          id: Number(id),
        },
      });
      if (requestedPayment.status === 'CRIADO') {
        links = [
          {
            href: `/payments/${requestedPayment.id}`,
            rel: 'self',
            method: 'GET',
          },
          {
            href: `/payments/confirm/${requestedPayment.id}`,
            rel: 'confirm',
            method: 'GET',
          },
          {
            href: `/payments/cancel/${requestedPayment.id}`,
            rel: 'cancel',
            method: 'GET',
          },
        ];
      } else {
        links = [
          {
            href: `/payments/${requestedPayment.id}`,
            rel: 'self',
            method: 'GET',
          },
        ];
      }
      return res.status(200).json({
        Id: requestedPayment.id,
        Status: requestedPayment.status,
        ExpirationDate: requestedPayment.expirationDate,
        CardNumber: requestedPayment.cardNumber,
        CardHolder: requestedPayment.nameCard,
        MonetaryValue: requestedPayment.monetaryValue,
        Links: links,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPayments(req, res) {
    try {
      const allPayments = await database.Payments.findAll();
      return res.status(200).json(allPayments);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cancelPayment(req, res) {
    const { id } = req.params;
    const cancel = { status: 'CANCELADO' };
    const checkPayment = await database.Payments.findOne({ where: { id: Number(id) } });
    try {
      if (checkPayment.status === 'CRIADO') {
        await database.Payments.update(cancel, {
          where: {
            id: Number(id),
          },
        });
        const cancelledPayment = await database.Payments.findOne({
          where: {
            id: Number(id),
          },
        });
        return res.status(200).json(cancelledPayment);
      }
      return res.status(409).json('O pedido não pode ser cancelado.');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async confirmPayment(req, res) {
    const { id } = req.params;
    const confirm = { status: 'CONFIRMADO' };
    const checkPayment = await database.Payments.findOne({ where: { id: Number(id) } });
    try {
      if (checkPayment.status === 'CRIADO') {
        await database.Payments.update(confirm, {
          where: {
            id: Number(id),
          },
        });
        const confirmedPayment = await database.Payments.findOne({
          where: {
            id: Number(id),
          },
        });
        return res.status(200).json(confirmedPayment);
      }
      return res.status(409).json('O pedido não pode ser confirmado.');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PaymentController;
