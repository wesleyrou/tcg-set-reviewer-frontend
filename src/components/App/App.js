import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import apiService from '../../api-services/api-service';
import ReviewPage from '../ReviewPage/ReviewPage';
import CompiledReviews from '../CompiledReviews/CompiledReviews';

class App extends React.Component {
  state = {
    currentCards: [],
    currentSet: {},
  };

  handleSelectSet = (set, history) => {
    // console.log(set);
    apiService.getCardsOfSet(set.code)
      .then(cardsOfSet => {
        this.setState({
          currentCards: cardsOfSet,
          currentSet: set
        });
      })
      .then(() => {
        // console.log(this.state.currentCards);
        // history.push('/review');
      })
      .catch(err => console.log(err));
  };

  render() {
    return <>
      <Header />
      <main>
        {/* <Route exact path='/' component={LandingPage} /> */}
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/' component={(props) => <DashboardPage {...props} handleChangeSet = {this.handleChangeSet} handleSelectSet={this.handleSelectSet} />} />
        <Route exact path='/review' component={(props) => <ReviewPage {...props} currentSet={this.state.currentSet} currentCards={this.state.currentCards} />} />
        <Route exact path='/compiled-reviews' component={CompiledReviews} />
      </main>
    </>;
  }

}

export default App;
