import React from 'react';

const Test = () => {
  <form onSubmit={data => console.log('form data', data)}>
    <input type="text" />
    <input type="password" />
    <button>Submit</button>
  </form>;
};

export default Test;
