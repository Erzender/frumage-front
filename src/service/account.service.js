// const apiUrl = 'https://frumage-preprod.herokuapp.com/api';
const apiUrl = 'https://frumage.herokuapp.com/api';

const login = async (name, password) => {
  try {
    const res = await fetch(`${apiUrl}/login`, {
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
      return { status: res.status, response: await res.text() };
    }
    return await res.json();
  } catch (err) {
    console.log(err);
    return 'fetch error';
  }
};

const register = async (name, password) => {
  console.log('register service');
  console.log(name, password);
  try {
    const res = await fetch(`${apiUrl}/account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    console.log("register success");    
    console.log(res);
    if (res.status !== 200) {
      return { status: res.status, response: await res.text() };
    }
    return await res.json();
  } catch (err) {
    console.log(err);
    return 'fetch error';
  }
};

export default {
  login,
  register,
  // getUserData
};
