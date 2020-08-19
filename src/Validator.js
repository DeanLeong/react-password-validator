import React from 'react';
import './Validator.css';

function Validator() {
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </div>
  );
}

export default Validator;
