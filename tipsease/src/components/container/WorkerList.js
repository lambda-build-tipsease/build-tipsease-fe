import React, { Component, useRef } from "react";

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
                        <a className="header" onClick={handleClick}>{props.fullName}</a>
                        <div className="meta">
                        <span className="date">{props.rating} rating</span>
                        </div>
                        <div className="description">
                        {props.serviceType}
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
                        {props.single && <div>TIP: <input ref={inputEl} style={{width:'100px', marginRight: '25px'}} /> <button className="ui inverted green button" stytle={{display:'flex'}} onClick={handleSumbit} style={{color:'#00000'}}>Submit Tip</button></div>}
                        </div> <br />
                    </div>
                    </div>
    
    
        )
    }

export default WorkersList;