import { useState } from 'react';
import calculateWinner from './utils/gameUtils';
import Score from './Components/Score/Score';
import Gameplay from './Components/GamePlay/Gameplay';
import EndGame from './Components/EndGame/EndGame';
import './App.css';

function App() {
    const [spaces, setSpaces] = useState(Array(9).fill(''));
    const [gameStep, setGameStep] = useState(0);
    const [x, setX] = useState(true);
    const winner = calculateWinner(spaces);
    const [winHistory, setWinHistory] = useState(['']);

    const handleTurn = (selectedIndex: number): void => {
        if (spaces[selectedIndex] || winner) {
            return;
        }

        const player = x ? 'X' : 'O';
        setSpaces(
            spaces.map((space, i) => (i === selectedIndex ? player : space))
        );
        setGameStep(gameStep + 1);
        setX(!x);
    };

    const handleReset = () => {
        if (winner) {
            setWinHistory([...winHistory, winner]);
        }
        setSpaces(Array(9).fill(''));
        setGameStep(0);
        setX(true);
    };

    return (
        <div className="App">
            <h1>Tic-Tac-Toe</h1>
            <div className="main-content">
                <Score winHistory={winHistory} />
                <div className="interactive">
                    <Gameplay spaces={spaces} handleTurnFn={handleTurn} />
                    {winner && (
                        <EndGame result={winner} handleResetFn={handleReset} />
                    )}
                    {gameStep === 9 && !winner && (
                        <EndGame result={'tie'} handleResetFn={handleReset} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
