import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

import "./optionsMenu.scss";

export default class OptionsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            computer: "",
            player: "",
            X: "",
            O: "",
        };

        this.handleComputerClick = this.handleComputerClick.bind(this);
        this.handlePlayerClick = this.handlePlayerClick.bind(this);
        this.handleXClick = this.handleXClick.bind(this);
        this.handleOClick = this.handleOClick.bind(this);
        this.handlePlayClick = this.handlePlayClick.bind(this);
    }

    handleComputerClick() {
        this.setState({
            computer: "active",
            player: "",
        });
        this.props.onComputerClick();
    }

    handlePlayerClick() {
        this.setState({
            computer: "",
            player: "active",
        });
        this.props.onPlayerClick();
    }

    handleXClick() {
        this.setState({
            X: "active",
            O: "",
        });
        this.props.onXClick();
    }

    handleOClick() {
        this.setState({
            X: "",
            O: "active",
        });
        this.props.onOClick();
    }

    handlePlayClick(event) {
        this.props.onPlayClick(event);
    }

    render() {
        return (
            <Container as="main" className="main">
                <Card className="menu">
                    <Card.Body>
                        <Card.Title as="h2">Play opponent</Card.Title>
                        <Button
                            variant="primary"
                            className={this.state.computer}
                            onClick={this.handleComputerClick}
                        >
                            Computer
                        </Button>
                        <Button
                            variant="primary"
                            className={this.state.player}
                            onClick={this.handlePlayerClick}
                        >
                            Player
                        </Button>
                    </Card.Body>
                    <Card.Body>
                        <Card.Title as="h2">Symbol</Card.Title>
                        <Button
                            variant="primary"
                            className={this.state.X}
                            onClick={this.handleXClick}
                        >
                            X
                        </Button>
                        <Button
                            variant="primary"
                            className={this.state.O}
                            onClick={this.handleOClick}
                        >
                            O
                        </Button>
                    </Card.Body>
                    <Card.Body className="play">
                        {this.props.errorProfile && (
                            <Alert variant="danger" className="alert">{this.props.errorProfile}</Alert>
                        )}
                        <Link
                            to="/game"
                            onClick={this.handlePlayClick}
                            className="btn btn-primary play-btn"
                        >
                            Play
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}
