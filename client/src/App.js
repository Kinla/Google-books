import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/index"
import Footer from "./components/Footer"
import Search from "./pages/Search"
import Saved from "./pages/Saved/index"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/saved" component={Saved}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
