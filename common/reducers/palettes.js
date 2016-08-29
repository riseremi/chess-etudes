import { MOVE_FROM_PALETTE, RETURN_TO_PALETTE } from '../actions/palettesActions';
import Figures from '../constants/figures';

const black = Figures.map(figure => {
  if (figure.name !== 'KING') {
    return Object.assign({}, figure, { unlimited: true });
  }
  return Object.assign({}, figure, { quantity: 1 });
});

const white = Figures.map(figure => {
  if (figure.name !== 'KING') {
    return Object.assign({}, figure, { unlimited: true });
  }
  return Object.assign({}, figure, { quantity: 1 });
});

export default function palettes(state = { black, white }, action) {
  switch (action.type) {
    case RETURN_TO_PALETTE: {
      const newState = Object.assign({}, state);
      const { name, black } = action.payload;

      newState[black ? 'black' : 'white'].forEach(figure => {
        if (figure.name === name) {
          figure.quantity++;
        }
      });

      return newState;
    }

    case MOVE_FROM_PALETTE: {
      const newState = Object.assign({}, state);
      const figure = Object.assign({}, action.payload);
      const oldFigure = newState[figure.black ? 'black' : 'white'][figure.index];

      if (!oldFigure.unlimited) {
        oldFigure.quantity = Math.max(0, oldFigure.quantity - 1);

        return newState;
      }
      return newState;
    }

    default:
      return state;
  }
}
