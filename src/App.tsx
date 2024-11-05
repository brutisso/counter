import React, {useState} from 'react';
import './App.css';


function App() {

  const [counterValue, setCounterValue] = useState(0);

  function onclick() {
    setCounterValue(counterValue + 1);
  }

  return (
    <div id='app'>
      <h1 id="countText">{counterValue}</h1>
      <div className="card">
        <button id="counter" type="button" onClick={onclick}>Räkna</button>
      </div>
    </div>
  );
}


export default App;
