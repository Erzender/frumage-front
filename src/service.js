import config from './config.json';

const login = async (name, password) => {
  try {
    const res = await fetch(`${config.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    if (res.status !== 200) {
      return await res.text();
    }
    return await res.json();
  } catch (err) {
    return 'fetch error';
  }
};

const register = async (name, password) => {
  try {
    const res = await fetch(`${config.apiUrl}/account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    if (res.status !== 200) {
      return await res.text();
    }
    return await res.json();
  } catch (err) {
    return 'fetch error';
  }
};

const fetchTopics = async (token) => {
  try {
    const res = await fetch(`${config.apiUrl}/topics`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token || '' },
    });
    if (res.status !== 200) {
      return await res.text();
    }
    return await res.json();
  } catch (err) {
    return 'fetch error';
  }
};

export default {
  login,
  register,
  fetchTopics,
};
