import React, { Component, PropTypes } from 'react';

import { getGiphys, setKeywords, receiveGiphys } from '../actions/giphyActions';
import giphysContainer from '../containers/giphysContainer';

export default class PlayGame extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    currentGIFs: PropTypes.array.isRequired,
    currentKeywords: PropTypes.array.isRequired,
    dispatch: PropTypes.func
  }

  // componentDidMount() {
  //   const { dispatch, currentGIFs, currentKeywords } = this.props;
  //   console.log('component mounted', this.props);
  //   dispatch(getGiphys(currentGIFs));
  // }

  render() {
    const { currentGIFs, currentKeywords } = this.props;
    return (
      <section className="PlayGame">
        <h1>Play Pair A GIF!</h1>
        <h2>Your theme is {currentKeywords}</h2>
        <p>This is where the game is played.</p>
        <div>
          <ul>
            { this.props.currentGIFs ?
              this.props.currentGIFs.map((g) => {
                return (
                  <ul>
                    <li key={g.id}>{g.data.images.downsized.url}</li>
                  </ul>
                );
              })
              : <li>You have not chosen a theme.</li>
            }
          </ul>
        </div>
      </section>
    );
  }
};
