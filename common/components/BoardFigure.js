import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

import ItemTypes from '../constants/itemTypes';
import Figure from './Figure';

const boardFigureSource = {
  beginDrag(props) {
    return {
      name: props.name,
      black: props.black,
      position: props.position,
    };
  },

  endDrag(props, monitor) {
    const { moveFigure, removeFigure, returnToPalette } = props;
    const item = monitor.getItem();
    const didDrop = monitor.didDrop();
    const destination = monitor.getDropResult();

    if (didDrop) {
      moveFigure(item.position, destination.position);
    } else {
      removeFigure(item.position);
      returnToPalette(item);
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class BoardFigure extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    black: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
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

export default DragSource(ItemTypes.FIGURE, boardFigureSource, collect)(BoardFigure);
