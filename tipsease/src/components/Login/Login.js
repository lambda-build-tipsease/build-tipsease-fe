import React from "react";
// import {connect} from 'react-redux'
// import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import axios from "axios";
// import users from "./users";
// import Register from '../Register/Register';



const loginpageStyle = {
  marginTop: '50px',
};

export class Login extends React.Component {
  state = {
    username: '',
    password: '',
    type: ''
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
            const {token, username, password,type} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            localStorage.setItem('type', type)
            console.log(token)
            this.props.history.push('/Protected')
            axios
                .post('https://buildtipease.herokuapp.com/auth/users', {headers: {Authorization: token}} )
                .then(res => {
                    console.log(res.data.token); 
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
              <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="example2" checked="checked" />
                  <label>User</label>
                </div>
              </div>
              <div className="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="example2" />
                  <label>Service Worker</label>
                </div>
              </div>
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
