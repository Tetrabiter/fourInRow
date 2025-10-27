import { useState } from "react";
import { GeometricBackground } from "./Background";

type Player = "red" | "yellow" | null;

const Field = () => {
  const ROWS = 6;
  const COLS = 7;
  const [currentPlayer, setCurrentPlayer] = useState<"red" | "yellow">("red");
  const [grid, setGrid] = useState<Player[][]>(
    Array(ROWS)
      .fill(null)
      .map(() => Array(COLS).fill(null))
  );

  const dropPiece = (col: number) => {
    const newGrid = [...grid.map((row) => [...row])];

    // Находим первую пустую ячейку снизу в колонке
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newGrid[row][col]) {
        newGrid[row][col] = currentPlayer;
        setGrid(newGrid);
        setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
        break;
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-[12%]">
      <GeometricBackground />
      <div className="text-xl font-bold">
        Current Player:
        <span
          className={
            currentPlayer === "red" ? "text-red-500" : "text-yellow-500"
          }
        >
          {currentPlayer}
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1 w-fit bg-blue-600 p-3 rounded-lg shadow-xl">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`
                w-16 h-16 rounded-full border-2 border-blue-800
                flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:brightness-110
                ${
                  cell === "red"
                    ? "bg-red-500 shadow-lg"
                    : cell === "yellow"
                    ? "bg-yellow-400 shadow-lg"
                    : "bg-white hover:bg-gray-100"
                }
              `}
              onClick={() => dropPiece(colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Field;
