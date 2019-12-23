import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoginContainer from "./containers/LoginContainer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <LoginContainer />
      </div>
    );
}
}

ReactDOM.render(<App />, document.getElementById("root"));
