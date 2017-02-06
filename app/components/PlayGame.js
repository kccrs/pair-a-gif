import React, { Component, PropTypes } from 'react';

export default class PlayGame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="PlayGame">
        <h1>Play Pair A GIF!</h1>
        <h2>Your theme is {this.props.searchTerm}</h2>
        <p>This is where the game is played.</p>
      </section>
    )
  }
}

PlayGame.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
