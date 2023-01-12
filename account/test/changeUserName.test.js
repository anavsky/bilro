import createUserUseCase from "../src/use-case/createUserAccount.js";
import changeUserNameUseCase from "../src/use-case/changeUserName.js";

createUserUseCase("Ana", "test@email.com", "senhaana");

const resultadoBusca = changeUserNameUseCase("test@email.com", "Aninha");

if (resultadoBusca){
    console.log("Nome alterado com sucesso");
} else {
    console.log("Houve um erro ao alterar o nome do usuário solicitado");
};