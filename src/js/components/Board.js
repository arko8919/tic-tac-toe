import React from "react";
import Square from "./Square";

import "./board.scss";
import calculateWinner from "./calculateWinner";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xOnSquare: true,
    };
  }

  handleSquareClick(i) {
    // Create a copy of the squares array
    const squares = this.state.squares.slice();

    // If someone won the game or if a Square is already filled, ignore click on button
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Assign an X or O to the square clicked depending on which player it's turn
    squares[i] = this.state.xOnSquare ? "X" : "O";

    this.setState({
      squares: squares,
      // Flip to determine which player goes next
      xOnSquare: !this.state.xOnSquare,
    });
  }

  // Creates square inside board
  renderSquare(i) {
    return (
      <Square
        // Passes the values to display in each square
        value={this.state.squares[i]}
        // Add onClick event listener to square
        onSquareClick={() => this.handleSquareClick(i)}
      />
    );
  }

  render() {
    // Function will check for a winner and return 'X', 'O', or null as appropriate
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner is ${winner}`;
    } else {
      status = `Next player is ${this.state.xOnSquare ? "x" : "O"}`;
    }

    return (
      <>
        <div className="status">{status}</div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    );
  }
}
