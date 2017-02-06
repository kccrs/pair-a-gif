import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string,
};


export default NavLink;
