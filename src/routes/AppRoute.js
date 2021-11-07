import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { APIProvider } from '../API/Api';
import Layout from '../Components/Layout';
import Dashboard from '../Pages/Dashboard';

const AppRoute = () => {
  return (
    <APIProvider>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Layout>
    </APIProvider>
  );
};

export default AppRoute;
