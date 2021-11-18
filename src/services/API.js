import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export default function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}
