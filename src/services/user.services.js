import { Buffer } from 'buffer';
// import fetch from 'node-fetch';
// console.log("fetch", fetch)

const apiUrl = 'https://frumage-preprod.herokuapp.com/api';

function login(name, password) {
  console.log('name y password', name, password);
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      password,
    }),
  };

  return fetch(`${apiUrl}/login`, options).then(
    (jsonData) => {
      console.log('jsonData', jsonData);
      if (jsonData.status >= 400) {
        console.log('promise should reject', jsonData.status);
        return Promise.reject();
      }
      return jsonData.json().then((data) => {
        console.log('data', data);
        return data;
      }, error => error);
    },
    error => error,
  );
}

function register(name, password) {
  if (!name.length) return Promise.reject();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      name,
      password,
    }),
  };

  return fetch(`${apiUrl}/account`, options).then(
    (jsonData) => {
      console.log('jsonData'); console.log(jsonData);
      if (jsonData.status >= 400) {
        return Promise.reject();
      }
      return jsonData.json().then((data) => {
        console.log('userServices'); console.log(data);
        return data;
      }, error => error);
    },
    (error) => {
      console.log('error - fetch register', error);
      return error;
    },
  );
}


export default {
  login,
  register,
  // getUserData
};
