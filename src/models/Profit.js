import mongoose from 'mongoose';

const profitSchema = new mongoose.Schema(
  {
    idGanho: { type: String },
    totalPedidosFinalizados: { type: Number, required: true },
    itemsEstoque: { type: Number, required: true },
  },
  {
    versionKey: false,
  },
);

const profits = mongoose.model('profits', profitSchema);

export default profits;
