import './App.css';
import React from 'react';
import Calculator from './components/UI/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
