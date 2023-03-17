/* eslint-disable no-restricted-syntax */
import { accounts } from './createUserAccount.js';

// eslint-disable-next-line max-len
export default function createUserAddress(id, logradouro, numero, complemento, bairro, cep, cidade, uf) {
  const address = {
    logradouro,
    numero,
    complemento,
    bairro,
    cep,
    cidade,
    uf,
  };

  for (const _ in accounts) {
    if (accounts[_].id === id) {
      accounts[_].address = address;
      return 'Endereço adicionado com sucesso';
    }
  }
  return 'Não foi possível adicionar o endereço ao usuário solicitado';
}
