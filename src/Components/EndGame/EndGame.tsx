import { MouseEventHandler } from "react";
import './EndGame.css';

interface EndGameProps {
  result: string;
  handleResetFn: MouseEventHandler<HTMLButtonElement>;
}

const EndGame = ({ result, handleResetFn }: EndGameProps) => {
  return (
    <>
      <div>
        {result === 'tie' 
          ? 
          (
            <h3>It is a {result}!</h3>
          )
          : 
          (
            <h3>{result} has won this game!</h3>
          )}
      </div>
      <button onClick={handleResetFn}>Play Again</button>
    </>
  )
};

export default EndGame;
