import axios from 'axios';

const BASE_URL = 'https://gratibox-api.herokuapp.com';

export default function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}
