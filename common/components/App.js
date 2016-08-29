import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Board from './Board';
import Palette from './Palette';

class App extends Component {
  static propTypes = {
    board: PropTypes.object.isRequired,
    moveFigure: PropTypes.func.isRequired,
    removeFigure: PropTypes.func.isRequired,
    createFigure: PropTypes.func.isRequired,
    moveFromPalette: PropTypes.func.isRequired,
    returnToPalette: PropTypes.func.isRequired,
    palettes: PropTypes.object.isRequired,
  }

  render() {
    const { board, palettes } = this.props;

    return (
      <div className="board-container">
        <Palette palette={palettes.black} black />
        <Board
          board={board}
          moveFigure={this.props.moveFigure}
          removeFigure={this.props.removeFigure}
          createFigure={this.props.createFigure}
          moveFromPalette={this.props.moveFromPalette}
          returnToPalette={this.props.returnToPalette}
        />
        <Palette palette={palettes.white} bottom />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
