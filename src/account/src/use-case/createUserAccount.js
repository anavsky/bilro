export const accounts = [];

export default function createUserUseCase(name, email, password) {
  const currentDate = new Date().toJSON().slice(0, 10);

  const user = {
    id: accounts.length + 1,
    name,
    email,
    password,
    createdDate: currentDate,
  };
  accounts.push(user);
  return accounts[accounts.length - 1];
}
