import React from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
// import {getWorkerProfile} from '../../actions';
import {deleteServiceWorkers} from '../../actions';
import {connect} from 'react-redux';
function WorkersList(props){

    const handleClick = (e) => {
      e.preventDefault();
      window.location = `/WorkerProfile/${props.id}`;
    //   props.history.push(`home/workerprofile${props.id}`);
    //   this.props.history.push('/workerprofile');
      console.log("IT WAS CLICKED")
  };

  
//   handleDelete = () => {
//     let id = this.props.match.params.id
//       this.props.deleteServiceWorkers(id);
    
// }

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     let id = this.props.match.params.id
    //       this.props.deleteServiceWorkers(id);
        
    // }

  console.log("WORKER LIST: ",props)
return (

    
    <div className="ui card">
    
                    <div className="image">
                        <img src={props.photoUrl} alt="user img"/>
                    </div>
                    <div className="content">
                        <Link className="header" onClick={handleClick}>{props.fullName}</Link>
                        <div className="meta">
                        <span className="date">Rating: <strong></strong>{props.rating} stars</span>
                        </div>
                        <div className="description">
                        Service: {props.serviceType}
                        </div>
                    </div>
                    <div className="extra content" style={{background:'#5bc0be'}}>
                        <Link>
                        <i className="user icon"></i>
                        available
                        </Link><br />
                        <div>
                        {props.single && <div>Bio: {props.bio}</div>}
                        </div> <br />
                        <div>
                        {props.single && <div>Tagline: {props.tagline}</div>}
                        </div> <br />
                        <div>
                        {props.single && <div>Time @ Job: {props.timeAtJob}</div>}
                        </div> <br />
                        <div>
                        {props.single && <div>Work Place: {props.workplace}</div>}
                        </div> <br />
                        <div className="" >
                        {props.single && <div>TIP: <input style={{width:'100px', marginRight: '25px',height:'35px'}} onChange={value => props.submitTip(value)} /> <button className="ui secondary button" onClick={props.submitTip} style={{color:'#00000', display:'flex',float:'right', height:'35px', alignContent:'center'}}> submit tip</button></div>}
                        </div>
                        
                         <br />
                    </div>
                    </div>
    
    
        )
    }

export default WorkersList;