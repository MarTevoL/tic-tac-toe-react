import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick, winarray }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square
            winLine={winarray.includes(0)}
            value={squares[0]}
            handleClick={() => handleClick(0)}
          />
          <Square
            winLine={winarray.includes(1)}
            value={squares[1]}
            handleClick={() => handleClick(1)}
          />
          <Square
            winLine={winarray.includes(2)}
            value={squares[2]}
            handleClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row">
          <Square
            winLine={winarray.includes(3)}
            value={squares[3]}
            handleClick={() => handleClick(3)}
          />
          <Square
            winLine={winarray.includes(4)}
            value={squares[4]}
            handleClick={() => handleClick(4)}
          />
          <Square
            winLine={winarray.includes(5)}
            value={squares[5]}
            handleClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row">
          <Square
            winLine={winarray.includes(6)}
            value={squares[6]}
            handleClick={() => handleClick(6)}
          />
          <Square
            winLine={winarray.includes(7)}
            value={squares[7]}
            handleClick={() => handleClick(7)}
          />
          <Square
            winLine={winarray.includes(8)}
            value={squares[8]}
            handleClick={() => handleClick(8)}
          />
        </div>
      </div>
    </div>
  );
}
