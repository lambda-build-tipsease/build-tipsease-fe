import React, { Component } from 'react';
import axios from 'axios';
import {getWorkerProfile} from '../../actions';


function WorkersList(props){

    const handleClick = (e) => {
      e.preventDefault();
      window.location = `/WorkerProfile/${props.id}`;
    //   props.history.push(`home/workerprofile${props.id}`);
    //   this.props.history.push('/workerprofile');
      console.log("IT WAS CLICKED")
  };



  console.log("WORKER LIST: ",props)
return (

    
    <div className="ui card">
    
                    <div className="image">
                        <img src={props.photoUrl} alt="user img"/>
                    </div>
                    <div className="content">
                        <a className="header" onClick={handleClick}>{props.fullName}</a>
                        <div className="meta">
                        <span className="date">{props.rating}</span>
                        </div>
                        <div className="description">
                        {props.serviceType}
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                        <i className="user icon"></i>
                        available
                        </a>
                        <div>
                        {props.single && <div>{props.bio}</div>}
                        </div>
                        <div>
                        {props.single && <div>{props.tagline}</div>}
                        </div>
                        <div>
                        {props.single && <div>{props.timeAtJob}</div>}
                        </div>
                        <div>
                        {props.single && <div>{props.workplace}</div>}
                        </div>
                        <div>
                        {props.single && <div>TIP: <input onChange={value => props.submitTip(value)}/> <button onClick={props.submitTip}> submit tip</button></div>}
                        </div>
                    </div>
                    </div>
    
    
        )
    }

export default WorkersList;