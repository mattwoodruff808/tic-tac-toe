import { useState } from 'react';
import calculateWinner from './utils/gameUtils';
import Gameplay from './Components/GamePlay/Gameplay';
import './App.css';

function App() {
  const [spaces, setSpaces] = useState(Array(9).fill(''));
  const [gameStep, setGameStep] = useState(0);
  const [x, setX] = useState(true);
  const winner = calculateWinner(spaces);

  const handleTurn = (selectedIndex: number): void => {
    if (spaces[selectedIndex] || winner) {
      return;
    }

    const player = x ? 'X' : 'O';
    setSpaces(spaces.map((space, i) => i === selectedIndex ? player : space));
    setGameStep(gameStep + 1);
    setX(!x);
  };

  return (
    <div className="App">
      <Gameplay 
        spaces={spaces}
        handleTurnFn={handleTurn} 
      />
      {winner && `${winner} has won!!`}
    </div>
  );
}

export default App;
