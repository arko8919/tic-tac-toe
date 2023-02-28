import isTie from "./isTie";
import calculateWinner from "./calculateWinner";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

export default class History extends React.Component {
    constructor(props) {
        super(props);

        this.handleJumpTo = this.handleJumpTo.bind(this);
    }

    handleJumpTo(move) {
        this.props.onJumpTo(move);
    }

    render() {
        // Check for a winner and return 'X', 'O', or null as appropriate
        const winner = calculateWinner(this.props.current.squares);
        // Check for a tie
        const tie = isTie(this.props.current.squares);

        // Render buttons representing each move
        const moves = this.props.history.map((step, move) => {
            const desc = move ? `Go to move ${move}` : "Go to game start";
            return (
                <li key={move}>
                    <Button
                        variant="secondary"
                        onClick={() => this.handleJumpTo(move)}
                    >
                        {desc}
                    </Button>
                </li>
            );
        });

        let status = "Your move ...";

        if (winner) {
            status = `Winner is ${winner}`;
        } else if (tie) {
            status = `There is a tie`;
        } else {
            if (this.props.opponent !== "computer") {
                status = `Next player is ${this.props.xOnSquare ? "X" : "O"}`;
            }
        }

        return (
            <>
                <h2 className="status">{status}</h2>
                <Card className="history">
                    <Card.Body>
                        <Card.Title>Moves history: </Card.Title>
                        <ol className="d-flex flex-row flex-wrap">{moves}</ol>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
