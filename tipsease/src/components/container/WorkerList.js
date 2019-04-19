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

    
    <div className="ui card" style={{background:'#5bc0be'}}>
    
                    <div className="image">
                        <img src={props.photoUrl} alt="user img"/>
                    </div>
                    <div className="content">
                        <a className="header" onClick={handleClick}>{props.fullName}</a>
                        <div className="meta">
                        <span className="date">Rating: {props.rating} stars</span>
                        </div>
                        <div className="description">
                        Service: {props.serviceType}
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                        <i className="user icon"></i>
                        available
                        </a><br />
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
                        <div className="">
                        {props.single && <div>TIP: <input style={{width:'100px', marginRight: '25px'}} onChange={value => props.submitTip(value)} /> <button className="ui inverted green button" stytle={{display:'flex'}} onClick={props.submitTip} style={{color:'#00000'}}> submit tip</button></div>}
                        </div> <br />
                    </div>
                    </div>
    
    
        )
    }

export default WorkersList;