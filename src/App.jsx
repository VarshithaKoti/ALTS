//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useState } from "react";
/*function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertical
        alignItems: "center", // horizontal
        height: "100vh", // full viewport height
        width: "100vw", // full viewport width
        backgroundColor: "#69e3eeff",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Click Counter App 🧮</h1>
      <h2 style={{ marginBottom: "20px" }}>Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;*/
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (!board.includes(null)) {
    status = "Draw!";
  } else {
    status = `Next Player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>

      <div className="board">
        {board.map((val, i) => (
          <Square key={i} value={val} onClick={() => handleClick(i)} />
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}