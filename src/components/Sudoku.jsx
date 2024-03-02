import { useState, useEffect } from 'react';
import './css/Sudoku.css';

const Sudoku = () => {
  const [puzzle, setPuzzle] = useState([]);

  useEffect(() => {
    generatePuzzle();
  }, []);

  const generatePuzzle = () => {
    // Simulate generating a random Sudoku puzzle
    const newPuzzle = [
      [5, 3, null, null, 7, null, null, null, null],
      [6, null, null, 1, 9, 5, null, null, null],
      [null, 9, 8, null, null, null, null, 6, null],
      [8, null, null, null, 6, null, null, null, 3],
      [4, null, null, 8, null, 3, null, null, 1],
      [7, null, null, null, 2, null, null, null, 6],
      [null, 6, null, null, null, null, 2, 8, null],
      [null, null, null, 4, 1, 9, null, null, 5],
      [null, null, null, null, 8, null, null, 7, 9]
    ];
    setPuzzle(newPuzzle);
  };

  const renderGrid = () => {
    return puzzle.map((row, rowIndex) => (
      <div key={rowIndex} className="flex">
        {row.map((cell, colIndex) => (
          <input
            key={colIndex}
            type="text"
            value={cell || ''}
            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
            className="cell"
            readOnly={cell !== null}
          />
        ))}
      </div>
    ));
  };

  const handleInputChange = (rowIndex, colIndex, value) => {
    const newPuzzle = [...puzzle];
    newPuzzle[rowIndex][colIndex] = value ? parseInt(value, 10) : null;
    setPuzzle(newPuzzle);
  };

  return <div className="grid my-28 mx-auto center p-2">{renderGrid()}</div>;
};

export default Sudoku;
