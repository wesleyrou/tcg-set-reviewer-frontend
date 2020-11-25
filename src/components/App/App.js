import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import apiService from '../../api-services/api-service';

class App extends React.Component {
  state= {
    currentCards:[],
  }

  handleSelectSet = (set) => {
    console.log(set)
    apiService.getCardsOfSet(set.id)
    .then(cardsOfSet => {
      this.setState({
        currentCards: cardsOfSet
      })
    })
    .then(() => {
      console.log(this.state.currentCards)
    })
    .catch(err => console.log(err))
  }

  render() {
    return <>
      <Header/>
      <main>
        <Switch>
          <Route exact path = '/' component = {LandingPage}/>
          <Route path = '/register' component = {RegistrationPage}/>
          <Route path = '/dashboard' component = {(props) => <DashboardPage handleSelectSet = {this.handleSelectSet}/>}/>
        </Switch>
      </main>      
    </>
  }
  
}

export default App;
