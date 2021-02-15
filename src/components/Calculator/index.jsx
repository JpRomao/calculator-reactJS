import React, { useState } from 'react';

import Display from '../Display';
import Button from '../Button';

import calculate from '../../utils/calculate';

import './styles.css';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [number, setNumber] = useState('');
  const [operator, setOperator] = useState('');

  function handleClearMemory() {
    setNumber('');
    setOperator('');
    setDisplayValue('0');
  }

  function handleSetOperation(operation) {
    if(operation === '=' && operator) {
      const result = calculate(number, operator, displayValue);
      setNumber('');
      setOperator('');
      
      return setDisplayValue(`${result}`);
    }

    if(!operator && operation === '=') {
      return;
    }
    
    setOperator(operation);

    if(displayValue !== '') {
      setNumber(displayValue);
    }

    return setDisplayValue('0');    
  }

  function handleAddDigit(number) {
    if(number === '.' && displayValue.includes('.')) {
      return;
    }

    if(displayValue === '0' && number === '0') {
      return;
    }

    if(displayValue === '0' && number !== '.') {
      return setDisplayValue(number);
    }

    return setDisplayValue(displayValue + number);
  }

  return (
    <div className="calculator">
      <Display
        actualNumber={displayValue}
        previousNumber={number}
        operator={operator}
      />

      <Button
        onClick={handleClearMemory}
        label="AC"
        triple
      />
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="/"
        operation
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="7"
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="8"
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="9"
      />
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="*"
        operation
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="4"
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="5"
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="6"
      />
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="-"
        operation
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="1"
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="2"
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="3"
      />
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="+"
        operation
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label="0"
        double
      />
      <Button
        label="."
        onClick={e => handleAddDigit(e.target.value)}
      />
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="="
        operation
      />
    </div>
  );
}