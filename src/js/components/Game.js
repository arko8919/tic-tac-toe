import React from "react";
import Board from "./Board";
import calculateWinner from "./calculateWinner";

import "./game.scss";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xOnSquare: true,
      stepNumber: 0,
    };
  }

  handleSquareClick(i) {
    // We using slice method on history to make sure that if we go back in time
    // and then make a new move from that point, we throw away all the future history
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // Most recent history of game
    const current = history[history.length - 1];

    // Create a copy of the squares array
    const squares = current.squares.slice();

    // If someone won the game or if a Square is already filled, ignore click on button
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Assign an X or O to the square clicked depending on which player it's turn
    squares[i] = this.state.xOnSquare ? "X" : "O";

    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      // Flip to determine which player goes next
      xOnSquare: !this.state.xOnSquare,
    });
  }

  // Jump to step in game we want to view
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xOnSquare: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    // Render currently selected move
    const current = history[this.state.stepNumber];
    // Function will check for a winner and return 'X', 'O', or null as appropriate
    const winner = calculateWinner(current.squares);

    // Render buttons representing each move
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move ${move}` : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner is ${winner}`;
    } else {
      status = `Next player is ${this.state.xOnSquare ? "X" : "O"}`;
    }
    return (
      <section className="game d-flex flex-row">
        <div className="game-board">
          <Board
            squares={current.squares}
            onSquareClick={(i) => this.handleSquareClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </section>
    );
  }
}
