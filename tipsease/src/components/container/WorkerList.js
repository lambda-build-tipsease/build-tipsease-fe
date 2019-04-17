import React, { Component } from 'react';
import axios from 'axios';



function WorkersList(props){

return (

    
    <div className="ui card">
                    <div className="image">
                        <img src={props.photoUrl} alt="user img"/>
                    </div>
                    <div className="content">
                        <a className="header">{props.fullName}</a>
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
                    </div>
                    </div>
    
    
        )
    }

export default WorkersList;