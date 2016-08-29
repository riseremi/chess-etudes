import React, { PropTypes } from 'react';

/**
 * Board square
 */
const Square = (props) =>
  <div className={`square ${props.black ? 'square--black' : ''}`}>
    {props.children}
  </div>;

Square.propTypes = {
  black: PropTypes.bool,
  children: PropTypes.node,
};

export default Square;
