import React from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

class LandingPage extends React.Component {
  render() {
    return <>
      <div>Next Set: XYZ</div>
      <div>Countdown/Release Date</div>
      <div>Spoilers Available: XX/125</div>
      <div>Description of what app does: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, velit. Libero optio architecto cum et minima enim minus voluptates beatae atque non? Error minima modi vel maiores blanditiis perspiciatis deleniti.</div>

      <form>
        <fieldset>
          <legend>Login Form</legend>
          <div>
            <label>Username:</label>
            <input></input>
          </div>
          <div>
            <label>Password:</label>
            <input></input>
          </div>
          <button>Submit</button>
        </fieldset>
      </form>

      <button>Register</button>
    </>;
  }

}

export default LandingPage;
