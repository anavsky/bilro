import mongoose from 'mongoose';

const midiasDoMeuProcessoSchema = new mongoose.Schema(
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

const midiasDoMeuProcesso = mongoose.model('midiasDoMeuProcesso', midiasDoMeuProcessoSchema);

export default midiasDoMeuProcesso;
