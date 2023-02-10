import users from "../models/User.js";

class UserController {

    static listUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users);
        })
    };

    static insertUser = (req, res) => {
        let user = new users(req.body);
    
        user.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`});
            }else{
                res.status(201).send(user.toJSON());
            }
        });
    };

    static listUserById = (req, res) => {
        const id = req.params.id;
    
        users.findById(id, (err, users) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do Usuário não localizado.`});
            } else {
                res.status(200).send(users);
            }
        });
    };

    static updateUser = (req, res) => {
        const id = req.params.id;
    
        users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Usuário atualizado com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };

    static deleteUser = (req, res) => {
        const id = req.params.id;
    
        users.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Usuário removido com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };
};


export default UserController;