import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    idProduto: { type: String },
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    categoria: { type: Boolean, required: true },
    material: { type: String, required: true },
    subcategoria: { type: String, required: true },
    disponivelSobEncomenda: { type: Boolean, required: true },
    precoUnitario: { type: Number, required: true },
    quantidadeEmEstoque: { type: Number, required: true },
    quantidadeMinima: { type: Number, required: true },
    prazoDeProducao: { type: Number, required: true },
    largura: { type: Number, required: true },
    altura: { type: Number, required: true },
    comprimento: { type: Number, required: true },
    peso: { type: Number, required: true },
    tamanhoPadrao: { type: Number, required: true },
    cor: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const products = mongoose.model('products', productSchema);

export default products;
