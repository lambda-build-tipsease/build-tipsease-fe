import React from 'react'
import WorkerList from './WorkerList';
import { connect } from 'react-redux';
import { getWorkerProfile,deleteServiceWorkers } from '../../actions'
import NavMenu from './NavMenu'
import { Button } from '@material-ui/core';
const mapStateToProps = state => ({
    serviceWorker: state.serviceWorker,
    state
})

// const serviceWorker = props => {
//     const handleClickDelete = () => {
//       props.deleteServiceWorkers(props.id);
//     };

class WorkerProfile extends React.Component {
    componentDidMount() {
        // this.deleteServiceWorkers();
        this.getCustomers();
        deleteServiceWorkers();
        console.log('DELETE',deleteServiceWorkers())
      }
    
    getCustomers = () => {
        let id = this.props.match.params.id
        this.props.getWorkerProfile(id);
      };

      submitTip = e => {
        e.preventDefault();
            
        
    }

    deleteServiceWorkers = () => {
        let id = this.props.match.params.id
          this.props.deleteServiceWorkers(id);
        
    }
    render(){
        let id = this.props.match.params.id
        console.log(id);
        let emp;
        // this.props.serviceWorker.filter(serviceWorker => id === serviceWorker.id)
        console.log("THIS.PROPS SERVICEWORKER", this.props.serviceWorker)
        console.log(this.props)
        console.log("employee",emp)
        return( <>
        <NavMenu />
        <div className="ui centered card" style={{marginTop:'50px'}}>
            <div><WorkerList {...this.props.serviceWorker} single={true} submitTip={this.submitTip}/><Button style={{left: '37%'}}>Favorite</Button></div>
            </div>
            </>
        )}
}

export default connect(mapStateToProps,{getWorkerProfile})(WorkerProfile);