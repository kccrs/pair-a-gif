import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class NavLink extends Component {
  render() {
    return (
      <Link
        className="NavLink"
        id={this.props.id}
        activeStyle={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        {this.props.children}
      </Link>
    );
  }
}

NavLink.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
};
