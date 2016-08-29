import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../components/App';
import * as BoardActions from '../actions/boardActions';
import * as PalettesActions from '../actions/palettesActions';

function mapStateToProps(state) {
  return {
    counter: state.counter,
    board: state.board,
    palettes: state.palettes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, PalettesActions, BoardActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
