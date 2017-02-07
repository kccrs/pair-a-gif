import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavLink = ({ id, filter, children }) => (
  <Link
    className="NavLink"
    id={id}
    to={filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  id: PropTypes.string,
  filter: PropTypes.string,
  children: PropTypes.string,
};

export default NavLink;
