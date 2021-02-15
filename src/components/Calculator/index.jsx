import React, { useState } from 'react';

import Display from '../Display';
import Button from '../Button';
import calculate from '../../utils/calculate';
import deleteIcon from '../../assets/icons/delete-icon.svg';

import './styles.css';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [number, setNumber] = useState();
  const [operator, setOperator] = useState('');

  function handleClearMemory() {
    setNumber();
    setOperator('');
    setDisplayValue('0');
  }

  function handleSetOperation(operation) {
    if(operation === '=' && operator) {
      const result = calculate(number, operator, displayValue);

      setNumber(`${number} ${operator} ${displayValue}`);
      setOperator('');

      if(result.toString().includes('.') && result.toString().split('.')[1].length > 8) {
        return setDisplayValue(Number(result).toFixed(8).toString());
      }

      return setDisplayValue(result.toString());
    }

    if(operation === 'delete') {
      if(displayValue.length>1) {
        return setDisplayValue(displayValue.substr(0, displayValue.length-1));
      }

      return setDisplayValue('0');
    }

    if(!operator && operation === '=') {
      return;
    }

    if(operator && displayValue !== '0') {
      const result = calculate(number, operator, displayValue);

      if(result.toString().includes('.') && result.toString().split('.')[1].length > 8) {
        return setNumber(Number(result.toFixed(8)).toString());
      }

      setOperator(operation);
      setDisplayValue('0');
      return setNumber(result.toString());
    }

    setOperator(operation);

    if(displayValue !== '0') {
      setNumber(displayValue);
    }

    return setDisplayValue('0');
  }

  function handleAddDigit(number) {
    if(number === '.' && displayValue.toString().includes('.')) {
      return;
    }

    if(displayValue === '0' && number === 0) {
      return;
    }

    if(displayValue === '0' && number !== '.') {
      return setDisplayValue(Number(number));
    }

    if(number === '.') {
      return setDisplayValue(displayValue + number.toString());
    }

    return setDisplayValue(displayValue + number.toString());
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
        double
      />
      <Button
        onClick={e => handleSetOperation(e.target.alt)}
        label="delete"
        img="deleteIcon"
        operation
      >
        <img src={deleteIcon} alt="delete"/>
      </Button>
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="/"
        operation
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={7}
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={8}
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={9}
      />
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="*"
        operation
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={4}
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={5}
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={6}
      />
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="-"
        operation
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={1}
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={2}
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={3}
      />
      <Button
        onClick={e => handleSetOperation(e.target.value)}
        label="+"
        operation
      />
      <Button
        onClick={e => handleAddDigit(e.target.value)}
        label={0}
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
