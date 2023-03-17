import categories from '../models/Category.js';

class CategoryController {
  static listCategories = (req, res) => {
    categories.find((err, categorias) => res.status(200).json(categorias));
  };

  static insertCategory = (req, res) => {
    const category = new categories(req.body);
    const nameRegex = /^[a-zA-Z][a-zA-Z\d\s]{2,}$/;
    const { name } = req.body;

    if (!nameRegex.test(name)) {
      res.status(400).send({ error: 'Formato de nome inválido' });
      return;
    }

    category.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar Categoria.` });
      } else {
        res.status(201).send(category.toJSON());
      }
    });
  };

  static listCategoryById = (req, res) => {
    const { id } = req.params;

    categories.findById(id, (err, categorias) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id da Categoria não localizado.` });
      } else {
        res.status(200).send(categorias);
      }
    });
  };

  static updateCategory = (req, res) => {
    const { id } = req.params;

    categories.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria atualizada com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteCategory = (req, res) => {
    const { id } = req.params;

    categories.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria removida com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static activateCategory = (req, res) => {
    const { id } = req.params;
    const { user } = req;

    if (user.role !== 'admin') {
      res.status(401).send({ message: 'Unauthorized' });
    }

    categories.findByIdAndUpdate(id, { $set: { status: 'Ativa' } }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria ativada com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default CategoryController;
