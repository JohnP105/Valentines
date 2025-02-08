import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const checkWinner = (board: (string | null)[]): string | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner: string | null = checkWinner(board);

  const handleClick = (index: number): void => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">
        Valentine's Tic-Tac-Toe
      </h1>
      <div className="grid grid-cols-3 gap-2 bg-pink-300 p-4 rounded-xl shadow-lg">
        {board.map((cell, index) => (
          <button
            key={index}
            className="w-20 h-20 text-3xl font-bold text-pink-800 bg-pink-100 rounded-xl flex items-center justify-center shadow-md"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      {winner && (
        <p className="mt-4 text-xl font-bold text-pink-900">
          Winner: {winner}!
        </p>
      )}
      {/* <Button
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white"
        onClick={resetGame}
      >
        Reset Game
      </Button> */}
    </div>
  );
}

export default App;
