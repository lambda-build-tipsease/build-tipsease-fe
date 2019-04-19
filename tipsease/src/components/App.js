import React from 'react';
import Nav from './NavBar/NavBarMaterial';
import { Login } from './Login/Login'
import { Switch, Route, Link ,BrowserRouter} from 'react-router-dom';
import SignIn from './Login/SignIn'
import Home from './container/Home'
import Register from './Register/Register';
import WorkerProfile from './container/WorkerProfile';
class App extends React.Component {


    render() {
        return (
            <div className="ui container">
    
            <Switch>
            <Link to="/login" component={Login}>Login</Link>
            <Link to="/home" component={Home}>Home</Link>
            <Link to="/register" component={Register}>Register</Link>
            <Link to="/workerprofile" component={WorkerProfile}>WorkerProfile</Link>
            </Switch>
            <Switch>
            <Route path = "/register" component = {Register}/>
            <Route path = "/login" component = {Login}/>
            
            <Route path = "/home" component = {Home}/>
            <Route path = "/workerprofile/:id" component = {WorkerProfile}/>
            </Switch>
            </div>
        )
    }
}

export default App;