import React from "react";

function History({ history, jumpToHistory }) {
  return (
    <>
      <h2>History</h2>
      <p>Go to step:</p>
      <div className="history">
        {history.map((_, index) => {
          return (
            <button key={index} onClick={() => jumpToHistory(index)}>
              {index ? `${index}` : "Start"}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default History;
