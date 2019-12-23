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

  handleFormSubmit = () => {
    console.log("handleFormSubmit");
  };

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <div className="container">
          <Input
            type={"email"}
            title={"email"}
            name={"Email"}
            value={this.state.email}
            handleChange={this.handleInput}
            placeHolder={"example@email.com"}
          />
          <Button
            style={buttonStyle}
            type={"primary"}
            title={"Login"}
            action={this.handleFormSubmit}
          />
        </div>
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default LoginContainer;
