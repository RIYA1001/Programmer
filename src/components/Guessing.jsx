import { useState } from 'react';
import './Guessing.css';

function Guessing() {
  const [score, setScore] = useState(0);
  const [arrowPosition, setArrowPosition] = useState(-10);
  const [balloons, setBalloons] = useState([true, true, true]);

  const handleThrow = () => {
    const newArrowPosition = arrowPosition + 10; // Move the arrow 10px to the right
    setArrowPosition(newArrowPosition);

    // Check if arrow touches any balloon
    const touchedBalloonIndex = balloons.findIndex((balloon) => balloon && newArrowPosition >= 200); // Adjust this value depending on your layout
    if (touchedBalloonIndex !== -1) {
      const newBalloons = [...balloons];
      newBalloons[touchedBalloonIndex] = false;
      setBalloons(newBalloons);
      setScore(score + 10);
    }
  };

  const resetGame = () => {
    setScore(0);
    setArrowPosition(-10);
    setBalloons([true, true, true]);
  };

  return (
    <div className="Guessing">
      <h1>Dart Shooting Game</h1>
      <div className="game-container">
        <div className="balloon-container">
          {balloons.map((balloon, index) => (
            balloon && <div key={index} className="balloon"></div>
          ))}
        </div>
        <div className="arrow-container" style={{ left: arrowPosition }}>
          <div className="arrow"></div>
        </div>
      </div>
      <div className="controls">
        <p>Score: {score}</p>
        <button onClick={handleThrow}>Throw Arrow</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default Guessing;
