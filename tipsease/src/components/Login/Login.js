import React from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import users from "./users";
import Register from '../Register/Register';

// import PropTypes from "prop-types";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import FormControl from "@material-ui/core/FormControl";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import withStyles from "@material-ui/core/styles/withStyles";

const loginpageStyle = {
  marginTop: '50px',
};

export class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };


  handleChanges = e => {
    this.setState({ ...this.state,[e.target.name]: e.target.value });
  };


  handleSubmit = e =>{
    e.preventDefault()
    axios 
        .post('https://buildtipease.herokuapp.com/auth/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            console.log(res)
            const {token, username, userId} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
            localStorage.setItem('userId', userId)
            console.log(token)
            this.props.history.push('/Posts')
            axios
                .get('https://buildtipease.herokuapp.com/auth/users', {headers: {Authorization: token}} )
                .then(res => {
                    console.log(res); 
                    }
                    )
                .catch(err=> console.log(err))
        })
}



  render() {
    return (
      <div classNameName="page-login" style={loginpageStyle}>
      <div className="ui centered grid container">
        <div className="nine wide column">
          <div className="ui icon warning message">
              <i className="lock icon"></i>
              <div className="content">
                <div className="header">
                  Must be Logged-In
                </div>
                <p>You must login/register in order to access this site</p>
              </div>
            </div>
          <div className="ui fluid card">
            <div className="content">
            <form className="ui form" onSubmit={this.handleSubmit}>
              <div className="field">
                <label>User</label>
                <input type="text" name="user" placeholder="User" onChange={this.handleChanges}/>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="pass" placeholder="Password" onChange={this.handleChanges}/>
              </div>
              <button className="ui primary labeled icon button" type="submit">
                <i className="unlock alternate icon"></i>
                Login
              </button>
              <button className="ui primary labeled icon button" type="submit">
                <i className="edit outline icon"></i>
                <Link to={{pathname: "../Register/Register"}} style={{ color: '#FFF' }}>Register</Link>
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
