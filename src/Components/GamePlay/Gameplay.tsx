import Space from '../Space/Space';
import './Gameplay.css';

interface GamePlayProps {
  spaces: string[];
  handleTurnFn: Function;
}

const Gameplay = ({ spaces, handleTurnFn }: GamePlayProps) => {
  return (
    <div className='game-play'>
      {spaces.map((space, i) => {
        return <Space 
                  key={i}
                  space={space}
                  handleTurnFn={() => handleTurnFn(i)} 
                />
      })}
    </div>
  )
};

export default Gameplay;
