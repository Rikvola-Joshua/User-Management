import axios from 'axios';

const RESTULT_AMMOUNT = 10;
const ROOT_URL = `https://randomuser.me/api/?results=${RESTULT_AMMOUNT}`;

export const FETCH_USER = 'FETCH_USER';

export function fetchUser() {
  const url = `{ROOT_URL}`;
  const request = axios.get(url);


  return {
    type: FETCH_USER,
    payload: request
  };
}
