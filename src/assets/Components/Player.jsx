import { useState } from "react";

function Player({initialName, symbol}) {


  const [playerName, setPlayersName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevValue) => !prevValue);
  }

  function handleNameChange(e) {
    // console.log(e.target.value);
    setPlayersName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  let btnTitle = 'Edit';

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />
    btnTitle = 'Save';
  }

    return (
    <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span> 
        <button onClick={handleEditClick}>{btnTitle}</button>
    </li>
    )
}

export default Player;