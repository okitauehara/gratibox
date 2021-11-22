import axios from 'axios';

const BASE_URL = 'http://localhost:4000';
// https://gratibox-api.herokuapp.com

function createHeaders(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function postSignature(token, planId, body) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/subscriptions/${planId}`, body, config);
  return promise;
}

function getSignature(token) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/subscriptions`, config);
  return promise;
}

function postSignOut(token) {
  const config = createHeaders(token);
  const promise = axios.delete(`${BASE_URL}/sign-out`, config);
  return promise;
}

export {
  postSignUp,
  postSignIn,
  postSignature,
  getSignature,
  postSignOut,
};
