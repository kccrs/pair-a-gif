import React, { Component, PropTypes } from 'react';

// import { fetchGiphys, getGiphys, setKeywords, receiveGiphys } from '../actions/giphyActions';
// import giphysContainer from '../containers/giphysContainer';
// import playGameContainer from '../containers/PlayGameContainer';

export default class PlayGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { dispatch, currentGIFs, currentKeywords } = this.props;
    console.log('is this mounting??')
    // console.log('component mounted', this.props);
    // dispatch(fetchGiphys(currentGIFs));
  }

  render() {
    return (
      <section className="PlayGame">
        <h1>Play Pair A GIF!</h1>
        <h2>Your theme is {this.props.currentKeywords}</h2>
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

PlayGame.propTypes = {
  currentGIFs: PropTypes.array.isRequired,
  currentKeywords: PropTypes.array.isRequired,
  dispatch: PropTypes.func
}
