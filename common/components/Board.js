import React, { Component, PropTypes } from 'react';
import BoardFigure from './BoardFigure';
import BoardSquare from './BoardSquare';

export default class Board extends Component {
  static propTypes = {
    board: PropTypes.object.isRequired,
    createFigure: PropTypes.func.isRequired,
    moveFromPalette: PropTypes.func.isRequired,
    moveFigure: PropTypes.func.isRequired,
    removeFigure: PropTypes.func.isRequired,
    returnToPalette: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.renderSquare = this.renderSquare.bind(this);
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    const { figures } = this.props.board;
    let figure = false;

    figures.forEach(figurez => {
      if (figurez.x === x && figurez.y === y) {
        figure = figurez;
      }
    });

    return (
      <BoardSquare
        key={i}
        position={{ x, y }}
        createFigure={this.props.createFigure}
        moveFromPalette={this.props.moveFromPalette}
      >
      {figure ?
        <BoardFigure
          name={figure.name}
          icon={figure.icon}
          black={figure.black}
          position={{ x, y }}
          moveFigure={this.props.moveFigure}
          removeFigure={this.props.removeFigure}
          returnToPalette={this.props.returnToPalette}
        /> : null }
      </BoardSquare>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', width: 64 * 8 }}>
        { squares.map(square => square) }
      </div>
    );
  }
}
