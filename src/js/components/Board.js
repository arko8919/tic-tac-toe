import React from "react";
import Square from "./Square";

import "./board.scss";

export default class Board extends React.Component {
 
  // Creates square inside board
  renderSquare(i) {
    return (
      <Square
        // Passes the values to display in each square
        value={this.props.squares[i]}
        // Add onClick event listener to square
        onSquareClick={() => this.props.onSquareClick(i)}
      />
    );
  }

  render() {
    return (
      <>
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
