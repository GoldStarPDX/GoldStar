import React from 'react';

export default ({ submit, allowName = false }) => (
  <form onSubmit={e => {
    e.preventDefault();
    const { elements } = e.target;
    const data = Object.keys(elements).reduce((obj, key) => {
      obj[key] = elements[key].value;
      return obj;
    }, {});
    submit(data);
  }}>
    {allowName && <div><label for="name">Name:</label><input name="name" id="name" /></div>}
    <div><label for="email">Email:</label><input name="email" type="email" id="email" /></div>
    <div><label for="email">Password: </label><input type="password" name="password" id="password" /></div>
    <div><button>Submit</button></div>
  </form>
);