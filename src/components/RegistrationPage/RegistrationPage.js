import React from 'react';

class RegistrationPage extends React.Component {
  render() {
    return <>
      <form>
        <fieldset>
          <legend>Registration Form</legend>
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
    </>;
  }

}

export default RegistrationPage;
