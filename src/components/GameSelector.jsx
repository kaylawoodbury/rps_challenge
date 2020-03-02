import React from "react";

const GameOption = ({selection}) => {
  return (
    <div id="GameOptions">
      <img src={selection.image} target="_blank"></img>
      <h2>{selection.option}</h2>
      <button>{selection.play}</button>
    </div>
  );
};
export default GameOption;