import './App.css';
import React, { useState } from 'react';
import Button from './components/UI/Calculator';
import calculate from './logic/calculate';

function App() {
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
    <div className="App">
      <div className="in">
        { state.total }
        { state.operation }
        { state.next }
        { state.error }
      </div>
      <div>
        <Button buttonText="AC" handleClick={functionClick} />
        <Button buttonText="-/+" handleClick={functionClick} />
        <Button buttonText="%" handleClick={functionClick} />
        <Button buttonText="+" handleClick={functionClick} />
      </div>
      <div>
        <Button buttonText="0" handleClick={functionClick} />
        <Button buttonText="1" handleClick={functionClick} />
        <Button buttonText="2" handleClick={functionClick} />
        <Button buttonText="3" handleClick={functionClick} />
        <Button buttonText="4" handleClick={functionClick} />
        <Button buttonText="5" handleClick={functionClick} />
        <Button buttonText="6" handleClick={functionClick} />
        <Button buttonText="7" handleClick={functionClick} />
        <Button buttonText="8" handleClick={functionClick} />
        <Button buttonText="9" handleClick={functionClick} />
      </div>
      <div>
        <Button buttonText="=" handleClick={functionClick} />
      </div>
    </div>
  );
}

export default App;
