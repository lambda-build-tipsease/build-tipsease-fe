import React from "react";
import WorkerList from "./WorkerList";
import SuccessModal from "./SuccessModal";
import { connect } from "react-redux";
import { getWorkerProfile, sendTip } from "../../actions";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const mapStateToProps = state => ({
  serviceWorker: state.serviceWorker,
  state
});

class WorkerProfile extends React.Component {
  state = { modal: false, tip: null };
  componentDidMount() {
    this.getCustomers();
  }

  getCustomers = () => {
    let id = this.props.match.params.id;
    this.props.getWorkerProfile(id);
  };

  submitTip = tip => {
    this.props.sendTip(this.props.match.params.id, tip).then(res => {
      this.setState({ tip, modal: true });
    });
  };

  render() {
    let { tip } = this.state;
    return (
      <div className="container">
        <WorkerList
          {...this.props.serviceWorker}
          single={true}
          submitTip={this.submitTip}
        />
        <Modal open={this.state.modal}>
          <SuccessModal {...this.props.serviceWorker} tipAmount={tip}/>
        </Modal>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getWorkerProfile, sendTip }
)(WorkerProfile);
