import { useState, useEffect, useRef } from 'react';
import { calculateWinner, getHistory, saveHistory } from './utils/gameUtils';
import Score from './Components/Score/Score';
import Gameplay from './Components/GamePlay/Gameplay';
import EndGame from './Components/EndGame/EndGame';
import './App.css';

function App() {
	const [spaces, setSpaces] = useState(Array(9).fill(''));
	const [gameStep, setGameStep] = useState(0);
	const [x, setX] = useState(true);
	const winner = calculateWinner(spaces);
	const localHistory = getHistory();
	const [winHistory, setWinHistory] = useState(localHistory);
	const historyChanged = useRef(false);

	useEffect(() => {
		if (winner && !historyChanged.current) {
			const history = [...winHistory, winner];
			saveHistory(history);
			setWinHistory(history);
			historyChanged.current = true;
		}
	}, [winner, winHistory]);

	const handleTurn = (selectedIndex: number): void => {
		if (spaces[selectedIndex]) {
			return;
		}

		const player = x ? 'X' : 'O';
		setSpaces(
			spaces.map((space, i) => (i === selectedIndex ? player : space))
		);
		setGameStep(gameStep + 1);
		setX(!x);
	};

	const handleReset = (): void => {
		setSpaces(Array(9).fill(''));
		setGameStep(0);
		setX(true);
		historyChanged.current = false;
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
