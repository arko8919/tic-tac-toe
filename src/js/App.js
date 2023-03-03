import React from "react";

import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import OptionsMenu from "./components/OptionsMenu";
import Game from "./components/Game";

import "./App.scss";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opponent: null, // Computer or Friend
            symbol: null, // true is X, false is O
            errorProfile: "", //
        };

        this.handleComputerClick = this.handleComputerClick.bind(this);
        this.handlePlayerClick = this.handlePlayerClick.bind(this);
        this.handleXClick = this.handleXClick.bind(this);
        this.handleOClick = this.handleOClick.bind(this);
        this.handlePlayClick = this.handlePlayClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleComputerClick() {
        this.setState({
            opponent: "computer",
        });
    }

    handlePlayerClick() {
        this.setState({
            opponent: "friend",
        });
    }

    handleXClick() {
        this.setState({
            symbol: "X",
        });
    }

    handleOClick() {
        this.setState({
            symbol: "O",
        });
    }

    // Check if player selected at least one opponent and symbol
    handlePlayClick(event) {
        if (this.state.opponent === null && this.state.symbol === null) {
            event.preventDefault();
            // Set an alert if the player didn't select options from the menu
            this.setState({
                errorProfile: "Choose opponent and symbol!",
            });
        } else if (this.state.symbol === null) {
            event.preventDefault();
            this.setState({
                errorProfile: "Choose symbol!",
            });
        } else if (this.state.opponent === null) {
            event.preventDefault();
            this.setState({
                errorProfile: "Choose opponent!",
            });
        } else {
            this.setState({
                errorProfile: "",
            });
        }
    }

    // Reset values when the player goes back to the options menu
    handleBackClick() {
        this.setState({
            opponent: null,
            symbol: null,
        });
    }

    render() {
        const opponent = this.state.opponent;
        const symbol = this.state.symbol;

        return (
            <>
                <Header />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <OptionsMenu
                                onComputerClick={this.handleComputerClick}
                                onPlayerClick={this.handlePlayerClick}
                                onXClick={this.handleXClick}
                                onOClick={this.handleOClick}
                                onPlayClick={this.handlePlayClick}
                                errorProfile={this.state.errorProfile}
                            />
                        }
                    />
                    <Route
                        path="/game"
                        element={
                            <Game
                                opponent={opponent}
                                symbol={symbol}
                                onBackClick={this.handleBackClick}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </>
        );
    }
}
