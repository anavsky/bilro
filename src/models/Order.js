import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema(
  {
    idPedido: { type: String },
    total: { type: String, required: true },
    taxaDeServico: { type: String, required: true },
    frete: { type: Boolean, required: true },
    cliente: { type: String, required: true },
    status: { type: String, required: true, enum: ['recebido', 'em producao', 'enviado', 'entregue'] }, // adicionar status de pedido cancelado?
  },
  {
    versionKey: false,
  },
);

const orders = mongoose.model('orders', ordersSchema);

export default orders;
