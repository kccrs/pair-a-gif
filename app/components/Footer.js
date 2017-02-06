import React from 'react'
import NavLink from '../containers/NavLink'

const Footer = () => (
  <footer>
    <img src="../app/assets/PoweredBy_200px-Black_HorizLogo.png" alt="Logo for GIPHY.com"/>
    <p>
      Show:
      {' '}
      <NavLink filter="all">
        All
      </NavLink>
      {', '}
      <NavLink filter="active">
        Active
      </NavLink>
      {', '}
      <NavLink filter="completed">
        Completed
      </NavLink>
    </p>
  </footer>
);

export default Footer;
