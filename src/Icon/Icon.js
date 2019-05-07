import React from 'react';
import menu from './images/menu.svg';

const icons = {
  'menu': menu
};

export const Icon = ({ name }) => {
  return <img src={icons[name]} alt="" />;
};
