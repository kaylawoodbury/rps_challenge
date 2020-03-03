import React, { Component } from "react";
import GameOption from "./GameSelector";

class GameSelection extends Component {
  state = {
    
  };

  render() {
    const selection = this.state.selection;
    let selectionList;

    if (selection.length > 0) {
      selectionList = selection.map(selection => {
        return (
          <div id={'selection-' + selection.id} key={selection.id}>
            <GameOption selection={selection} />
          </div>
        );
      });
    }

    return (
      <div id='SelectionContainer'> 
      <div>     
        
        <div id='OptionContainer'>{selectionList}</div>
        </div> 
      </div>
    );
  }
}

export default GameSelection;