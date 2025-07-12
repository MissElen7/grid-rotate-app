import React from "react";

function Grid({ grid, onCellClick }) {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell ? "active" : ""}`}
            onClick={() => onCellClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
}

export default Grid;

