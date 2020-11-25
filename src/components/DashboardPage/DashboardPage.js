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

  handleSelectSet = (e) => {
    e.preventDefault()
    console.log(e.target['set-select'].value)
    const selectedSet = this.state.mostRecentTenSets.find(set => set.set_name === e.target['set-select'].value)
    this.props.handleSelectSet(selectedSet)
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
      <form onSubmit={(e) => this.handleSelectSet(e)}>
        <fieldset>
          <legend>Set Form</legend>
          <label htmlFor="set-select"></label>
          <select id="set-select" name="set-select">
            <option>--select a set--</option>
            {this.state.mostRecentTenSets.map((set,index) => {
              return (
                <option key = {index}>{set.set_name}</option>
              );
            })}
            {/* Need to implement this */}
            <option>--choose set by set code--</option>
          </select>
          <button type='submit'>Start</button>
        </fieldset>
      </form>
    </>;
  }

}

export default DashboardPage;
