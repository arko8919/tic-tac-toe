import React from "react";
import { Link } from "react-router-dom";

import Board from "./Board";
import calculateWinner from "./calculateWinner";
import computerDecision from "./computerDecision";
import History from "./History";

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
            playerSymbol: "",
            stepNumber: 0,
        };

        this.opponent = this.props.opponent;

        this.handleJumpTo = this.handleJumpTo.bind(this);
        this.handleBackClick = this.handleBackClick(this);
    }

    componentDidMount() {
        let symbol;
        let playerSymbol;
        if (this.props.symbol === "X") {
            symbol = true;
            playerSymbol = "X";
        }
        if (this.props.symbol === "O") {
            symbol = false;
            playerSymbol = "O";
        }

        this.setState({
            xOnSquare: symbol,
            playerSymbol: playerSymbol,
        });
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

        let newSquares = [];

        // Assign an X or O to the square clicked depending on which player it's turn
        if (this.opponent === "friend") {
            squares[i] = this.state.xOnSquare ? "X" : "O";
            newSquares = squares;
        }

        if (this.opponent === "computer") {
            squares[i] = this.state.playerSymbol;
            const player = {
                man: this.state.playerSymbol,
                computer: this.state.playerSymbol === "X" ? "O" : "X",
            };

            newSquares = computerDecision(squares, player);
        }

        // If the player refreshes the page, it will set the setting to default, where X is a man and the opponent is a computer.
        if (this.opponent === null) {
            squares[i] = "X";
            const player = {
                man: "X",
                computer: "O",
            };
            newSquares = computerDecision(squares, player);
        }

        //  Creating a new history
        this.setState({
            history: history.concat([
                {
                    squares: newSquares,
                },
            ]),
            stepNumber: history.length,
            // Flip to determine which player goes next
            xOnSquare: !this.state.xOnSquare,
        });
    }

    // Jump to step in game we want to view
    handleJumpTo(step) {
        this.setState({
            stepNumber: step,
            xOnSquare: step % 2 === 0, // If true X, If false then O
        });
    }

    handleBackClick() {
        this.props.onBackClick();
    }
    render() {
        const history = this.state.history;
        // It assigns board from the history of moves based on the current step
        const current = history[this.state.stepNumber];

        return (
            <section
                as="main"
                className="main game d-flex flex-column align-items-center w-100"
            >
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onSquareClick={(i) => this.handleSquareClick(i)}
                    />
                </div>
                <History
                    history={history}
                    current={current}
                    xOnSquare={this.state.xOnSquare}
                    opponent={this.opponent}
                    onJumpTo={this.handleJumpTo}
                />
                <Link
                    to="/#"
                    className="btn btn-primary back-btn"
                    onClick={this.handleBackClick}
                >
                    Go Back
                </Link>
            </section>
        );
    }
}
