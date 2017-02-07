import { connect } from 'react-redux';
import { actionCreators } from '../actions/giphyActions';

const mapStateToProps = (state) => {
  return { currentGIFs: state.currentGIFs };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGiphys: (data) => {
       dispatch(actionCreators.getGiphys(data));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
