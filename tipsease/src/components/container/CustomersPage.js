import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getCustomers, getServiceWorkers } from "../../actions";
import { connect } from "react-redux";
import WorkerList from "./WorkerList";

class CustomersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: []
    };
  }

  componentDidMount() {
    this.getCustomers();
  }

  getCustomers = () => {
    this.props.getServiceWorkers(
      "https://buildtipease.herokuapp.com/auth/serviceWorkers"
    );
  };

  handleClick = e => {
    e.preventDefault();
    console.log("IT WAS CLICKED");
  };

  render() {
    const { search, workers } = this.props;
    let workersNames = workers.map(worker => worker.fullName);
    let workersDisplay = [];
    if (workersNames.length > 0 && search && search.length > 0 && workers) {
      for (let worker of workers) {
        
        if (worker.fullName.toLowerCase().startsWith(search.toLowerCase())) {
          console.log(worker.fullName)
          console.log(search)
          workersDisplay.push(worker);
        }
      }
    }
    console.log(workersDisplay)
    if (search && search.length > 0) {
      return (
        <>
          {workers ? (
            <div className="test">
              <div className="ui four doubling stackable cards">
                {workersDisplay.map(worker => (
                  <WorkerList key={worker.id} {...worker} />
                ))}
              </div>
            </div>
          ) : (
            <div />
          )}
        </>
      );
    }
    return (
      <>
        {workers ? (
          <div className="test">
            <div className="ui four doubling stackable cards">
              {workers.map(worker => (
                <WorkerList key={worker.id} {...worker} />
              ))}
            </div>
          </div>
        ) : (
          <div />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  workers: state.serviceWorkers,
  search: state.search
});

export default connect(
  mapStateToProps,
  { getCustomers, getServiceWorkers }
)(CustomersPage);