import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';

const LoginRoute = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default LoginRoute;
