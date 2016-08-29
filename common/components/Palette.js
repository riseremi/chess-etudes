import React, { Component, PropTypes } from 'react';

import PaletteFigure from './PaletteFigure';

/**
 * Palette from which you can drag and drop figures
 * to the board. All figures are unlimited except
 * the king.
 */
export default class Palette extends Component {
  static propTypes = {
    palette: PropTypes.array.isRequired,
    bottom: PropTypes.bool,
    black: PropTypes.bool,
  }

  render() {
    const { black, bottom, palette } = this.props;
    const className = `palette${bottom ? ' palette--bottom' : ''}`;

    return (
      <div className={className}>
        {
          palette.map((figure, index) =>
            (figure.unlimited || figure.quantity > 0) ?
              <PaletteFigure
                key={index}
                index={index}
                name={figure.name}
                icon={figure.icon}
                black={black}
              />
              : null
          )
        }
      </div>
    );
  }
}
