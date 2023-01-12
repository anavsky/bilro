import { accounts } from "./createUserAccount.js";


export default function searchUserByUF (uf){
    const searchResults = [];
    for (let _ in accounts){
        if (accounts[_].address.uf === uf){ 
            searchResults.push(accounts[_]);
        }
    }
    return searchResults;
}
