import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Form from "./Form";
import Post from "./Post";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/:item_id" component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
