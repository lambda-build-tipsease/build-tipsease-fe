import React, { Component } from "react";
import axios from "axios";

export default class extends Component {
  async componentDidMount() {
    const id = localStorage.getItem('id')
    let result = await axios.get(`https://buildtipease.herokuapp.com/users/${id}`);
    console.log(result);
  }

  render() {
    return (
      <div className="ui card">
        {/* <div className="image">
          <img src={props.photoUrl} alt="user img" />
        </div>
        <div className="content">
          <a className="header" onClick={handleClick}>
            {props.fullName}
          </a>
          <div className="meta">
            <span className="date">{props.rating} rating</span>
          </div>
          <div className="description">{props.serviceType}</div>
        </div>
        <div className="extra content">
          <br />
          <div>{props.single && <div>Bio: {props.bio}</div>}</div> <br />
          <div>{props.single && <div>Tagline: {props.tagline}</div>}</div>{" "}
          <br />
          <div>
            {props.single && <div>Time @ Job: {props.timeAtJob}</div>}
          </div>{" "}
          <br />
          <div>
            {props.single && <div>Work Place: {props.workplace}</div>}
          </div>{" "}
          <br />
          <div className="">
            {props.single && (
              <div>
                TIP:{" "}
                <input
                  ref={inputEl}
                  style={{ width: "100px", marginRight: "25px" }}
                />{" "}
                <button
                  className="ui inverted green button"
                  stytle={{ display: "flex" }}
                  onClick={handleSumbit}
                  style={{ color: "#00000" }}
                >
                  Submit Tip
                </button>
              </div>
            )}
          </div>{" "}
          <br />
        </div> */}
      </div>
    );
  }
}
