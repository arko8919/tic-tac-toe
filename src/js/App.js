import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
