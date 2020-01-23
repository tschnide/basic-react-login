import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let defaultState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};

class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
  };

  handleInput = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  };

  validate = () => {
    let email = this.state.email;
    let password = this.state.password;
    let properEmailRegex = "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}\b";

    // The email format is correct
    if (email === "" || password === "" || !email.match(properEmailRegex)) {
      // The email is filled in
      if (email === "") {
        this.setState({
          emailError: "Please enter an email address"
        });
      } else if (!email.match(properEmailRegex)) {
        this.setState({
          emailError: "Please enter a valid email address."
        });
      } 
      // The password is filled in
      if (password === "") {
        this.setState({
          passwordError: "Please enter a password"
        });
      } else {
        this.setState({ passwordError: "" });
      }
      return false;
    } else {
      this.setState({ emailError: "" });
    }
    // The email and password are correct (Finish this)
    return true;
  };

  // if the email and pass are correct, add /home to the url
  handleFormSubmit = event => {
    event.preventDefault();
    let isValid = this.validate();
    if (isValid) {
      const loginIsSuccessfull =
        this.state.email === "t@gmail.com" && this.state.password === "pass"
          ? this.props.history.push("/home")
          : "false";
    }
    // this.setState(defaultState);
  };

  render() {
    return (
      <Form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <div className="container">
          <Row>
            <Col>
              <Input
                type={"text"}
                title={"email"}
                name={"email"}
                value={this.state.email}
                handleChange={this.handleInput}
                placeHolder={"example@email.com"}
              />
              <Form.Text style={{ color: "red" }}>
                {this.state.emailError}
              </Form.Text>
            </Col>
          </Row>
          <Row>
            <Input
              type={"password"}
              title={"password"}
              name={"password"}
              value={this.state.password}
              handleChange={this.handleInput}
            />
            <Form.Text style={{ color: "red" }}>
              {this.state.passwordError}
            </Form.Text>
          </Row>
          <Row>
            <Button
              style={buttonStyle}
              type={"primary"}
              title={"Login"}
              action={this.handleFormSubmit}
            />
          </Row>
        </div>
      </Form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default LoginContainer;
