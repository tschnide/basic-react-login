import React, { Component } from "react";
import LoginContainer from "../containers/LoginContainer";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/" component={LoginContainer}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
