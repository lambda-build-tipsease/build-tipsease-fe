import React from "react";
// import {connect} from 'react-redux'
// import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "../container/Home";
// import users from "./users";
// import Register from '../Register/Register';

const loginpageStyle = {
  marginTop: "50px"
};

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    type: "users"
  };

  handleChanges = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("CLG THE STATE", this.state);
      axios
        .post("https://buildtipease.herokuapp.com/auth/users/login", {
          username: this.state.username,
          password: this.state.password,
          type: this.state.type
        })
        .then(res => {
          console.log(res);
          const { token, type, userInfo } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("username", userInfo.username);
          localStorage.setItem("password", userInfo.password);
          localStorage.setItem("id", userInfo.id);
          localStorage.setItem("type", this.state.type);
          console.log(token);
          this.props.history.push("/Home");
        })
        .catch(err => console.log(err));
    // }
  };

  handleToggle = (setType) => {
    this.setState((state) => ({
      type: setType,
    }));
  };

  render() {
    return (
      <div classNameName="page-login" style={loginpageStyle}>
        <div className="ui centered grid container">
          <div className="nine wide column">
            <div className="ui icon warning message">
              <i className="lock icon" />
              <div className="content">
                <div className="header">Must be Logged-In</div>
                <p>You must login/register in order to access this site</p>
              </div>
            </div>
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label>User</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="User"
                      onChange={this.handleChanges}
                      value={this.state.username}
                    />
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChanges}
                      value={this.state.password}
                    />
                  </div>
                  <div className="inline fields">
                    <div className="field">
                      <div className="ui radio checkbox">
                        <input
                          type="radio"
                          name="example2"
                          defaultChecked
                          onClick={() => this.handleToggle('users')}
                        />
                        <label>User</label>
                      </div>
                    </div>
                    <div className="field">
                      <div class="ui radio checkbox">
                        <input
                          type="radio"
                          name="example2"
                          onClick={() => this.handleToggle('serviceWorkers')}
                        />
                        <label>Service Worker</label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="ui primary labeled icon button"
                    type="submit"
                  >
                    <i className="unlock alternate icon" />
                    Login
                  </button>
                  <button
                    className="ui primary labeled icon button"
                    type="submit"
                  >
                    <i className="edit outline icon" />
                    <Link
                      to={{ pathname: "../Register/Register" }}
                      style={{ color: "#FFF" }}
                    >
                      Register
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
