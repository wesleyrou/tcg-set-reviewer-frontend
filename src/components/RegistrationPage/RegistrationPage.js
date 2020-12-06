import React from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';


class RegistrationPage extends React.Component {

  handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
      .then(() => {
        this.handleLoginAfterRegister(username.value, password.value);
      })
      .catch((err) => {
        console.error(err.error);
      });
  };

  handleLoginAfterRegister = (username, password) => {
    this.props.history.push("/login");
  };

  render() {
    return <>
      <form onSubmit={this.handleRegisterSubmit}>
        <fieldset>
          <legend>Registration Form</legend>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <Link to='/'>
        <button>Login</button>
      </Link>
    </>;
  }

}

export default RegistrationPage;
