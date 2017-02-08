import { connect } from 'react-redux';
import {
  getGiphys,
  setKeywords,
  receiveGiphys,
  fetchGiphys
} from '../actions/giphyActions';

const mapStateToProps = (state) => {
  return { currentKeywords: state.currentKeywords };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setKeywords: (data) => {
       dispatch(setKeywords(data));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
