import { connect } from 'react-redux';
import { actionCreators } from '../actions/giphyActions';

const mapStateToProps = (state) => {
  return { currentKeywords: state.keywords };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setKeywords: (data) => {
       dispatch(actionCreators.setKeywords(data));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
