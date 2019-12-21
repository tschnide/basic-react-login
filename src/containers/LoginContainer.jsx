import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <div className="container">
        <Input />
        <Button />
      </div>
    );
  }
}

export default LoginContainer;
