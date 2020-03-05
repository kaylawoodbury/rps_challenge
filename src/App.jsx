import React, { Component } from 'react';
import rock from './data/images/rock.png'
import paper from './data/images/paper.png'
import scissors from './data/images/scissors.png'
import {computerSelection, game, gameTally } from './modules/gameLogic'


class App extends Component {
	state = {
		playerChoice: '',
		computerChoice: '',
    results: false,
    playerTally: 0,
    computerTally: 0
  }
  
  async handleButtonClick(event) {
		let player = event.target.name
    let computer = computerSelection()
    let results = await game(player, computer);
		this.setState({ playerChoice: player, computerChoice: computer, results: results})
	}

  render() {
    return (
      <div className="App">
        <h2>Play Rock Paper Scissors</h2>
        <h3>Select your choice from the options below:</h3>
        <div id="playoptions">
          <div id="rockcontainer">
            <h3 id="rock">Rock</h3>
            <img src={rock} id="rockimg"/>
            <button id="rockbutton" onClick={event => this.handleButtonClick(event)}>Play w/ Rock</button>
          </div>
          <div id="papercontainer">
            <h3 id="paper">Paper</h3>
            <img src={paper} id="paperimg"/>
            <button id="paperbutton" onClick={event => this.handleButtonClick(event)}>Play w/ Paper</button>
          </div>
          <div id="scissorscontainer">
            <h3 id="scissors">Scissors</h3>
            <img src={scissors} id="scissorsimg"/>
            <button id="scissorbutton" onClick={event => this.handleButtonClick(event)}>Play w/ Scissors</button>
          </div>
        </div><br/><br/><br/>
        <div id="results">
          <h2>Result:</h2><br/>
          <h3>Your choice:  Computer Choice:</h3>
          <h3>{this.state.results}</h3>
          
        </div>
      </div>
    );
  }
}

export default App;
