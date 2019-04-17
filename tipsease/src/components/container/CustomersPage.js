import React from 'react';
import axios from 'axios';
import { getCustomers } from '../../actions/index';
import { connect } from 'react-redux';
class CustomersPage extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        users:[]
    }
}
    // const baseURL = 'https://buildtipease.herokuapp.com';
    
componentDidMount(){
    this.getCustomers();
}

    getCustomers = () => {
        
        const token = localStorage.getItem('token')
    axios.get('https://buildtipease.herokuapp.com/users', {headers: {Authorization: token}})
    .then(res=> 
      {console.log(res.data)
      this.setState({      
          posts: res.data
      })
      console.log(this.state.posts)
  })
      .catch(err=> console.log(err))
}
    render(){
    return (
        <div className="ui container">
            <div className="ui segment">
            <div className="ui card">
                    <div className="image">
                        <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="user img"/>
                    </div>
                    <div className="content">
                        <a class="header">Kristy</a>
                        <div className="meta">
                        <span className="date">Joined in 2013</span>
                        </div>
                        <div className="description">
                        Kristy is an art director living in New York.
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                        <i className="user icon"></i>
                        available
                        </a>
                    </div>
                    </div>
            </div>
        </div>
    )
}

}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(
    mapStateToProps, { getCustomers }
)(CustomersPage)