import React from "react";
import axios from "axios";
// import { getCustomers } from '../../actions/index';
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
    const token = localStorage.getItem("token");
    axios
      .get("https://buildtipease.herokuapp.com/auth/serviceWorkers", {
        headers: { Authorization: token }
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          workers: res.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };
  render() {
    const { workers } = this.state;

    return (
      <div className="ui grid container">
        <div className="ui segment">
          {workers.map(worker => (
            <WorkerList key={worker.id} {...worker} />
          ))}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//     users: state.serviceWorkers
// })

// export default connect(
//     mapStateToProps, { getCustomers }
// )(CustomersPage)

export default CustomersPage;
