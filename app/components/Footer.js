import React from 'react'
import NavLink from './NavLink'

const Footer = () => (
  <footer>
    <nav>
      <NavLink
        filter="search"
        id="SearchFooterLink">
        Search
      </NavLink>
      <NavLink
        filter="game"
        id="ReplayLink">
        Replay
      </NavLink>
      <NavLink
        filter=""
        id="HomeLink">
        Home
      </NavLink>
    </nav>
    <img src="../app/assets/PoweredBy_200px-Black_HorizLogo.png" alt="Logo for GIPHY.com"/>
  </footer>
);

export default Footer;
