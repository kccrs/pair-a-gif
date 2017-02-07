import { connect } from 'react-redux';
import {
  getGiphys,
  setKeywords,
  receiveGiphys,
  fetchGiphys
} from '../actions/giphyActions';
import PlayGame from '../components/PlayGame'

const mapStateToProps = (state) => {
  console.log('state in playgame container: ' + state)
  return { currentGIFs: state.currentGIFs, currentKeywords: state.currentKeywords };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGiphys: (data) => {
       dispatch(getGiphys(data));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);



// const { currentGIFs, currentKeywords } = this.props;
