import React from 'react';

class DashboardPage extends React.Component {
  render() {
    return <>
      <nav>
      <ul>
        <li>My Reviews</li>
        <li>Compiled Reviews</li>
      </ul>
    </nav>


    <div>Next Set: XYZ</div>
    <div>Countdown/Release Date</div>
    <div>Spoilers Available: XX/125</div>
    <div>Description of what app does: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, velit. Libero optio architecto cum et minima enim minus voluptates beatae atque non? Error minima modi vel maiores blanditiis perspiciatis deleniti.</div>

    Start a new set review or continue a set review:
    <form>
      <fieldset>
        <legend>Set Form</legend>
        <label></label>
        <select>
          <option>AAA</option>
          <option>BBB</option>
          <option>CCC</option>
          <option>DDD</option>
        </select>
        <button>Start</button>
      </fieldset>
    </form>
    </>
  }
  
}

export default DashboardPage;
