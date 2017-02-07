import { connect } from 'react-redux';
import { actionCreators } from '../actions/giphyActions';
import PlayGame from '../components/PlayGame'

const mapStateToProps = (state) => {
  console.log('state in playgame container: ' + state)
  return { currentGIFs: state.currentGIFs, currentKeywords: state.currentKeywords };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getGiphys: (data) => {
//        dispatch(actionCreators.getGiphys(data));
//      }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);
export default connect(mapStateToProps)(PlayGame);



// const { currentGIFs, currentKeywords } = this.props;
