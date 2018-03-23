import axios from 'axios';

const ROOT_URL = `https://jsonplaceholder.typicode.com/users/`;

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const SAVED_USER = 'SAVED_USER';

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

export function saveUser(user){
  const request = axios.post(`http://localhost/UserManager/api/values`, values).then(() => callback())
  return {
    type: SAVED_USER,
    payload: request
  }
}
