import React from 'react';
import Nav from './NavBar/Navbar';
import { Login } from './Login/Login'
import { Switch, Route, Link } from 'react-router-dom';
import SignIn from './Login/SignIn'
import Register from './Register/Register';
class App extends React.Component {


    render() {
        return (
            <div className="ui container">
            <Switch>
            <Link to="/" component={Login}>Login</Link>
            <Link to="/register" component={Register}>Register</Link>
            </Switch>
            <Route   exact path = "/" component = {Login}/>
            <Route path = "/register" component = {Register}/>
            </div>
        )
    }
}

export default App;