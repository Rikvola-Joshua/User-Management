import axios from 'axios';

const ROOT_URL = `http://jsonplaceholder.typicode.com/users/`;

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUser() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);


  return {
    type: FETCH_USERS,
    payload: request
  };
}
