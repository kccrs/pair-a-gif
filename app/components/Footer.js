import React, { Component } from 'react';
import NavLink from './NavLink';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <NavLink
            id="SearchFooterLink">
            Search
          </NavLink>
          <NavLink
            id="ReplayLink">
            Replay
          </NavLink>
          <NavLink
            id="HomeLink">
            Home
          </NavLink>
        </nav>
        <img src="../app/assets/PoweredBy_200px-Black_HorizLogo.png" alt="Logo for GIPHY.com"/>
      </footer>
    )
  }
}
