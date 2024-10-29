/* eslint-disable no-restricted-syntax */
import { accounts } from './createUserAccount.js';

export default function removeUserUseCase(email) {
  for (const _ in accounts) {
    if (accounts[_].email === email) {
      accounts.splice(_, 1);
      return true;
    }
  }
  return false;
}
