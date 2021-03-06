import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

export async function getAll() {
  const res = await axios.get(url);
  return res.data;
}

export async function create(user) {
  const res = await axios.post(url, user);
  return res.data;
}
