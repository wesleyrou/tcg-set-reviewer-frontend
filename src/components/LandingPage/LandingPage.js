import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/api-service';

class LandingPage extends React.Component {

  handleSubmitJwtAuth(event) {
    event.preventDefault();

    const { username, password } = event.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.user_id);
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        console.error(err.error);
      });
  }

  checkUsername() {
    if (TokenService.getUsername())
      return TokenService.getUsername();
    return '';
  }

  render() {
    return <>
      <div>Next Set: XYZ</div>
      <div>Countdown/Release Date</div>
      <div>Spoilers Available: XX/125</div>
      <div>Description of what app does: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, velit. Libero optio architecto cum et minima enim minus voluptates beatae atque non? Error minima modi vel maiores blanditiis perspiciatis deleniti.</div>

      <form onSubmit={this.handleSubmitJwtAuth}>
        <fieldset>
          <legend>Login Form</legend>
          <div>
            <label htmlFor="username" >Username:</label>
            <input type="text" defaultValue={this.checkUsername()} name="username" required />
          </div>
          <div>
            <label htmlFor="password" >Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </fieldset>
      </form>
      <Link to='/register'>
        <button>Register</button>
      </Link>
    </>;
  }

}

export default LandingPage;
