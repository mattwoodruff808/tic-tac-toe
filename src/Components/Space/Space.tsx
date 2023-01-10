import { MouseEventHandler } from "react";
import './Space.css';

interface SpaceProps {
  space: string;
  handleTurnFn: MouseEventHandler<HTMLDivElement>;
}

const Space = ({ space, handleTurnFn }: SpaceProps) => {
  return (
    <div className="space" onClick={handleTurnFn}>
      {space}
    </div>
  )
};

export default Space;
