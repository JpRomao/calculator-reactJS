import React from 'react';

import './styles.css';

export default function Display({ actualNumber, previousNumber, operator }) {
  return (
    <div className="display">
      <div id="previousNumber">{previousNumber}</div>
      <div id="operator">{operator}</div>
      <div id="actualNumber">{actualNumber}</div>
    </div>
  );
}