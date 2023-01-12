import createUserUseCase from "../src/use-case/createUserAccount.js";
import removeUserUseCase from "../src/use-case/removeUserAccount.js";
import { accounts } from "../src/use-case/createUserAccount.js";

createUserUseCase("Ana", "test@email.com", "senhaana");
createUserUseCase("Bia", "bia@email.com", "senhabia");
createUserUseCase("Carla", "carla@email.com", "senhacarla");


console.log(accounts);

const userRemoved = removeUserUseCase("bia@email.com");

if (userRemoved){
    console.log("Usuário removido com sucesso");
} else {
    console.log("Houve um erro ao remover o usuário solicitado");
};
