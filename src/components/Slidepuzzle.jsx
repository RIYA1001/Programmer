import { useState, useEffect } from 'react';
import './css/Slidepuzzle.css';

const Guessing = () => {
  const [tiles, setTiles] = useState([]);
  const size = 3;

  useEffect(() => {
    initializeTiles();
  }, []);

  const initializeTiles = () => {
    const initialTiles = Array.from({ length: size * size }, (_, index) => index + 1);
    initialTiles[size * size - 1] = null;
    setTiles(shuffleTiles(initialTiles));
  };

  const shuffleTiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleTileClick = (index) => {
    const emptyIndex = tiles.indexOf(null);
    if (isMoveValid(index, emptyIndex)) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
      checkForWin(newTiles);
    }
  };

  const isMoveValid = (clickedIndex, emptyIndex) => {
    const rowClicked = Math.floor(clickedIndex / size);
    const colClicked = clickedIndex % size;
    const rowEmpty = Math.floor(emptyIndex / size);
    const colEmpty = emptyIndex % size;

    return (
      (rowClicked === rowEmpty && Math.abs(colClicked - colEmpty) === 1) ||
      (colClicked === colEmpty && Math.abs(rowClicked - rowEmpty) === 1)
    );
  };

  const checkForWin = (currentTiles) => {
    const isWin = currentTiles.every((value, index) => value === (index + 1) % (size * size)) && currentTiles[size * size - 1] === null;
    if (isWin) {
      alert('Congratulations! You solved the puzzle!');
      initializeTiles();
    }
  };

  const renderTiles = () => {
    return tiles.map((value, index) => (
      <div
        key={index}
        className={`tile ${value === null ? 'empty' : ''}`}
        onClick={() => handleTileClick(index)}
      >
        {value}
      </div>
    ));
  };

  return <div className="text-center my-28">

    <h1 className="text-3xl font-bold">Welcome to Slide Puzzle Game</h1>
    <div className="puzzle my-10">
      {renderTiles()}
    </div>
  </div>
};

export default Guessing;
