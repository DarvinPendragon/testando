import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import SearchInput from '../Inputs/SearchInput';

const Header = () => {
  return (
    <>
      <div className="head">
        <SearchInput />
      </div>
    </>
  );
};

export default Header;
