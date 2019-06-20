import React from 'react';
import './Display.css';

const Display = props => {
  return <main className="display">{props.children}</main>;
};

export default Display;
