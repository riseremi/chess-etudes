import { combineReducers } from 'redux';
import board from './board';
import palettes from './palettes';

const rootReducer = combineReducers({
  board,
  palettes,
});

export default rootReducer;
