import mongoose from 'mongoose';

const midiaFromProcessSchema = new mongoose.Schema(
  {
    idRendeira: { type: String },
    idMeuProcesso: { type: String, required: true },
    urlMidia: { type: String, required: true },
    tipoDaMidia: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const midiaFromProcess = mongoose.model('midiaFromProcess', midiaFromProcessSchema);

export default midiaFromProcess;
