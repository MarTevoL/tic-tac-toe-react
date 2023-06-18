import React from "react";

function Square({ value, handleClick, winLine }) {
  return (
    <button
      style={winLine ? { background: "yellow" } : { background: "white" }}
      className={"square"}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Square;
