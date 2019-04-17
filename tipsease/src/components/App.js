import React from 'react';
import Nav from './NavBar/NavBarMaterial';
import { Login } from './Login/Login'
import { Switch, Route, Link } from 'react-router-dom';
import SignIn from './Login/SignIn'
import Home from './container/Home'
import Register from './Register/Register';
class App extends React.Component {


    render() {
        return (
            <div className="ui container">
    
            <Switch>
            <Link to="/login" component={Login}>Login</Link>
            <Link to="/home" component={Home}>Home</Link>
            <Link to="/register" component={Register}>Register</Link>
            </Switch>
            <Route path = "/register" component = {Register}/>
            <Route path = "/login" component = {Login}/>
            
            <Route path = "/home" component = {Home}/>

            </div>
        )
    }
}

export default App;