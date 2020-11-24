import React from 'react';
import apiService from '../../api-services/api-service';

class DashboardPage extends React.Component {
  state = {
    allSets: [],
    mostRecentTenSets: [],
  };

  componentDidMount() {
    apiService.getAllSets()
      .then(allSets => {
        let mostRecentTenSets = allSets.splice(allSets.length - 11, allSets.length - 1);
        this.setState({
          allSets,
          mostRecentTenSets
        });
      });
  }

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
            <option>--select a set--</option>
            {this.state.mostRecentTenSets.map(set => {
              return (
                <option value={set.id}>{set.set_name}</option>
              );
            })}
            {/* Need to implement this */}
            <option>--choose set by set code--</option>
          </select>
          <button>Start</button>
        </fieldset>
      </form>
    </>;
  }

}

export default DashboardPage;
