import React from 'react';
import './Input.css';

const Input = ({ type, label, onChange, name }) => {
  return (
    <input
      className="input"
      type={type}
      label={label}
      onChange={onChange}
      required
      name={name}
    ></input>
  );
};

export default Input;
