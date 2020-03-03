import React from 'react';
import rock from './data/images/rock.png'
import paper from './data/images/paper.png'
import scissors from './data/images/scissors.png'


function App() {
  return (
    <div className="App">
      <h2>Play Rock Paper Scissors</h2>
      <h3>Select your choice from the options below:</h3>
      <div id="playoptions">
        <div id="rockcontainer">
          <h3 id="rock">Rock</h3>
          <img src={rock} id="rockimg"/>
          <button id="rockbutton">Play w/ Rock</button>
        </div>
        <div id="papercontainer">
          <h3 id="paper">Paper</h3>
          <img src={paper} id="paperimg"/>
          <button id="paperbutton">Play w/ Paper</button>
        </div>
        <div id="scissorscontainer">
          <h3 id="scissors">Scissors</h3>
          <img src={scissors} id="scissorsimg"/>
          <button id="scissorbutton">Play w/ Scissors</button>
        </div>
      </div>
    </div>
  );
}

export default App;
