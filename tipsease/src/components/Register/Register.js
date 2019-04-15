import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    // state = {
    //     full_name='',
    //     username='',
    //     password='',
    //     type='',
    //     photoUrl=''
    // }


    render() {
        return (
            <div className="ui container">
            <form className="ui form">
  <h4 className="ui dividing header">Personal Information</h4>
  <div className="two fields">
    <div className="field">
      <label>Name</label>
      <div className="two fields">
        <div className="field">
          <input type="text" name="first-name" placeholder="First Name"/>
        </div>
        <div className="field">
          <input type="text" name="last-name" placeholder="Last Name"/>
        </div>
      </div>
    </div>
    <div className="field">
      <label>Gender</label>
      <div className="ui selection dropdown">
        <input type="hidden" name="gender" />
        <div className="default text">Gender</div>
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="item" data-value="male">Male</div>
          <div className="item" data-value="female">Female</div>
        </div>
      </div>
    </div>
  </div>
  <div className="two fields">
    <div className="field">
      <label>State</label>
      <select className="ui search dropdown">
        <option value="">State</option>
        <option value="AL">Alabama</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
    </div>
    <div className="field"></div>
  </div>
  <div className="field">
    <label>Biography</label>
    <textarea></textarea>
  </div>
  <h4 className="ui dividing header">Account Info</h4>
  <div className="two fields">
    <div className="required field">
      <label>Username</label>
      <div className="ui icon input">
        <input type="text" placeholder="Username" />
        <i className="user icon"></i>
      </div>
    </div>
    <div className="required field">
      <label>Password</label>
      <div className="ui icon input">
        <input type="password" />
        <i className="lock icon"></i>
      </div>
    </div>
  </div>

   <h4 className="ui dividing header">Settings</h4>
  <h5 className="ui header">User Type</h5>
  <div className="field">
    <div className="ui toggle checkbox">
      <input type="radio" name="privacy"/>
      <label>Service Worker</label>
    </div>
  </div>
  <div className="field">
    <div className="ui toggle checkbox">
      <input type="radio" name="privacy"/>
      <label>User</label>
    </div>
  </div>

  <div className="ui hidden divider"></div>
  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" name="hot-deals"/>
      <label>I agree to the <a href="#">Terms of Service</a>.</label>
    </div>
  </div>
  <div className="ui error message">
    <div className="header">We noticed some issues</div>
  </div>
  <div className="ui submit button">Register</div>
</form>
</div>       
          
        )
    }
}

export default Register;