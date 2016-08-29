import React, { Component, PropTypes } from 'react';

/**
 * Single figure.
 * It doesn't know anyhing about its position.
 */
export default class Figure extends Component {
  static propTypes = {
    black: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    isDragging: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    black: false,
    icon: '?',
  }

  render() {
    const { isDragging } = this.props;

    const { black, icon } = this.props;
    const stroke = black ? 'black' : 'white';

    return (
      <div style={{ opacity: isDragging ? 0.3 : 1, color: stroke }}>
        {icon}
      </div>
    );
  }
}
