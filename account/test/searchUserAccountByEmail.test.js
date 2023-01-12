import createUserUseCase from "../src/use-case/createUserAccount.js";
import searchUserAccountByEmailUseCase from "../src/use-case/searchUserAccountByEmail.js";

createUserUseCase("Ana", "test@email.com", "senhaana");

const resultadoBusca = searchUserAccountByEmailUseCase("twest@email.com");

if (!resultadoBusca){
    console.log("Email não encontrado.");
} else {
    console.log(`O email foi encontrado e pertence ao usuário (a) ${resultadoBusca}.`);
};