import React, { useState } from "react";
import Grid from "./grid";
import "./index.css";

function App() {
  const initialGrid = Array(4)
    .fill(null)
    .map(() => Array(4).fill(false));

  const [grid, setGrid] = useState(initialGrid);

  const toggleCell = (rowIndex, colIndex) => {
    const newGrid = grid.map((row, r) =>
      row.map((cell, c) => (r === rowIndex && c === colIndex ? !cell : cell))
    );
    setGrid(newGrid);
  };

  const rotateGrid = () => {
    const newGrid = grid[0].map((_, i) =>
      grid.map((row) => row[i]).reverse()
    );
    setGrid(newGrid);
  };

  return (
    <div className="app">
      <h1>4x4 Grid</h1>
      <Grid grid={grid} onCellClick={toggleCell} />
      <button onClick={rotateGrid} className="rotate-btn">Rotate 🔄</button>
    </div>
  );
}

export default App;
