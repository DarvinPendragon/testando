import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaIcons.FaTools />,
    cName: 'nav-text',
  },
  {
    title: 'Assets',
    path: '/Assets',
    icon: <FaIcons.FaTools />,
    cName: 'nav-text',
  },
  {
    title: 'Companies',
    path: '/Companies',
    icon: <BsIcons.BsBuilding />,
    cName: 'nav-text',
  },
  {
    title: 'Units',
    path: '/Units',
    icon: <RiIcons.RiBuilding2Line />,
    cName: 'nav-text',
  },
  {
    title: 'Users',
    path: '/Users',
    icon: <ImIcons.ImUsers />,
    cName: 'nav-text',
  },
  {
    title: 'Sign-out',
    path: '/Users',
    icon: <ImIcons.ImUsers />,
    cName: 'nav-text',
  },
];
