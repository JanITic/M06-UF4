// App.js
import { useState } from 'react'; // Import useState from React

import './App.css';
import Button from './Button.jsx';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const incrementNum = () => {
    setNumClicks(numClicks + 1);
    console.log("Incrementing the number of clicks...");
  };

  const resetNum = () => {
    setNumClicks(0);
    console.log("Resetting the number of clicks...");
  };

  return (
    <div className="container">
      <h1>Click Counter</h1>
      <p>Number of clicks: {numClicks}</p>
      <Button text="Click" onClick={incrementNum} />
      <Button text="Reset" onClick={resetNum} />
    </div>
  );
}

export default App;
