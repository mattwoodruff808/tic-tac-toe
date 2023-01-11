import './Score.css';

interface ScoreProps {
    winHistory: string[];
}

const Score = ({ winHistory }: ScoreProps) => {
    console.log(winHistory);
    return (
        <div className="score">
            <h2>Game Score</h2>
            <div className="scores-container">
                <div>
                    <p>X Total</p>
                    <span>
                        {winHistory.reduce(
                            (prev, curr) => prev + (curr === 'X' ? 1 : 0),
                            0
                        )}
                    </span>
                </div>
                <div>
                    <p>O Total</p>
                    <span>
                        {winHistory.reduce(
                            (prev, curr) => prev + (curr === 'O' ? 1 : 0),
                            0
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Score;
