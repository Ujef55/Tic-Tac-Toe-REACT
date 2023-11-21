function GameOver( {winner, reset} ) {
    return (
        <div id="game-over">
            <h2>GAME OVER!</h2>
            {winner && <p>{winner}, WON!</p>}
            {!winner && <p>IT'S A DRAW!</p>}
            <p>
                <button onClick={reset}>REMATCH!</button>
            </p>
        </div>
    )
}

export default GameOver;