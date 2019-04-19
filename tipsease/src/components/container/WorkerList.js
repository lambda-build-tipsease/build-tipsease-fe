import React, { Component, useRef } from "react";
import {Link} from 'react-router-dom';
import {deleteServiceWorkers} from '../../actions';
import {connect} from 'react-redux';

function WorkersList(props) {
  const inputEl = useRef(null);

  const handleClick = e => {
    e.preventDefault();
    window.location = `/WorkerProfile/${props.id}`;
    console.log("IT WAS CLICKED");
  };

  const handleSumbit = async e => {
    e.preventDefault();
    let success = await props.submitTip(inputEl.current.value);
    console.log(success)
  };
    
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
                        <div className="">
                        {props.single && <div>TIP: <input ref={inputEl} style={{width:'100px', marginRight: '35px'}} /> <button className="ui secondary button" stytle={{display:'flex'}} onClick={handleSumbit} style={{color:'#00000', display:'flex',float:'right', height:'35px', alignContent:'center'}}>Submit Tip</button></div>}
                        </div> <br />
                    </div>
                    </div>
    
    
        )
    }

export default WorkersList;