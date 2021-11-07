import React from 'react';
import { AuthContext } from '../Hooks/Auth';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';
import LoginRoute from './LoginRoute';

const IndexRoutes = () => {
  const { log } = React.useContext(AuthContext);
  return <BrowserRouter>{log ? <AppRoute /> : <LoginRoute />}</BrowserRouter>;
};

export default IndexRoutes;
