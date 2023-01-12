import createUserUseCase from "../src/use-case/createUserAccount.js";
import createUserAddress from "../src/use-case/createUserAddress.js";
import { accounts } from "../src/use-case/createUserAccount.js";

createUserUseCase("Ana", "test@email.com", "senhaana");
createUserUseCase("Bia", "bia@email.com", "senhabia");
createUserUseCase("Carla", "carla@email.com", "senhacarla");

console.log(createUserAddress(2, "Rua 1", "22", "Sem complemento", " Bairro 1", "11111-000", "Fortaleza", "CE"));

console.log(accounts);
