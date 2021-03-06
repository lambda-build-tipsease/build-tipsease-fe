import React from 'react';
import {Link} from 'react-router-dom';
import { search, filter } from "../../actions/index";
import { connect } from "react-redux";

class Navmenu extends React.Component {


    logoutHandler = async e => {
        console.log("LOGOUT CLICKED")        
        await localStorage.clear();
        // window.location = `/WorkerProfile/${props.id}`;

        window.location = "/login";
    }
    
    handleSearch = e => {
      this.props.search(e.target.value);
    };

    render() {

        return (
            
                <div className="ui secondary  menu" style={{background:'#5bc0be'}}>
                <a className="active item" style={{background:'#2185d0'}} onClick={() => window.location = "/home"}>
                    Tipsease
                </a>
                <a className="item" onClck={() => this.props.history.push(`/users/1`)}>
                    Profile
                </a>
                <a className="item">
                    Favorites
                </a>
                <div className="right menu">
                    <div className="item">
                    <div className="ui icon input">
                        <input
                          type="text"
                          placeholder="Search..."
                          onChange={this.handleSearch}
                        />
                        <i className="search link icon"></i>
                    </div>
                    </div>
                    <a to className="ui item" onClick={this.logoutHandler}>
                    Logout
                    </a>
                </div>
                </div>
                

        )
    }
}

const mapStateToProps = state => ({
  workers: state.workers,
  search: state.search
});

export default connect(
  mapStateToProps,
  { search, filter }
)(Navmenu);
