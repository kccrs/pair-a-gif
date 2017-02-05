import React, { Component } from 'react';

// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

export default class PairGame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="PairGame">
        <h1>Pair A Gif</h1>
        <p>this is the game area</p>
      </section>
    )
  }
}
