import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

import ItemTypes from '../constants/itemTypes';
import Figure from './Figure';

/**
 * Wrapper for Figure, holds palette figure logic
 * (dragging over the board, creating new figures)
 */
const paletteFigureSource = {
  beginDrag(props) {
    return {
      fromPalette: true,
      icon: props.icon,
      black: props.black,
      name: props.name,
      index: props.index,
    };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class PaletteFigure extends Component {
  static propTypes = {
    black: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
  }

  static defaultProps = {
    black: false,
    icon: '?',
  }

  render() {
    const { connectDragSource, isDragging, black, icon } = this.props;

    return connectDragSource(
      <div>
        <Figure icon={icon} isDragging={isDragging} black={black} />
      </div>
    );
  }
}

export default DragSource(ItemTypes.FIGURE, paletteFigureSource, collect)(PaletteFigure);
