import React from 'react';

import './Dashboard.css';
import Header from '../Components/Header/Header';
import Userinfo from '../Components/UserInfo/Userinfo';
import { APIContext } from '../API/Api';
import Menu from '../Components/Menu/Menu';
import Statistics from '../Components/Statistics/Statistics';

const Dashboard = () => {
  return (
    <section>
      <section className="mastercontainer">
        <Header />
        <Userinfo />
        <Menu />
      </section>
      <div className="teste1">oi1</div>
      <div className="teste2">oi2</div>
      <div className="teste3">oi3</div>
      <Statistics />
    </section>
  );
};

export default Dashboard;
