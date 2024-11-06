import React, {useState} from 'react';
import './App.css';


function App() {

  const [counterValue, setCounterValue] = useState(0);

  function onclick() {
    setCounterValue(counterValue + 1);
  }

  return (
    <div id='app'>
      <h1 className='circle' onClick={onclick}>{counterValue}</h1>
    </div>
  );
}


export default App;
