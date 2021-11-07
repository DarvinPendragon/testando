import React, { useEffect } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input';
import { AuthContext } from '../Hooks/Auth';
import { Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import './Login.css';

const Login = (props) => {
  const { handleSubmit, catchEmail, catchPassword, error, log } =
    React.useContext(AuthContext);

  useEffect(() => {
    if (log) {
      return <Route path="/" exact component={Dashboard} />;
    }
  }, [handleSubmit]);

  return (
    <section className="a1">
      <form className="a2" onSubmit={handleSubmit}>
        <h2 className="h2">
          Faça seu <br />
          <span>Login.</span>
        </h2>
        <label className="label1" htmlFor="email">
          Email
        </label>
        <Input type={'email'} onChange={catchEmail} name="email" />

        <label className="label2" htmlFor="password">
          Password
        </label>
        <Input type={'password'} onChange={catchPassword} name="password" />

        <Button>Submit</Button>
        <span className="errortext">{error}</span>
      </form>
    </section>
  );
};

export default Login;
