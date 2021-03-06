import React, { Component } from 'react';
// import Nav from './NavBar/NavBarMaterial';
import { Login } from './Login/Login'
import { Switch, Route, Link} from 'react-router-dom';
// import { Switch, Route, Link ,BrowserRouter} from 'react-router-dom';
// import SignIn from './Login/SignIn'
import Home from './container/Home'
import Register from './Register/Register';
import WorkerProfile from './container/WorkerProfile';
class App extends Component {


    render() {
        console.log('APP JS PROPS',this.props)
        return (
            <div className="ui container">
            {/* {this.props.match.path === '/login' ? (<div><Link to="/login" component={Login}>Login</Link> <Link to="/register" component={Register}>Register</Link></div>) : (<div><Link to="/home" component={Home}>Home</Link> <Link to="/workerprofile" component={WorkerProfile}>WorkerProfile</Link></div>)} */}
            
            
            
            <Switch>
            <Link to="/login" component={Login}>Login</Link>
            <Link to="/register" component={Register}>Register</Link>
            <Link to="/home" component={Home}>Home</Link>
            <Link to="/workerprofile" component={WorkerProfile}>WorkerProfile</Link>
            </Switch>
            <Switch>

            <Route path = "/register" component = {Register} />
            <Route path = "/login" component = {Login}/>
            
            <Route path = "/home" component = {Home}/>
            <Route path = "/workerprofile/:id" component = {WorkerProfile}/>
            </Switch>
            </div>
        )
    }
}

export default App;