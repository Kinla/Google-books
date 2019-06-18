import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Search from "./pages/Search"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Search />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
