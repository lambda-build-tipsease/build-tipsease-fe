import React from 'react';
import SearchBar from './SearchBar'


const colorTheme = {
    color: '#5bc0be'
};
class Navmenu extends React.Component {


    logoutHandler = async e => {
        console.log("LOGOUT CLICKED")        
        await localStorage.clear();
        // window.location = `/WorkerProfile/${props.id}`;

        window.location = "/login";
    }
    render() {

        return (
            
                <div className="ui secondary  menu" >
                <a className="active item" style={colorTheme}>
                    Tipsease
                </a>
                <a className="item">
                    Profile
                </a>
                <a className="item">
                    Favorites
                </a>
                <div className="right menu">
                    <div className="item">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                    </div>
                    </div>
                    <a className="ui item" onClick={this.logoutHandler}>
                    Logout
                    </a>
                </div>
                </div>
                

        )
    }
}

export default Navmenu;