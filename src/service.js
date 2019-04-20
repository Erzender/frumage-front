import config from './config.json';

const login = async (name, password) => {
  try {
    const res = await fetch(`${config.apiUrll}/login`, {
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
    const res = await fetch(`${config.apiUrll}/account`, {
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
    const res = await fetch(`${config.apiUrll}/topics`, {
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

const newTopic = async (token, name, description, read, write) => {
  try {
    const res = await fetch(`${config.apiUrll}/topic`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', token: token || '' },
      body: JSON.stringify({
        name,
        description,
        read,
        write,
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

const fetchThreads = async (token, topic) => {
  try {
    const res = await fetch(`${config.apiUrll}/threads`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token || '', topic },
    });
    if (res.status !== 200) {
      return await res.text();
    }
    return await res.json();
  } catch (err) {
    return 'fetch error';
  }
};

const fetchMessages = async (token, thread) => {
  try {
    const res = await fetch(`${config.apiUrll}/messages`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token: token || '', thread },
    });
    if (res.status !== 200) {
      return await res.text();
    }
    return await res.json();
  } catch (err) {
    return 'fetch error';
  }
};

const newMessage = async (token, thread, content) => {
  try {
    const res = await fetch(`${config.apiUrll}/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', token: token || '' },
      body: JSON.stringify({
        thread,
        content,
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

export default {
  login,
  register,
  fetchTopics,
  newTopic,
  fetchThreads,
  fetchMessages,
  newMessage,
};
