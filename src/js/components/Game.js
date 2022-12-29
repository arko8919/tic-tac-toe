import React from "react";
import Board from "./Board";

import "./game.scss"

export default class Game extends React.Component {
  render() {
    const status = 'Next player: X';

    return (
      <section className="game d-flex flex-row">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </section>
    )
  }
}
