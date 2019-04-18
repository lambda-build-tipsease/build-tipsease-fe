import React from "react";
import SearchBar from "./SearchBar";
import { search, filter } from "../../actions/index";
import { connect } from "react-redux";

const colorTheme = {
  color: "#5bc0be"
};
class Navmenu extends React.Component {
  logoutHandler = async e => {
    console.log("LOGOUT CLICKED");
    await localStorage.clear();
    // window.location = `/WorkerProfile/${props.id}`;

    window.location = "/login";
  };

  handleSearch = e => {
    this.props.search(e.target.value);
  };

  render() {
    return (
      <div className="ui secondary  menu">
        <a className="active item" style={colorTheme}>
          Tipsease
        </a>
        <a className="item">Profile</a>
        <a className="item">Favorites</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search..."
                onChange={this.handleSearch}
              />
              <i className="search link icon" />
            </div>
          </div>
          <a className="ui item" onClick={this.logoutHandler}>
            Logout
          </a>
        </div>
      </div>
    );
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
