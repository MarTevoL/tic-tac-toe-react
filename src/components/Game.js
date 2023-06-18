import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [step, setStep] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner(history[history.length - 1].squares));
  }, [history]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    const arrayHistory = history.slice(0, step + 1);
    const elementHistory = arrayHistory[arrayHistory.length - 1];
    const inputSquares = [...elementHistory.squares];

    if (!calculateWinner(inputSquares) && !inputSquares[i]) {
      inputSquares[i] = xIsNext ? "X" : "O";
      setHistory([...arrayHistory, ...[{ squares: inputSquares }]]);
      setStep(arrayHistory.length);
      setXIsNext(!xIsNext);
    }
  };

  //Restart game
  const handleRestart = () => {
    setStep(0);
    setHistory([
      {
        squares: Array(9).fill(null),
      },
    ]);
    setXIsNext(true);
  };

  const jumpToHistory = (step) => {
    setStep(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
      <div className="game">
        <Board squares={history[step].squares} handleClick={handleClick} />
        <History history={history} jumpToHistory={jumpToHistory} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
