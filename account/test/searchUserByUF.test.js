import createUserUseCase from "../src/use-case/createUserAccount.js";
import createUserAddress from "../src/use-case/createUserAddress.js";
import searchUserByUF from "../src/use-case/searchUserByUF.js";

createUserUseCase("Ana", "test@email.com", "senhaana");
createUserUseCase("Bia", "bia@email.com", "senhabia");
createUserUseCase("Carla", "carla@email.com", "senhacarla");
createUserUseCase("Dean", "dean@email.com", "senhacarla");
createUserUseCase("Ed", "ed@email.com", "senhacarla");

console.log(createUserAddress(1, "Rua 1", "11", "Sem complemento", " Bairro 1", "11111-000", "Fortaleza", "CE"));
console.log(createUserAddress(2, "Rua 2", "22", "Sem complemento", " Bairro 2", "22222-000", "São Paulo", "SP"));
console.log(createUserAddress(3, "Rua 3", "33", "Sem complemento", " Bairro 3", "33333-000", "São Paulo", "SP"));
console.log(createUserAddress(4, "Rua 4", "44", "Sem complemento", " Bairro 4", "44444-000", "Teresina", "PI"));
console.log(createUserAddress(5, "Rua 5", "55", "Sem complemento", " Bairro 5", "55555-000", "Salavador", "BA"));

console.log(searchUserByUF("SP"));