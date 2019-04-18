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
        <img src={props.photoUrl} alt="user img" />
      </div>
      <div className="content">
        <a className="header" onClick={handleClick}>
          {props.fullName}
        </a>
        <div className="meta">
          <span className="date">{props.rating}</span>
        </div>
        <div className="description">{props.serviceType}</div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon" />
          available
        </a>
        <div>{props.single && <div>{props.bio}</div>}</div>
        <div>{props.single && <div>{props.tagline}</div>}</div>
        <div>{props.single && <div>{props.timeAtJob}</div>}</div>
        <div>{props.single && <div>{props.workplace}</div>}</div>
        <div>
          {props.single && (
            <div>
              TIP: <input ref={inputEl} />{" "}
              <button onClick={handleSumbit}> submit tip</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkersList;
