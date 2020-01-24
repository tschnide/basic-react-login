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
  passwordError: "",
  emailOrPasswordError: ""
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
    let properEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //The email format is correct
    if (email === "" || password === "" || (!properEmailRegex.test(email))) {
      // The email is filled in
      if (email === "") {
        this.setState({
          emailError: "Please enter an email address"
        });
      } else if (!properEmailRegex.test(email)) {
        this.setState({
          emailError: "Please enter a valid email address."
        });
      } else {
        this.setState({ emailError: "" });
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
    }
    if (properEmailRegex.test(email) && password) {
      this.setState({ emailError: "", passwordError: "" });
      if (email === "t@gmail.com" && password === "pass") {
        return true;
      } else {
        this.setState({ emailOrPasswordError: "The email or password you entered is not in our system." })
      };
    };
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
            <Col>
              <Button
                style={buttonStyle}
                type={"primary"}
                title={"Login"}
                action={this.handleFormSubmit}
              />
            </Col>
            <Col>
              <Form.Text style={{ color: "red" }}>
                {this.state.emailOrPasswordError}
              </Form.Text>
            </Col>
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
