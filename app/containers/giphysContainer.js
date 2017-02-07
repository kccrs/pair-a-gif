import { connect } from 'react-redux';
import {
  getGiphys,
  setKeywords,
  receiveGiphys,
  fetchGiphys
} from '../actions/giphyActions';

const mapStateToProps = (state) => {
  return { currentGIFs: state.currentGIFs };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGiphys: (data) => {
       dispatch(getGiphys(data));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
