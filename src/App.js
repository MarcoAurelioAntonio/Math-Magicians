import './App.css';
import Names from './components/names';

function App() {
  return (
    <div className="App">
      <Names name="Gustavo" />
      <Names name="Ariel" />
      <Names name="Porcilio" />
      <Names age={41} />
    </div>
  );
}

export default App;
