import React from 'react';
// import { Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import apiService from '../../services/api-service';
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
      })
      .catch(err => console.log(err));
  };

  render() {
    return <>
      <Header />
      <main>
        <PublicOnlyRoute exact path='/' component={(props) => <LandingPage {...props} />} />
        <PublicOnlyRoute exact path='/register' component={(props) => <RegistrationPage {...props} />} />
        <PrivateRoute exact path='/dashboard' component={(props) => <DashboardPage {...props} handleSelectSet={this.handleSelectSet} />} />
        <PrivateRoute exact path='/review' component={(props) => <ReviewPage {...props} currentSet={this.state.currentSet} currentCards={this.state.currentCards} />} />
      </main>
    </>;
  }

}

export default App;
