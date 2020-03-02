import React, { Component } from "react";
import axios from "axios";
import GameOption from "./GameSelector";

class GameSelection extends Component {
  state = {
    
  };

  componentDidMount() {
    axios.get('./src/data/options.json')
      .then(response => {
        this.setState({
          selection: response.data
        })
      })
  };

  render() {
    const selection = this.state.selection;
    let selectionList;

    if (projects.length > 0) {
      selectionList = selection.map(selection => {
        return (
          <div id={'selection-' + selection.id} key={selection.id}>
            <GameOption selection={selection} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container"> 
      <div>     
        
        <div className="ui stackable four column grid">{selectionList}</div>
        </div> 
      </div>
    );
  }
}

export default GameSelection;