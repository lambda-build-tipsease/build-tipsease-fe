import React from 'react';
// import SearchBar from './SearchBar'
import Navmenu from './NavMenu';
import CustomersPage from './CustomersPage';

class Home extends React.Component {
    render() {
        return(
            <div className="ui container">
            <Navmenu />
            
            <CustomersPage / >
            </div>
        )
    }
}

export default Home;