import React from 'react'
import WorkerList from './WorkerList';
import { connect } from 'react-redux';
import { getWorkerProfile } from '../../actions'

const mapStateToProps = state => ({
    serviceWorker: state.serviceWorker,
    state
})



class WorkerProfile extends React.Component {
    componentDidMount() {
        this.getCustomers();
      }
    
    getCustomers = () => {
        let id = this.props.match.params.id
        this.props.getWorkerProfile(id);
      };

      submitTip = e => {
        e.preventDefault();
        
    }

    render(){
        let id = this.props.match.params.id
        console.log(id);
        let emp;
        // this.props.serviceWorker.filter(serviceWorker => id === serviceWorker.id)
        console.log("THIS.PROPS SERVICEWORKER", this.props.serviceWorker)
        console.log(this.props)
        console.log("employee",emp)
        return( <div className="container">
            <div><WorkerList {...this.props.serviceWorker} single={true} submitTip={this.submitTip}/></div>
            </div>
        )}
}

export default connect(mapStateToProps,{getWorkerProfile})(WorkerProfile);