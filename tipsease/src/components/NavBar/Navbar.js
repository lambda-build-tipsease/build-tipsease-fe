import React from 'react';
// import {NavLink} from 'react-router-dom';
// import  { connect } from 'react-redux';
// import { withRouter } from 'react-router';

import withStyles from './NavBarMaterial'


class Nav extends React.Component {
    state = { 
        userType: '' //stores the user type for example Service worker and user
    }

    //logout event
    Logout = e => {
        localStorage.clear();
    }
    render() {
        return (
        <div>
            test<withStyles />
         </div>

        )
    }
}

export default Nav;