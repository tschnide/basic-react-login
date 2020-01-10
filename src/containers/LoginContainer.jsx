import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  };

  // if the email and pass are correct, add /home to the url
  handleFormSubmit = event => {
    event.preventDefault();
    const loginIsSuccessfull =
      this.state.email === "t@gmail.com" && this.state.password === "pass"
        ? this.props.history.push("/home")
        : "false";
  };

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <div className="container">
          <Input
            type={"email"}
            title={"email"}
            name={"email"}
            value={this.state.email}
            handleChange={this.handleInput}
            placeHolder={"example@email.com"}
          />
          <Input
            type={"password"}
            title={"password"}
            name={"password"}
            value={this.state.password}
            handleChange={this.handleInput}
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
