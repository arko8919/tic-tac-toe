import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        };

        this.handleComputerClick = this.handleComputerClick.bind(this);
        this.handlePlayerClick = this.handlePlayerClick.bind(this);
        this.handleXClick = this.handleXClick.bind(this);
        this.handleOClick = this.handleOClick.bind(this);
        this.handlePlayClick = this.handlePlayClick.bind(this);
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

    handlePlayClick(event) {
        if (this.state.opponent === null || this.state.symbol === null) {
            event.preventDefault();
        }
    }

    render() {
        const opponent = this.state.opponent;
        const symbol = this.state.symbol;

        return (
            <>
                <Header />

                <Router>
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
                                />
                            }
                        />
                        <Route
                            path="/game"
                            element={
                                <Game opponent={opponent} symbol={symbol} />
                            }
                        />
                    </Routes>
                </Router>

                <Footer />
            </>
        );
    }
}
