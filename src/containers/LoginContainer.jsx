import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = () => {
    console.log("handleChange");
  };

  render() {
    return (
      <div className="container">
        <Input
          type={"email"}
          title={"email"}
          name={"email"}
          value={this.state.email}
          handleChange={this.handleInput}
          placeHolder={"example@email.com"}
        />
        <Button />
      </div>
    );
  }
}

export default LoginContainer;
