const express = require('express');
const PaymentController = require('../controllers/PaymentController.js');

const router = new express.Router();

router.get('/payments/:id', PaymentController.getPaymentById);
router.get('/payments', PaymentController.getPayments);
router.post('/payments', PaymentController.createPayment);
router.put('/payments/cancel/:id', PaymentController.cancelPayment);
router.put('/payments/confirm/:id', PaymentController.confirmPayment);

module.exports = router;
