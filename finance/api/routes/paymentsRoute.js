const express = require ("express")
const PaymentController = require  ("../controllers/PaymentController")

const router = express.Router();

router.get("/payments/:id", PaymentController.getPaymentById)
router.get("/payments", PaymentController.getPayments)
router.post("/payments", PaymentController.createPayment)
router.put("/payments/cancel/:id", PaymentController.cancelPayment)
router.put("/payments/confirm/:id", PaymentController.confirmPayment)

//   .put("/payment/:id", PaymentController.updatePayment)
//   .put("/payment/:id", PaymentController.activatePayment)
//   .delete("/payment/:id", PaymentController.deletePayment)

module.exports = router;   