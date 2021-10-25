import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Cadastrar',
    path: '/',
    icon: <IoIcons.IoIosAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/Clientes',
    icon: <FiIcons.FiUsers />,
    cName: 'nav-text'
  }
];