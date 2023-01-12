import { accounts } from "./createUserAccount.js";


export default function searchUserAccountByEmailUseCase (email){
    for (let _ in accounts){

        if (accounts[_].email === email){
            return accounts[_].name;
        }
    }
    return false;
}


