import { accounts } from './createUserAccount.js';

export default function changeUserNameUseCase(email, newName) {
  // eslint-disable-next-line no-restricted-syntax
  for (const _ in accounts) {
    if (accounts[_].email === email) {
      accounts[_].name = newName;
      console.log(accounts[_]);
      return true;
    }
  }
  return false;
}
