import { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="App">
      <p>Number of clicks: {clicks} </p>
      <button type="button" onClick={() => setClicks(clicks + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
