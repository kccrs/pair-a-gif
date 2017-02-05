import { connect } from 'react-redux';
import { actionCreators } from '../actions/index';

const mapStateToProps = (state) => {
  return { giphys: state.giphys };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchGiphy: (data) => {
       dispatch(actionCreators.searchGiphy(data));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
