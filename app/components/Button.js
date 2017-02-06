import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
  render() {
    return(
      <button
        className="Button"
        id={this.props.id}
        disabled={this.props.disabled}
        onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
