import { MOVE_FIGURE, CREATE_FIGURE, REMOVE_FIGURE } from '../actions/boardActions';

export default function board(state = { figures: [] }, action) {
  switch (action.type) {
    case MOVE_FIGURE: {
      const { start, end } = action.payload;
      const newState = Object.assign({}, state);
      let squareIsFree = true;

      newState.figures.forEach(figure => {
        if (figure.x === end.x && figure.y === end.y) {
          squareIsFree = false;
        }
      });

      // Square is not free, skipping
      if (!squareIsFree) return state;

      newState.figures.forEach(figure => {
        if (figure.x === start.x && figure.y === start.y) {
          figure.x = end.x;
          figure.y = end.y;
        }
      });
      return newState;
    }

    case REMOVE_FIGURE: {
      const newState = Object.assign({}, state);

      newState.figures.forEach((figure, index) => {
        if (figure.x === action.payload.position.x && figure.y === action.payload.position.y) {
          delete newState.figures[index];
        }
      });
      return newState;
    }

    case CREATE_FIGURE: {
      const { item, position } = action.payload;
      const newState = Object.assign({}, state);
      const { x, y } = position;

      const newItem = Object.assign({}, item, { x, y });
      newState.figures.push(newItem);

      return newState;
    }

    default:
      return state;
  }
}
