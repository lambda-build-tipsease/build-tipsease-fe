import React from "react";
// import {connect} from 'react-redux';
// import { withRouter } from "react-router";
// import { Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// import Home from '../container/Home';
// import {addServiceWorkers,addCustomers, getType,getWorkers} from '../../actions';
// import users from "./users";
// import Register from '../Register/Register';
// import logo from './logo.png';
// import styled, {ThemeProvider} from 'styled-components';
// import theme from 'styled-theming';

const loginpageStyle = {
  marginTop: '100px'
};

// const HeaderImage = styled.div`
//   background-image: url(${logo})
// `;
// const logobg = require('./logo.png');
// const style = {background: 'url(./logo.png)'}

export class Login extends React.Component {
  state = {
    username: '',
    password: '',
    type: 'users'
  };


  handleChanges = e => {
    this.setState({ ...this.state,[e.target.name]: e.target.value });
  };


  handleSubmit = e =>{
    e.preventDefault()
    console.log("CLG THE STATE",this.state)
        axios.post('https://buildtipease.herokuapp.com/auth/users/login', {
            username: this.state.username,
            password: this.state.password,
            type: this.state.type
        })
        .then(res => {
            console.log(res)
            const {token, username, password,type} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            localStorage.getItem('type', type)
            console.log(token)
            this.props.history.push('/Home')
            // axios
            //     .post('https://buildtipease.herokuapp.com/auth/users', {headers: {Authorization: token}} )
            //     .then(res => {
            //         console.log(res.data.token); 
            //         }
            //         )
            //     .catch(err=> console.log(err))
        }).catch(err => console.log(err))
}

// handleLogin = event => {

//   event.preventDefault();

//   axios
//     .post('https://buildtipease.herokuapp.com/auth/users/login', this.state)
//     .then(res => {
//       console.log("handle login event RES", res)
//       const {token, username, password,type,userInfo} = res.data
//       localStorage.setItem('token', token);
//       localStorage.setItem('username', username)
//       localStorage.setItem('password', password)
//       localStorage.getItem('serviceType', type)
//       console.log(token)
//       console.log("USER ID",userInfo.id)
//       this.setState({ userType: localStorage.getItem('type') })
//       // this.props.geType(this.state.type);
//       // this.props.getWorkers();
//       if (this.state.type !== 'users') {
//         return this.props.history.push(`/worker-profile/id`);
//       } else {
//         return this.props.history.push(`/users/${userInfo.id}`)
//       }
//     })
//     .catch(err => console.log(err));     
// };

  render() {
    return (
      
      <div className="page-login" style={loginpageStyle}>
      {/* <img src={logobg} style={{width:'50px'}}/> */}
      <div className="ui centered grid container" >
        <div className="nine wide column">
          <div className="ui icon warning message" style={{background:'#2185d0'}}>
              <i className="lock icon" style={{color:'#5bc0be'}}></i>
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
                <input type="text" name="username" placeholder="User" onChange={this.handleChanges} value={this.state.username}/>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" onChange={this.handleChanges} value={this.state.password}/>
              </div>
              <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" id="users" name="example2" defaultChecked  onChange={this.handleChanges}/>
                  <label>User</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" id="serviceWorkers" name="example2"/>
                  <label>Service Worker</label>
                </div>
              </div>
            </div>
              <button className="ui primary labeled icon button" type="submit" onChange={this.handleChanges}>
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
