export const MOVE_FROM_PALETTE = 'MOVE_FROM_PALETTE';
export const RETURN_TO_PALETTE = 'RETURN_TO_PALETTE';

export function moveFromPalette(figure) {
  return {
    type: MOVE_FROM_PALETTE,
    payload: figure,
  };
}

export function returnToPalette(figure) {
  return {
    type: RETURN_TO_PALETTE,
    payload: figure,
  };
}
