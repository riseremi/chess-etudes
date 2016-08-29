import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

import ItemTypes from '../constants/itemTypes';
import Square from './Square';

const boardSquareTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    const { position, createFigure, moveFromPalette } = props;

    // If there is no figure, create it
    if (item.fromPalette && !props.children) {
      createFigure(item, position);
      moveFromPalette(item);
    } else {
      // delegate drop handling to the DropSource
      return { name: item.name, position };
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class BoardSquare extends Component {
  static propTypes = {
    isOver: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    children: PropTypes.node,
    position: PropTypes.object.isRequired,
  }

  render() {
    const { position, connectDropTarget, isOver } = this.props;
    const { x, y } = position;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div className="board-square">
        <Square black={black}>
          {this.props.children}
        </Square>
        {
          isOver &&
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.3,
                backgroundColor: '#1c54bf',
              }}
            />
        }
      </div>
    );
  }
}

export default DropTarget(ItemTypes.FIGURE, boardSquareTarget, collect)(BoardSquare);
