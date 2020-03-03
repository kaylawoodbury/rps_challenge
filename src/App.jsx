import React from 'react';
import Option from "./DisplayGameOptions";


function App() {
  return (
    <div className="App">
      <h2>Play Rock Paper Scissors</h2>
      <h3>Select your choice from the options below:</h3>
      {Option}
    </div>
  );
}

export default App;
