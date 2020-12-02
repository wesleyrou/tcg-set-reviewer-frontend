import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import apiService from '../../api-services/api-service';
import ReviewPage from '../ReviewPage/ReviewPage';

class App extends React.Component {
  state = {
    currentCards: [],
    currentSet: {},
  };

  handleSelectSet = (set) => {
    // console.log(set);
    apiService.getCardsOfSet(set.id)
      .then(cardsOfSet => {
        this.setState({
          currentCards: cardsOfSet,
          currentSet: set
        });
      })
      .then(() => {
        // console.log(this.state.currentCards);
        //this.handleReviewStart();
      })
      .catch(err => console.log(err));
  };

  handleReviewStart = () => {
    this.props.history.push('/review');
  };

  render() {
    return <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={RegistrationPage} />
          <Route path='/dashboard' component={(props) => <DashboardPage props={props} handleSelectSet={this.handleSelectSet} />} />
          <Route path='/review' component={(props) => <ReviewPage props={props} currentSet={this.state.currentSet} currentCards={this.state.currentCards} />} />
        </Switch>
      </main>
    </>;
  }

}

export default App;
