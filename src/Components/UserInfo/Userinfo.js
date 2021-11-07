import React from 'react';
import { APIContext } from '../../API/Api';
import './Userinfo.css';

const Userinfo = () => {
  const { assets } = React.useContext(APIContext);

  return (
    <div className="container">
      <section className="logocontainer">
        <l className="logoline1">Machine</l>
        <l className="logoline2">Controller</l>
      </section>

      <section className="imageContainer">
        <img src="/images/perfilimage.jpg" />
      </section>

      <section className="namecontainer">
        <l>Hello!</l>
        <l className="namecontainer1">Silvana Smith</l>
      </section>
    </div>
  );
};

export default Userinfo;
