import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    idRendeira: { type: String },
    nome: { type: String, required: true },
    minhaHistoria: { type: String, required: true },
    possuiLojaFisica: { type: Boolean, required: true },
    participaDeAssociacao: { type: Boolean, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    celular: {
      type: String,
      required: true,
      match: /^\d{10,13}$/,
    },
    instagram: { type: String, required: true },
    facebook: { type: String, required: true },
    cpf: {
      type: String,
      required: true,
      match: /^\d{11}$/,
    },
    cnpj: { type: String, required: true },
    banco: { type: String, required: true },
    tipoDeConta: { type: String, required: true },
    conta: { type: String, required: true },
    agencia: { type: String, required: true },
    cep: { type: String, required: true },
    endereco: { type: String, required: true },
    bairro: { type: String, required: true },
    complemento: { type: String, required: true },
    meuProcesso: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const users = mongoose.model('users', userSchema);

export default users;
