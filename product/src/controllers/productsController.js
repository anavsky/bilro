import products from "../models/Product.js";

class ProductController {

    static listProducts = (req, res) => {
        products.find((err, products) => {
            res.status(200).json(products);
        })
    };

    static insertProduct = (req, res) => {
        let product = new products(req.body);
        const nameRegex = /^[a-zA-Z][a-zA-Z\d\s]{2,}$/;
        const name = req.body.name;
    
        if(!nameRegex.test(name)) {
            res.status(400).send({ error: 'Formato de nome inválido' });
            return;
        }
    
        product.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Produto.`});
            }else{
                res.status(201).send(product.toJSON());
            }
        });
    };

    static listProductById = (req, res) => {
        const id = req.params.id;
    
        products.findById(id, (err, products) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do Produto não localizado.`});
            } else {
                res.status(200).send(products);
            }
        });
    };

    static updateProduct = (req, res) => {
        const id = req.params.id;
    
        products.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Produto atualizado com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };

    static deleteProduct = (req, res) => {
        const id = req.params.id;
    
        products.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Produto removido com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };
};


export default ProductController;