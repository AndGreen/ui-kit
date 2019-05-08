import React from 'react';
import PropTypes from 'prop-types';
import menu from './images/menu.svg';

const icons = {
  menu,
};

export const Icon = ({ name }) => <img src={icons[name]} alt="" />;
Icon.propTypes = {
  name: PropTypes.string,
};
