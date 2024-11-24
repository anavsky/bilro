import midiaFromProcess from '../models/MidiaFromProcess.js';

class MidiaController {
  static listMidia = (req, res) => {
    midiaFromProcess.find((err, midias) => res.status(200).json(midias));
  };

  static insertMidia = (req, res) => {
    const midia = new midiaFromProcess(req.body);

    midia.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar midia.` });
      } else {
        res.status(201).send(midia.toJSON());
      }
    });
  };

  static listMidiaById = (req, res) => {
    const { id } = req.params;

    midiaFromProcess.findById(id, (err, midias) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Midia não localizada.` });
      } else {
        res.status(200).send(midias);
      }
    });
  };

  static updateMidia = (req, res) => {
    const { id } = req.params;

    midiaFromProcess.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Midia atualizada com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteMidia = (req, res) => {
    const { id } = req.params;

    midiaFromProcess.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Midia removida com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default MidiaController;
