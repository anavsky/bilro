import { accounts } from "./createUserAccount.js";

export default function createUserAddress (id, logradouro, numero, complemento, bairro, cep, cidade, uf){
    const address = {
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        uf: uf
    };

    for (let _ in accounts){
        if (accounts[_].id === id){
            accounts[_].address = address;
            return "Endereço adicionado com sucesso";
        }
    }
    return "Não foi possível adicionar o endereço ao usuário solicitado";
}