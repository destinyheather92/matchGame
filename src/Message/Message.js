import React from "react";


export default function Message({ message, matches, totalMatches, funct }) {
  return (
    <div id="message">
      <p>
        {message}! You found {matches} out of {totalMatches} matches
      </p>
      <button id="newGameButton" onClick={funct}>
        New Game
      </button>
    </div>
  );
}
