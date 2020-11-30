import React from 'react';
import apiService from '../../api-services/api-service';

class DashboardPage extends React.Component {  
  state = {
    allSets: [],
    allReviewableSets: [],
    mostRecentTenSets: [],
  };

  componentDidMount() {
    let validSets = [
      'core',
      'expansion',
      'masters',
      'masterpiece',
      //' from_the_vault',
      //' spellbook',
      'premium_deck',
      //' duel_deck',
      'draft_innovation',
      //' treasure_chest',
      //' commander',
      'planechase',
      'archenemy',
      'vanguard',
      'funny',
      'starter',
      //' box',
      //' promo',
      //' token',
      //' memoribilia',
    ]
    apiService.getAllSets()
      .then(allSets => {
        let allReviewableSets = allSets.filter(set => validSets.includes(set.set_type))
        let mostRecentTenSets = allReviewableSets.splice(allReviewableSets.length - 11, allReviewableSets.length - 1);
        this.setState({
          allSets,
          allReviewableSets,
          mostRecentTenSets,
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
