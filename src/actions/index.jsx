import axios from 'axios';

const ROOT_URL = `http://jsonplaceholder.typicode.com/users/`;

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';

export function fetchUsers() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_USERS,
    payload: request
  };
}
export function fetchUser(id) {
  const request = axios.get(`${ROOT_URL}${id}`)

  return {
    type: FETCH_USER,
    payload: request
  }
}
