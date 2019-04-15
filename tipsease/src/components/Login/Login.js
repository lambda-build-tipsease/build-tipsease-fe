import React from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import users from "./users";
// import Register from '../Register/Register';

import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    users:
      JSON.parse(localStorage.getItem("users")) === null
        ? users
        : JSON.parse(localStorage.getitem("users"))
  };

  login = e => {
    e.preventDefault();
    if (
      this.state.users.filter(
        user =>
          user.username === this.state.username &&
          user.password === this.state.password
      ).length > 0
    ) {
      localStorage.setItem("user", JSON.stringify(this.state));
      this.props.login();
    } else {
      alert("Invalid Username and/or Password");
      this.setState({
        username: "",
        password: ""
      });
    }
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Log In:</h1>
        <form onSubmit={this.login} className="login">
          <input
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <input
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChanges}
            type="password"
          />
          <button>Login</button>
        </form>
        <Link
          to={{
            pathname: "/register",
            state: { users: this.state.users }
          }}
        >
          REGISTER
        </Link>
        <Route exact path="/register" />
      </div>
    );
  }
}
