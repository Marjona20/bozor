import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Mahsulot',
    path: '/overview',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Mijoz',
    path: '/reports',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Savdo',
    path: '/products',
    icon: <FaIcons.FaHandshake />
  },
  {
    title: 'Tranzaksiyalar',
    path: '/team',
    icon: <IoIcons.IoIosPaper />
  },
];
