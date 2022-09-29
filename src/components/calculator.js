import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import './calculator.css';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    operation: null,
    next: null,
    error: null,
  });

  const functionClick = (event) => {
    setState((prevState) => calculate(prevState, event.target.textContent));
  };

  return (
    <div className="calculator-container">
      <div className="screen">
        { state.total }
        { state.operation }
        { state.next }
        { state.error }
      </div>
      <div className="buttons-group">
        <Button buttonText="AC" handleClick={functionClick} />
        <Button buttonText="+/-" handleClick={functionClick} />
        <Button buttonText="%" handleClick={functionClick} />
        <Button buttonText="/" handleClick={functionClick} isOperator />
        <Button buttonText="7" handleClick={functionClick} />
        <Button buttonText="8" handleClick={functionClick} />
        <Button buttonText="9" handleClick={functionClick} />
        <Button buttonText="x" handleClick={functionClick} isOperator />
        <Button buttonText="4" handleClick={functionClick} />
        <Button buttonText="5" handleClick={functionClick} />
        <Button buttonText="6" handleClick={functionClick} />
        <Button buttonText="+" handleClick={functionClick} isOperator />
        <Button buttonText="1" handleClick={functionClick} />
        <Button buttonText="2" handleClick={functionClick} />
        <Button buttonText="3" handleClick={functionClick} />
        <Button buttonText="-" handleClick={functionClick} isOperator />
      </div>
      <div className="bottom-group">
        <Button buttonText="0" handleClick={functionClick} />
        <Button buttonText="." handleClick={functionClick} />
        <Button buttonText="=" handleClick={functionClick} isOperator />
      </div>
    </div>
  );
}

export default Calculator;
