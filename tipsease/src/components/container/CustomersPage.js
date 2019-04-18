import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { getCustomers,getServiceWorkers } from '../../actions';
import {connect} from 'react-redux';
// import { connect } from 'react-redux';
import WorkerList from "./WorkerList";

class CustomersPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      workers: []
    };
  }
  // const baseURL = 'https://buildtipease.herokuapp.com';

  componentDidMount() {
    this.getCustomers();
  }

getCustomers = () => {
    this.props.getServiceWorkers(
      "https://buildtipease.herokuapp.com/auth/serviceWorkers"
    );
  };

  handleClick = (e) => {
    e.preventDefault();
    // props.history.push(`/workerprofile${props.id}`);
    // this.props.history.push('/workerprofile');
    console.log("IT WAS CLICKED")
};

// onClick={() => this.props.history.push(`/workerprofile/${worker.id}`)


// onClick={() => this.props.history.push(`/workerprofile/${props.workers.id}`)}
  render() {
    const { workers } = this.props;
    console.log("THIS PROPS",this.props)
    return (
      <div className="test">
        <div className="ui four doubling stackable cards">
          {workers.map(worker => (
            <WorkerList key={worker.id} {...worker}/>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    workers: state.serviceWorkers
})

export default connect(
    mapStateToProps, { getCustomers,getServiceWorkers }
)(CustomersPage)

// export default CustomersPage;
