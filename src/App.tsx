import { useState } from 'react';
import Gameplay from './Components/GamePlay/Gameplay';
import './App.css';

function App() {
  const [spaces, setSpaces] = useState(Array(9).fill(''));
  const [gameStep, setGameStep] = useState(0);
  const [x, setX] = useState(true);

  const handleTurn = (selectedIndex: number): void => {
    if (spaces[selectedIndex]) {
      return;
    }

    const player = x ? 'X' : 'O';
    setSpaces(spaces.map((space, i) => i === selectedIndex ? player : space));
    setGameStep(gameStep + 1);
    setX(!x);
  };

  console.log(gameStep);
  console.log(x);
  console.log(spaces);
  return (
    <div className="App">
      <Gameplay 
        spaces={spaces}
        handleTurnFn={handleTurn} 
      />
    </div>
  );
}

export default App;
