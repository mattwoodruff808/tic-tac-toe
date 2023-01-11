import './Space.css';

interface SpaceProps {
    boardIndex: number;
    space: string;
    handleTurnFn: Function;
}

const Space = ({ boardIndex, space, handleTurnFn }: SpaceProps) => {
    return (
        <div className="space" onClick={() => handleTurnFn(boardIndex)}>
            {space}
        </div>
    );
};

export default Space;
