export default function GameIntro() {
  return (
      <section>
        <p>
          You probably already know how to play Tic-Tac-Toe. It's a really
          simple game, right? That's what most people think. But if you really
          wrap your brain around it, you'll discover that Tic-Tac-Toe isn't
          quite as simple as you think!
        </p>
        <h2>Game rules</h2>
        <ol>
          <li>The game is played on a grid that's 3 squares by 3 squares.</li>
          <li>
            You are <strong>X</strong>, your friend is <strong>O</strong>. Players take turns putting their marks
            in empty squares.
          </li>
          <li>
            The first player to get 3 of her marks in a row &#40;up, down, across,
            or diagonally&#41; is the winner.
          </li>
          <li>
            When all 9 squares are full, the game is over. If no player has 3
            marks in a row, the game ends in a tie.
          </li>
        </ol>
      </section>
  )
}
