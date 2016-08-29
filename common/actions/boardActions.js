export const MOVE_FIGURE = 'MOVE_FIGURE';
export const CREATE_FIGURE = 'CREATE_FIGURE';
export const REMOVE_FIGURE = 'REMOVE_FIGURE';

// Move figure between squares on the board
export function moveFigure(start, end) {
  return {
    type: MOVE_FIGURE,
    payload: { start, end },
  };
}

// Remove figure from the board
export function removeFigure(position) {
  return {
    type: REMOVE_FIGURE,
    payload: { position },
  };
}

// Add new figure to the board
export function createFigure(item, position) {
  return {
    type: CREATE_FIGURE,
    payload: { item, position },
  };
}

