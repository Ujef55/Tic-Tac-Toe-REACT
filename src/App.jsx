import { useState } from "react";

import Player from "./assets/Components/Player";
import GameBoard from "./assets/Components/GameBoard";
import Log from "./assets/Components/Log";

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
       currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSwitchTurn(rowIndex, colIndex) {
    // setActivePlayer((prevState) => (prevState === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square: { row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns]

        return updatedTurns;
    } );

    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol> 
        <GameBoard onSelectSquare={handleSwitchTurn} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App;
