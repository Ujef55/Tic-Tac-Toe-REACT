import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard() {

    const[GameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map((innerElement) => [...innerElement])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        });
    }


    return (
       <ol id="game-board">
            {GameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
                ))}
            </ol>
            </li> )}
       </ol>
    )
}

export default GameBoard;