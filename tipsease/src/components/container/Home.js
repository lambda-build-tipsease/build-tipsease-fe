import React from "react";
// import SearchBar from './SearchBar'
import Navmenu from "./NavMenu";
import CustomersPage from "./CustomersPage";
import { Redirect } from "react-router-dom";

class Home extends React.Component {

  state = { profileLink: false, profileType: null };

  profileClickHandler = () => {
    this.setState({profileLink:true});
  };

  render() {
    const { profileLink } = this.state;
    let id = localStorage.getItem("id");
    let userType = localStorage.getItem("type");
    console.log(localStorage)
    return (
      <div className="ui segment">
        <Navmenu linkToProfile={this.profileClickHandler}/>
        {profileLink && userType === 'users' ? (
          <Redirect push to={`/userprofile/${id}`} />
        ) : (
          <CustomersPage />
        )}
      </div>
    );
  }
}

export default Home;
