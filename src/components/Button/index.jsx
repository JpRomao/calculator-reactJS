import React from 'react';

import './styles.css';

export default function Button(props) {
  return (
    <button
      className={`button ${props.operation ? 'operation' : ''}${props.double ? 'double' : ''}${props.triple ? 'triple' : ''}`}
      onClick={props.onClick}
      value={props.label}
    >
      { props.label }
    </button>
  );
}