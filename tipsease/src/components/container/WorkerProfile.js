import React from 'react'
import WorkerList from './WorkerList';
import { connect } from 'react-redux';
import { getWorkerProfile } from '../../actions'

const mapStateToProps = state => ({
    serviceWorkers: state.serviceWorkers
})


class WorkerProfile extends React.Component {
    
    render(){
        let id = this.props.match.params.id
        console.log(id);
        let emp = this.props.serviceWorkers.filter(worker => id === worker.id)
        console.log(this.props)
        console.log("employee",emp)
        return(
            <div><WorkerList />test</div>
        
        )}
}

export default connect (mapStateToProps)(WorkerProfile);